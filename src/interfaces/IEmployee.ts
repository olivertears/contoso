export interface IEmployee {
  id: string;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  role: EmployeeRoleEnum;
  isActive: boolean;
}

export enum EmployeeRoleEnum {
  ADMIN = 'ADMIN',
  TECHNOLOGIST = 'TECHNOLOGIST',
  DISPATCHER = 'DISPATCHER',
  ASSEMBLY_MASTER = 'ASSEMBLY_MASTER',
  PAINTING_MASTER = 'PAINTING_MASTER'
}
