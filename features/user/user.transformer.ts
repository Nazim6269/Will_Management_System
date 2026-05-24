
import {
  type User,
  type UserDTO,
  type UserListDTO,
  type PaginatedResult,
  type CreateUserInput,
} from "./user.type";

export function transformUser(dto: UserDTO): User {
  return {
    id: dto.id,
    email: dto.email,
    firstName: dto.first_name,
    lastName: dto.last_name,
    fullName: `${dto.first_name} ${dto.last_name}`.trim(),
    role: dto.role as User["role"],
    status: dto.status as User["status"],
    avatarUrl: dto.avatar_url,
    createdAt: new Date(dto.created_at),
    updatedAt: new Date(dto.updated_at),
  };
}

export function transformUserList(dto: UserListDTO): PaginatedResult<User> {
  return {
    items: dto.data.map(transformUser),
    pagination: {
      page: dto.meta.current_page,
      perPage: dto.meta.per_page,
      total: dto.meta.total,
      totalPages: dto.meta.last_page,
      hasNextPage: dto.meta.current_page < dto.meta.last_page,
      hasPreviousPage: dto.meta.current_page > 1,
    },
  };
}

// Domain model → API payload (for create/update)
export function toCreateUserPayload(input: CreateUserInput): Record<string, unknown> {
  return {
    email: input.email,
    first_name: input.firstName,
    last_name: input.lastName,
    role: input.role,
    password: input.password,
  };
}