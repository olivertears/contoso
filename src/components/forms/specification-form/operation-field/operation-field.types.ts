import { UseFieldArrayRemove } from 'react-hook-form';
import { OperationEnum } from '../../../../interfaces';

export interface OperationFieldProps {
  index: number;
  remove: UseFieldArrayRemove;
  availableOperations: OperationEnum[];
}
