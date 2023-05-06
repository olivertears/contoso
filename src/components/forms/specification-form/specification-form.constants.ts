import { IOperation, OperationEnum, SpecificationMaterialData } from '../../../interfaces';
import { materialService } from '../../../services/material';

export const NEW_MATERIAL: SpecificationMaterialData = {
  itemId: materialService.materials$?.[0]?.id,
  quantity: 1
};

export const NEW_OPERATION: IOperation = {
  name: OperationEnum.ASSEMBLY,
  time: 5,
  queue: 1
};
