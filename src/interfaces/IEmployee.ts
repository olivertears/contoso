export interface IEmployee {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;
  role: EmployeeRoleEnum;
  active: boolean;
}

export enum EmployeeRoleEnum {
  ADMIN = 'ADMIN',
  TECHNOLOGIST = 'TECHNOLOGIST',
  DISPATCHER = 'DISPATCHER',
  ASSEMBLY = 'ASSEMBLY',
  PAINTING = 'PAINTING',
  PACKAGING = 'PACKAGING',
  DELIVERY = 'DELIVERY',
  STOREKEEPER = 'STOREKEEPER',
  DELIVERYMAN = 'DELIVERYMAN'
}
