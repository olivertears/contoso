import { action, makeObservable, observable } from 'mobx';
import { ITokenService } from './token.types';

class TokenService implements ITokenService {
  token$ = JSON.parse(localStorage.getItem('token') || '');

  constructor() {
    makeObservable(this, {
      token$: observable,
      setToken: action
    });
  }

  setToken(token: string) {
    this.token$ = token;
  }
}

export const tokenService = new TokenService();
