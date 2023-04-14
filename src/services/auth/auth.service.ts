import { action, makeObservable, observable } from 'mobx';
import { getFromLocalStorage } from '../../utils';
import { authApi, AuthenticateData } from '../../api/auth';
import { IAuthService } from './auth.types';
import { userService } from '../user';

class AuthService implements IAuthService {
  token$ = getFromLocalStorage('token') || '';

  constructor() {
    makeObservable(this, {
      token$: observable,
      setToken: action
    });
  }

  setToken(token: string) {
    this.token$ = token;
    localStorage.setItem('token', JSON.stringify(token));
  }

  async authenticate(authenticateData: AuthenticateData) {
    const { data } = await authApi.authenticate(authenticateData);
    this.setToken(data.token);
    userService.setUser(data.employee);
  }
}

export const authService = new AuthService();
