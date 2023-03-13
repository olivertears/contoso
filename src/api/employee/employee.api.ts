import { AxiosResponse } from 'axios';
import { IEmployeeApi, EmployeeData } from './employee.types';
import { api } from '../api';
import { IEmployee } from '../../interfaces/IEmployee';

class EmployeeApi implements IEmployeeApi {
  endpoint = 'employee' as const;

  addEmployee(addEmployeeData: EmployeeData): Promise<AxiosResponse<IEmployee>> {
    return api.post(this.endpoint, addEmployeeData);
  }

  changeEmployee(changeEmployeeData: EmployeeData): Promise<AxiosResponse<IEmployee>> {
    return api.post(this.endpoint, changeEmployeeData);
  }

  getEmployees(): Promise<AxiosResponse<IEmployee[]>> {
    return api.get(this.endpoint);
  }
}

export const employeeApi = new EmployeeApi();
