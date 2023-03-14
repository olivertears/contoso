import { EmployeeRoleEnum, IEmployee } from '../../../interfaces';

export const PROFILES_HEADER = ['№', 'Логин', 'Фамилия', 'Имя', 'Отчество', 'Должность', 'Статус'];

export const EMPLOYEES: IEmployee[] = [
  {
    id: 1,
    email: 'admin@gmail.com',
    firstName: 'firstName',
    lastName: 'lastName',
    middleName: 'middleName',
    role: EmployeeRoleEnum.TECHNOLOGIST,
    isActive: true
  },
  {
    id: 2,
    email: 'admin2@gmail.com',
    firstName: 'firstName2',
    lastName: 'lastName2',
    middleName: 'middleName2',
    role: EmployeeRoleEnum.ASSEMBLY_MASTER,
    isActive: true
  },
  {
    id: 3,
    email: 'admin3@gmail.com',
    firstName: 'firstName3',
    lastName: 'lastName3',
    middleName: 'middleName3',
    role: EmployeeRoleEnum.PAINTING_MASTER,
    isActive: false
  },
  {
    id: 4,
    email: 'admin@gmail.com',
    firstName: 'firstName',
    lastName: 'lastName',
    middleName: 'middleName',
    role: EmployeeRoleEnum.TECHNOLOGIST,
    isActive: true
  },
  {
    id: 5,
    email: 'admin2@gmail.com',
    firstName: 'firstName2',
    lastName: 'lastName2',
    middleName: 'middleName2',
    role: EmployeeRoleEnum.ASSEMBLY_MASTER,
    isActive: true
  },
  {
    id: 6,
    email: 'admin3@gmail.com',
    firstName: 'firstName3',
    lastName: 'lastName3',
    middleName: 'middleName3',
    role: EmployeeRoleEnum.PAINTING_MASTER,
    isActive: false
  },
  {
    id: 7,
    email: 'admin@gmail.com',
    firstName: 'firstName',
    lastName: 'lastName',
    middleName: 'middleName',
    role: EmployeeRoleEnum.TECHNOLOGIST,
    isActive: true
  },
  {
    id: 8,
    email: 'admin2@gmail.com',
    firstName: 'firstName2',
    lastName: 'lastName2',
    middleName: 'middleName2',
    role: EmployeeRoleEnum.DISPATCHER,
    isActive: true
  },
  {
    id: 9,
    email: 'admin3@gmail.com',
    firstName: 'firstName3',
    lastName: 'lastName3',
    middleName: 'middleName3',
    role: EmployeeRoleEnum.PAINTING_MASTER,
    isActive: false
  }
];
