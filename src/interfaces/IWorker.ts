import { IUser } from './IUser';

export interface IWorker extends IUser {
  salary: number;
  employmentDate: string;
  contract: number;
}
