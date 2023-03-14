import { AxiosResponse } from 'axios';

export interface IAuthApi {
  endpoint: 'auth';
  authenticate: (authenticateData: AuthenticateData) => Promise<AxiosResponse<string>>;
}

export type AuthenticateData = {
  email: string;
  password: string;
};
