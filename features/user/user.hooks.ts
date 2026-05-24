import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
  keepPreviousData,
  type QueryClient,
} from "@tanstack/react-query";
import { userKeys } from "./user.query-keys";
import { userService } from "../../core/container";
import { type User, type UserListParams, type CreateUserInput, type UpdateUserInput } from "./user.type";
import { parseError } from "../../core/errors/api-errors";

// ─── Read ──────────────────────────────────────────────────────────────────

export function useUsers(params?: UserListParams) {
  return useQuery({
    queryKey: userKeys.list(params),
    queryFn: () => userService.listUsers(params),
    placeholderData: keepPreviousData, 
    staleTime: 1000 * 60 * 2,          
  });
}

export function useUser(id: string, options?: { enabled?: boolean }) {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => userService.getUser(id),
    enabled: !!id && (options?.enabled ?? true),
    staleTime: 1000 * 60 * 5,
  });
}



export function useInfiniteUsers(params?: Omit<UserListParams, "page">) {
  return useInfiniteQuery({
    queryKey: userKeys.list({ ...params, _infinite: true } as UserListParams),
    queryFn: ({ pageParam }) =>
      userService.listUsers({ ...params, page: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: ({ pagination }) =>
      pagination.hasNextPage ? pagination.page + 1 : undefined,
    staleTime: 1000 * 60 * 2,
  });
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateUser() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (input: CreateUserInput) => userService.createUser(input),
    onSuccess: (newUser) => {
      // Optimistically insert into all cached lists
      qc.setQueriesData<ReturnType<typeof userService.listUsers> extends Promise<infer R> ? R : never>(
        { queryKey: userKeys.lists() },
        (old) => {
          if (!old) return old;
          return {
            ...old,
            items: [newUser, ...old.items],
            pagination: { ...old.pagination, total: old.pagination.total + 1 },
          };
        }
      );
      // Seed the detail cache — avoids a round-trip when navigating to new user
      qc.setQueryData(userKeys.detail(newUser.id), newUser);
    },
    onError: (error) => {
      throw parseError(error);
    },
  });
}

// ─── Update (with optimistic update) ─────────────────────────────────────────

export function useUpdateUser() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UpdateUserInput }) =>
      userService.updateUser(id, input),

    onMutate: async ({ id, input }) => {
      await qc.cancelQueries({ queryKey: userKeys.detail(id) });
      const previous = qc.getQueryData<User>(userKeys.detail(id));

      qc.setQueryData<User>(userKeys.detail(id), (old) =>
        old ? { ...old, ...input } : old
      );

      // Return snapshot for rollback on error
      return { previous, id };
    },

    onError: (_err, _vars, context) => {
      // Roll back to pre-mutation value
      if (context?.previous) {
        qc.setQueryData(userKeys.detail(context.id), context.previous);
      }
    },

    onSettled: (_data, _err, { id }) => {
      // Always revalidate after mutation settles
      qc.invalidateQueries({ queryKey: userKeys.detail(id) });
      qc.invalidateQueries({ queryKey: userKeys.lists() });
    },
  });
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteUser() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => userService.deleteUser(id),

    onMutate: async (id) => {
      await qc.cancelQueries({ queryKey: userKeys.lists() });
      const previousLists = qc.getQueriesData({ queryKey: userKeys.lists() });

      // Optimistically remove from all list caches
      qc.setQueriesData(
        { queryKey: userKeys.lists() },
        (old: { items: User[] } | undefined) =>
          old ? { ...old, items: old.items.filter((u) => u.id !== id) } : old
      );

      return { previousLists };
    },

    onError: (_err, _id, context) => {
      context?.previousLists?.forEach(([key, data]) => {
        qc.setQueryData(key, data);
      });
    },

    onSettled: () => {
      qc.invalidateQueries({ queryKey: userKeys.lists() });
    },
  });
}

// ─── Prefetch Utility ─────────────────────────────────────────────────────────
// Call on hover/focus to pre-warm the cache before navigation

export function prefetchUser(qc: QueryClient, id: string): Promise<void> {
  return qc.prefetchQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => userService.getUser(id),
    staleTime: 1000 * 60 * 5,
  });
}