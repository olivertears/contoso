import { action, makeObservable, observable } from 'mobx';
import { IEmployee } from '../../interfaces';
import { ChangePasswordData, employeeApi } from '../../api/employee';
import { IEmployeeService } from './employee.types';

class EmployeeService implements IEmployeeService {
  employees$: IEmployee[] = [];

  constructor() {
    makeObservable(this, {
      employees$: observable,
      setEmployees: action
    });
  }

  setEmployees(employees: IEmployee[]) {
    this.employees$ = employees;
  }

  async addEmployee(addEmployeeData: Omit<IEmployee, 'id'>) {
    const { data } = await employeeApi.addEmployee(addEmployeeData);
    this.setEmployees([...this.employees$, data]);
  }

  async getEmployees() {
    const { data } = await employeeApi.getEmployees();
    this.setEmployees(data);
  }

  async updateEmployee(updateEmployeeData: IEmployee) {
    const { data } = await employeeApi.updateEmployee(updateEmployeeData);
    this.setEmployees(
      this.employees$.map((employee) => (employee.id === updateEmployeeData.id ? data : employee))
    );
  }

  async changePassword(changePasswordData: ChangePasswordData) {
    await employeeApi.changePassword(changePasswordData);
  }
}

export const employeeService = new EmployeeService();
