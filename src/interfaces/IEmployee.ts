export interface IEmployee {
  id: string;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: EmployeeRoleEnum;
  status: EmployeeStatusEnum;
}

export enum EmployeeRoleEnum {
  TECHNOLOGIST = 'TECHNOLOGIST',
  DISPATCHER = 'DISPATCHER',
  ASSEMBLY_MASTER = 'ASSEMBLY_MASTER',
  PAINTING_MASTER = 'PAINTING_MASTER'
}

export enum EmployeeStatusEnum {
  TECHNOLOGIST = 'TECHNOLOGIST',
  DISPATCHER = 'DISPATCHER',
  ASSEMBLY_MASTER = 'ASSEMBLY_MASTER',
  PAINTING_MASTER = 'PAINTING_MASTER'
}
