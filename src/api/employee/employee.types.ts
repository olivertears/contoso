import { AxiosResponse } from 'axios';
import { IEmployee } from '../../interfaces';

export interface IEmployeeApi {
  endpoint: 'employees';
  addEmployee: (addEmployeeData: Omit<IEmployee, 'id'>) => Promise<AxiosResponse<IEmployee>>;
  getEmployees: () => Promise<AxiosResponse<IEmployee[]>>;
  updateEmployee: (updateEmployeeData: IEmployee) => Promise<AxiosResponse<IEmployee>>;
  changePassword: (changePasswordData: ChangePasswordData) => Promise<AxiosResponse>;
}

export type ChangePasswordData = {
  oldPassword: string;
  newPassword: string;
};
