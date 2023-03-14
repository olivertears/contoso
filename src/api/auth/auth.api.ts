import { AxiosResponse } from 'axios';
import { api } from '../api';
import { IAuthApi, AuthenticateData } from './auth.types';

class AuthApi implements IAuthApi {
  endpoint = 'auth' as const;

  authenticate(authenticateData: AuthenticateData): Promise<AxiosResponse<string>> {
    return api.post(this.endpoint, authenticateData);
  }
}

export const authApi = new AuthApi();
