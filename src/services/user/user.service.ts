import { action, makeObservable, observable } from 'mobx';
import { IEmployee } from '../../interfaces';
import { authService } from '../auth';
import { IUserService } from './user.types';

class UserService implements IUserService {
  user$: IEmployee | null = null;

  constructor() {
    makeObservable(this, {
      user$: observable,
      setUser: action
    });
  }

  setUser(user: IEmployee | null) {
    this.user$ = user;
  }

  logout() {
    authService.setToken('');
    localStorage.removeItem('token');
    this.setUser(null);
  }
}

export const userService = new UserService();
