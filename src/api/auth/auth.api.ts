import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { IAuthApi, AuthenticateData, AuthResponse } from './auth.types';

const api = createApi();

class AuthApi implements IAuthApi {
  endpoint = 'auth' as const;

  @Catch
  authenticate(authenticateData: AuthenticateData): Promise<AxiosResponse<AuthResponse>> {
    return api.post(this.endpoint, authenticateData);
  }
}

export const authApi = new AuthApi();
