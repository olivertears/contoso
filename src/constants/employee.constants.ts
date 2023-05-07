import { EmployeeRoleEnum } from '../interfaces';

export const EMPLOYEE_ROLE_VALUES: {
  [key in Exclude<EmployeeRoleEnum, EmployeeRoleEnum.ADMIN>]: string;
} = {
  TECHNOLOGIST: 'Технолог',
  DISPATCHER: 'Диспетчер',
  ASSEMBLY: 'Мастер сборочного цеха',
  PAINTING: 'Мастер покрасочного цеха',
  PACKAGING: 'Упаковщик',
  DELIVERY: 'Курьер',
  STOREKEEPER: 'Кладовщик',
  DELIVERYMAN: 'Доставщик'
};

export const EMPLOYEE_STATUS_VALUES: { [key: string]: string } = {
  true: 'Активен',
  false: 'Неактивен'
};
