import { EmployeeRoleEnum } from '../../../interfaces/IEmployee';

export const ROLE_VALUES: { [key in EmployeeRoleEnum]?: string } = {
  TECHNOLOGIST: 'Технолог',
  DISPATCHER: 'Диспетчер',
  ASSEMBLY_MASTER: 'Мастер сборочного цеха',
  PAINTING_MASTER: 'Мастер покрасочного цеха'
};
