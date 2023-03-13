import { AxiosResponse } from 'axios';
import { EmployeeRoleEnum, IEmployee } from '../../interfaces/IEmployee';

export interface IEmployeeApi {
  endpoint: 'employee';
  addEmployee: (addEmployeeData: EmployeeData) => Promise<AxiosResponse<IEmployee>>;
  changeEmployee: (changeEmployeeData: EmployeeData) => Promise<AxiosResponse<IEmployee>>;
  getEmployees: () => Promise<AxiosResponse<IEmployee[]>>;
}

export type EmployeeData = {
  id: number;
  email: string;
  lastName: string;
  firstName: string;
  middleName: string;
  role: EmployeeRoleEnum;
  isActive: boolean;
};
