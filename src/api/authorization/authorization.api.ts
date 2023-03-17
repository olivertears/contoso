import { AxiosResponse } from 'axios';
import { api } from '../api';
import { AuthorizationData, IAuthorizationApi } from './authorization.types';

class AuthorizationApi implements IAuthorizationApi {
  endpoint = 'auth' as const;

  authorize(authorizationData: AuthorizationData): Promise<AxiosResponse<string>> {
    return api.post(this.endpoint, authorizationData);
  }
}

export const authApi = new AuthorizationApi();
