import { AxiosResponse } from 'axios';
import { IEmployee } from '../../interfaces';

export interface IAuthApi {
  endpoint: 'auth';
  authenticate: (authenticateData: AuthenticateData) => Promise<AxiosResponse<AuthResponse>>;
}

export type AuthResponse = {
  token: string;
  employee: IEmployee;
};

export type AuthenticateData = {
  email: string;
  password: string;
};
