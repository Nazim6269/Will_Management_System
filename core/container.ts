

import { AxiosHttpClient } from "@/core/http/axios-client";
import { tokenStore } from "@/core/auth/token-store";
import { AuthService } from "@/core/auth/auth-service";
import { UserService } from "../features/user/user.service";
import { UserRepository } from "../features/user/user.repository";


let _authService: AuthService;

const httpClient = new AxiosHttpClient(
  tokenStore,
  () => _authService.refreshToken()
);

_authService = new AuthService(httpClient);
export const authService = _authService;

const userRepository = new UserRepository(httpClient);
export const userService = new UserService(userRepository);

export { httpClient };

export interface AppContainer {
  authService: AuthService;
  userService: UserService;
}

export const container: AppContainer = {
  authService,
  userService,
};