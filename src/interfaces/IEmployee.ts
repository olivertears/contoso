export interface IEmployee {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;
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
