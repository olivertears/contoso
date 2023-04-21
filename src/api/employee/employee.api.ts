import { AxiosResponse } from 'axios';
import { privateApi } from '../index';
import { IEmployee } from '../../interfaces';
import { ChangePasswordData, IEmployeeApi } from './employee.types';

class EmployeeApi implements IEmployeeApi {
  endpoint = 'employees' as const;

  addEmployee(addEmployeeData: Omit<IEmployee, 'id'>): Promise<AxiosResponse<IEmployee>> {
    return privateApi.post(this.endpoint, addEmployeeData);
  }

  getEmployee(): Promise<AxiosResponse<IEmployee>> {
    return privateApi.get(this.endpoint);
  }

  getEmployees(): Promise<AxiosResponse<IEmployee[]>> {
    return privateApi.get(this.endpoint);
  }

  updateEmployee(updateEmployeeData: IEmployee): Promise<AxiosResponse<IEmployee>> {
    return privateApi.put(this.endpoint, updateEmployeeData);
  }

  changePassword(changePasswordData: ChangePasswordData): Promise<AxiosResponse> {
    return privateApi.put(this.endpoint + '/changePassword', changePasswordData);
  }
}

export const employeeApi = new EmployeeApi();
