import { type IHttpClient } from "@/core/http/http-client";
import { type UserDTO, type UserListDTO, type UserListParams } from "./user.type";

export interface IUserRepository {
  findAll(params?: UserListParams): Promise<UserListDTO>;
  findById(id: string): Promise<UserDTO>;
  create(payload: Record<string, unknown>): Promise<UserDTO>;
  update(id: string, payload: Record<string, unknown>): Promise<UserDTO>;
  remove(id: string): Promise<void>;
  uploadAvatar(id: string, file: File, onProgress?: (pct: number) => void): Promise<{ avatarUrl: string }>;
}

export class UserRepository implements IUserRepository {
  private readonly BASE = "/users";

  constructor(private readonly http: IHttpClient) {}

  async findAll(params?: UserListParams): Promise<UserListDTO> {
    const { data } = await this.http.get<UserListDTO>(this.BASE, {
      params: params as Record<string, unknown>,
    });
    return data;
  }

  async findById(id: string): Promise<UserDTO> {
    const { data } = await this.http.get<UserDTO>(`${this.BASE}/${id}`);
    return data;
  }

  async create(payload: Record<string, unknown>): Promise<UserDTO> {
    const { data } = await this.http.post<UserDTO>(this.BASE, payload);
    return data;
  }

  async update(id: string, payload: Record<string, unknown>): Promise<UserDTO> {
    const { data } = await this.http.patch<UserDTO>(`${this.BASE}/${id}`, payload);
    return data;
  }

  async remove(id: string): Promise<void> {
    await this.http.delete(`${this.BASE}/${id}`);
  }

  async uploadAvatar(
    id: string,
    file: File,
    onProgress?: (pct: number) => void
  ): Promise<{ avatarUrl: string }> {
    const form = new FormData();
    form.append("avatar", file);
    const { data } = await this.http.post<{ avatar_url: string }>(
      `${this.BASE}/${id}/avatar`,
      form,
      { headers: { "Content-Type": "multipart/form-data" }, onUploadProgress: onProgress }
    );
    return { avatarUrl: data.avatar_url };
  }
}