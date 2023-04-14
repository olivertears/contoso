import { action, makeObservable, observable } from 'mobx';
import { IEmployee } from '../../interfaces';
import { authService } from '../auth';
import { IUserService } from './user.types';
import { employeeApi } from '../../api/employee';

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

  async getUser() {
    const { data } = await employeeApi.getEmployee();
    this.setUser(data);
  }

  logout() {
    authService.setToken('');
    localStorage.removeItem('token');
    this.setUser(null);
  }
}

export const userService = new UserService();
