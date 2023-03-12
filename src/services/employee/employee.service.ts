import { IEmployeeService } from './employee.types';
import { action, makeObservable, observable } from 'mobx';
import { IEmployee } from '../../interfaces/IEmployee';

class EmployeeService implements IEmployeeService {
  employee$: IEmployee | null = null;
  // employee$ = { role: 'TECHNOLOGIST' } as IEmployee;
  // employee$ = { role: 'MASTER' } as IEmployee;
  // employee$ = { role: 'DISPATCHER' } as IEmployee;

  constructor() {
    makeObservable(this, {
      employee$: observable,
      setEmployee: action
    });
  }

  setEmployee(employee: IEmployee) {
    this.employee$ = employee;
  }
}

export const employeeService = new EmployeeService();
