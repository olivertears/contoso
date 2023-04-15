import { IEmployee } from '../../../interfaces';

export interface EmployeeFormProps {
  employee?: IEmployee;
  hideModal: () => void;
}
