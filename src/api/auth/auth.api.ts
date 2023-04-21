import { AxiosResponse } from 'axios';
import { publicApi } from '../index';
import { IAuthApi, AuthenticateData, AuthResponse } from './auth.types';

class AuthApi implements IAuthApi {
  endpoint = 'auth' as const;

  authenticate(authenticateData: AuthenticateData): Promise<AxiosResponse<AuthResponse>> {
    return publicApi.post(this.endpoint, authenticateData);
  }
}

export const authApi = new AuthApi();
