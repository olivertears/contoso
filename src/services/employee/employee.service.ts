import { IEmployeeService } from './employee.types';
import { action, makeObservable, observable } from 'mobx';
import { IEmployee } from '../../interfaces';

class EmployeeService implements IEmployeeService {
  employee$: IEmployee | null = null;

  constructor() {
    makeObservable(this, {
      employee$: observable,
      setEmployee: action
    });
  }

  setEmployee(employee: IEmployee | null) {
    this.employee$ = employee;
  }
}

export const employeeService = new EmployeeService();
