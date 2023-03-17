import { EmployeeRoleEnum } from '../interfaces';

export const ROLE_VALUES: { [key in Exclude<EmployeeRoleEnum, EmployeeRoleEnum.ADMIN>]: string } = {
  TECHNOLOGIST: 'Технолог',
  DISPATCHER: 'Диспетчер',
  ASSEMBLY_MASTER: 'Мастер сборочного цеха',
  PAINTING_MASTER: 'Мастер покрасочного цеха'
};
