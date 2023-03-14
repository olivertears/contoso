import { EMPLOYEE_STATUS_VALUES, ROLE_VALUES } from '../../../constants';
import { ICell } from '../../templates/table';
import { EmployeeRoleEnum, IEmployee } from '../../../interfaces/IEmployee';

export const employeeTableAdapter = (employees: IEmployee[]): ICell[] =>
  employees.map((employee) => ({
    id: employee.id,
    data: [
      employee.id.toString(),
      employee.email,
      employee.lastName,
      employee.firstName,
      employee.middleName,
      employee.role === EmployeeRoleEnum.ADMIN ? '' : ROLE_VALUES[employee.role],
      EMPLOYEE_STATUS_VALUES[employee.isActive.toString()]
    ]
  }));
