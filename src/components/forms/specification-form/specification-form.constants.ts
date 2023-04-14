import { OperationNameEnum } from '../../../interfaces';
import { SpecificationMaterialData, SpecificationOperationData } from '../../../api/specification';

export const NEW_MATERIAL: SpecificationMaterialData = {
  itemId: 0,
  quantity: 1
};

export const NEW_OPERATION: SpecificationOperationData = {
  name: OperationNameEnum.ASSEMBLY,
  time: 5
};
