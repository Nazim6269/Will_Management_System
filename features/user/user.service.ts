

import { type IUserRepository } from "@/features/user/user.repository";
import {
  transformUser,
  transformUserList,
  toCreateUserPayload,
} from "@/features/user/user.transformer";
import {
  type User,
  type PaginatedResult,
  type UserListParams,
  type CreateUserInput,
  type UpdateUserInput,
  CreateUserSchema,
  UpdateUserSchema,
} from "./user.type";
import { parseError } from "@/core/errors/api-errors";
import { logger } from "@/core/monitoring/logger";

export class UserService {
  constructor(private readonly repo: IUserRepository) {}

  async listUsers(params?: UserListParams): Promise<PaginatedResult<User>> {
    try {
      const dto = await this.repo.findAll(params);
      return transformUserList(dto);
    } catch (err) {
      logger.error("UserService.listUsers failed", err);
      throw parseError(err);
    }
  }

  async getUser(id: string): Promise<User> {
    try {
      const dto = await this.repo.findById(id);
      return transformUser(dto);
    } catch (err) {
      logger.error(`UserService.getUser(${id}) failed`, err);
      throw parseError(err);
    }
  }

  async createUser(input: CreateUserInput): Promise<User> {
    // Service layer validates business inputs
    const parsed = CreateUserSchema.parse(input);
    const payload = toCreateUserPayload(parsed);

    try {
      const dto = await this.repo.create(payload);
      logger.info("User created", { id: dto.id });
      return transformUser(dto);
    } catch (err) {
      logger.error("UserService.createUser failed", err);
      throw parseError(err);
    }
  }

  async updateUser(id: string, input: UpdateUserInput): Promise<User> {
    const parsed = UpdateUserSchema.parse(input);

    // Convert camelCase input to snake_case payload
    const payload: Record<string, unknown> = {};
    if (parsed.firstName !== undefined) payload.first_name = parsed.firstName;
    if (parsed.lastName !== undefined) payload.last_name = parsed.lastName;
    if (parsed.role !== undefined) payload.role = parsed.role;

    try {
      const dto = await this.repo.update(id, payload);
      return transformUser(dto);
    } catch (err) {
      logger.error(`UserService.updateUser(${id}) failed`, err);
      throw parseError(err);
    }
  }

  async deleteUser(id: string): Promise<void> {
    try {
      await this.repo.remove(id);
      logger.info("User deleted", { id });
    } catch (err) {
      logger.error(`UserService.deleteUser(${id}) failed`, err);
      throw parseError(err);
    }
  }

  async uploadAvatar(
    id: string,
    file: File,
    onProgress?: (pct: number) => void
  ): Promise<string> {
    // Business rule: max 5MB, images only
    if (file.size > 5 * 1024 * 1024) {
      throw new Error("Avatar must be smaller than 5MB");
    }
    if (!file.type.startsWith("image/")) {
      throw new Error("Avatar must be an image file");
    }

    const { avatarUrl } = await this.repo.uploadAvatar(id, file, onProgress);
    return avatarUrl;
  }
}