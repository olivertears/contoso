import { EmployeeRoleEnum } from '../interfaces';

export const EMPLOYEE_ROLE_VALUES: {
  [key in Exclude<EmployeeRoleEnum, EmployeeRoleEnum.ADMIN>]: string;
} = {
  TECHNOLOGIST: 'Технолог',
  DISPATCHER: 'Диспетчер',
  ASSEMBLY_MASTER: 'Мастер сборочного цеха',
  PAINTING_MASTER: 'Мастер покрасочного цеха'
};

export const EMPLOYEE_STATUS_VALUES: { [key: string]: string } = {
  true: 'Активен',
  false: 'Неактивен'
};
