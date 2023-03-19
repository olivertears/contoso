import { EMPLOYEE_STATUS_VALUES, EMPLOYEE_ROLE_VALUES } from '../../../constants';
import { EmployeeRoleEnum, IEmployee } from '../../../interfaces';
import { ICell } from '../../templates';

export const employeeTableAdapter = (employees: IEmployee[]): ICell[] =>
  employees.map((employee) => ({
    id: employee.id,
    data: [
      employee.id.toString(),
      employee.email,
      employee.lastName,
      employee.firstName,
      employee.middleName,
      employee.role === EmployeeRoleEnum.ADMIN ? '' : EMPLOYEE_ROLE_VALUES[employee.role],
      EMPLOYEE_STATUS_VALUES[employee.isActive.toString()]
    ]
  }));
