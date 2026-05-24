import { type IHttpClient } from "../http/http-client";
import { tokenStore, decodeToken, isTokenExpired } from "./token-store";
import { AuthError } from "../errors/api-errors";
import { logger } from "../monitoring/logger";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthTokens {
  accessToken: string;
  expiresIn: number; // seconds
}

export interface AuthUser {
  id: string;
  email: string;
  role: string;
  permissions: string[];
}

export interface IAuthService {
  login(credentials: LoginCredentials): Promise<AuthUser>;
  logout(): Promise<void>;
  refreshToken(): Promise<string | null>;
  getCurrentUser(): AuthUser | null;
  hasPermission(permission: string): boolean;
  hasRole(role: string): boolean;
}

export class AuthService implements IAuthService {
  // Deduplicate concurrent refresh calls — one refresh at a time
  private refreshPromise: Promise<string | null> | null = null;

  constructor(private readonly http: IHttpClient) {}

  async login(credentials: LoginCredentials): Promise<AuthUser> {
    const { data } = await this.http.post<AuthTokens>("/auth/login", credentials, {
      _skipAuth: true,
    } as never);

    tokenStore.setAccessToken(data.accessToken);
    this.scheduleTokenRefresh(data.expiresIn);

    const user = this.getCurrentUser();
    if (!user) throw new AuthError("Invalid token received");
    return user;
  }

  async logout(): Promise<void> {
    try {
      // Invalidate refresh token on server (clears httpOnly cookie)
      await this.http.post("/auth/logout");
    } catch (e) {
      logger.warn("Logout request failed", e);
    } finally {
      tokenStore.clearAccessToken();
    }
  }

  // Silent refresh — deduplicates concurrent calls with a shared promise
  async refreshToken(): Promise<string | null> {
    if (this.refreshPromise) return this.refreshPromise;

    this.refreshPromise = this.http
      .post<AuthTokens>("/auth/refresh", undefined, { _skipAuth: true } as never)
      .then(({ data }) => {
        tokenStore.setAccessToken(data.accessToken);
        this.scheduleTokenRefresh(data.expiresIn);
        return data.accessToken;
      })
      .catch((err) => {
        logger.error("Silent refresh failed", err);
        tokenStore.clearAccessToken();
        return null;
      })
      .finally(() => {
        this.refreshPromise = null;
      });

    return this.refreshPromise;
  }

  getCurrentUser(): AuthUser | null {
    const token = tokenStore.getAccessToken();
    if (!token) return null;
    if (isTokenExpired(token)) return null;

    const payload = decodeToken(token);
    if (!payload) return null;

    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
      permissions: payload.permissions,
    };
  }

  hasPermission(permission: string): boolean {
    return this.getCurrentUser()?.permissions.includes(permission) ?? false;
  }

  hasRole(role: string): boolean {
    return this.getCurrentUser()?.role === role;
  }

  // Auto-refresh 60 seconds before expiry

  private scheduleTokenRefresh(expiresIn: number): void {
    const delay = (expiresIn - 60) * 1000;
    if (delay <= 0) return;
    setTimeout(() => this.refreshToken(), delay);
  }
}
