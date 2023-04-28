import { UseFieldArrayRemove } from 'react-hook-form';

export interface OperationFieldProps {
  index: number;
  remove: UseFieldArrayRemove;
  isUpdate: boolean;
}
