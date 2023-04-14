import { IEmployee } from '../../interfaces';
import { ChangePasswordData } from '../../api/employee';

export interface IEmployeeService {
  employees$: IEmployee[];
  addEmployee: (addUserData: Omit<IEmployee, 'id'>) => void;
  getEmployees: () => void;
  updateEmployee: (updateEmployeeData: IEmployee) => void;
  changePassword: (changePasswordData: ChangePasswordData) => void;
}
