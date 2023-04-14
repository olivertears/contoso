import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { IEmployee } from '../../interfaces';
import { ChangePasswordData, IEmployeeApi } from './employee.types';

const api = () => createApi(true);

class EmployeeApi implements IEmployeeApi {
  endpoint = 'employees' as const;

  @Catch
  addEmployee(addEmployeeData: Omit<IEmployee, 'id'>): Promise<AxiosResponse<IEmployee>> {
    return api().post(this.endpoint, addEmployeeData);
  }

  @Catch
  getEmployees(): Promise<AxiosResponse<IEmployee[]>> {
    return api().get(this.endpoint);
  }

  @Catch
  updateEmployee(updateEmployeeData: IEmployee): Promise<AxiosResponse<IEmployee>> {
    return api().put(this.endpoint, updateEmployeeData);
  }

  @Catch
  changePassword(changePasswordData: ChangePasswordData): Promise<AxiosResponse> {
    return api().put(this.endpoint + '/changePassword', changePasswordData);
  }
}

export const employeeApi = new EmployeeApi();
