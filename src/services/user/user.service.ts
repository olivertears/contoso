import { IUserService } from './user.types';
import { action, makeObservable, observable } from 'mobx';
import { IUser } from '../../interfaces/IUser';

class UserService implements IUserService {
  user$: IUser | null = {} as IUser;

  constructor() {
    makeObservable(this, {
      user$: observable,
      setUser: action
    });
  }

  setUser(user: IUser) {
    this.user$ = user;
  }
}

export const userService = new UserService();
