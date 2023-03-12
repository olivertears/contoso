import { AxiosResponse } from 'axios';

export interface IAuthApi {
  endpoint: 'auth';
  authenticate: (authenticateData: AuthenticateData) => Promise<AxiosResponse<string>>;
  register: (registerData: RegisterData) => Promise<AxiosResponse<string>>;
}

export type AuthenticateData = {
  email: string;
  password: string;
};

export type RegisterData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};
