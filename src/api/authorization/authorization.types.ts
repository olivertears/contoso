import { AxiosResponse } from 'axios';

export interface IAuthorizationApi {
  endpoint: 'auth';
  authorize: (authorizationData: AuthorizationData) => Promise<AxiosResponse<string>>;
}

export type AuthorizationData = {
  email: string;
  password: string;
};
