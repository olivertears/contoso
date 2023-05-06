import { OperationEnum } from '../interfaces';

export const OPERATION_NAME_VALUES: { [key in OperationEnum]: string } = {
  ASSEMBLY: 'Сборка',
  PAINTING: 'Покраска',
  PACKAGING: 'Упаковка'
};
