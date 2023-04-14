import { IEmployee } from '../../interfaces';

export interface IUserService {
  user$: IEmployee | null;
  getUser: () => void;
  logout: () => void;
}
