import { IEmployee } from '../../interfaces';

export interface IUserService {
  user$: IEmployee | null;
  logout: () => void;
}
