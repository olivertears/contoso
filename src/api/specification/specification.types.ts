import { OperationNameEnum } from '../../interfaces';

export type SpecificationData = {
  id: number;
  name: string;
  itemId: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
  materials: SpecificationMaterialData[];
  operations: SpecificationOperationData[];
};

export type SpecificationMaterialData = {
  itemId: number;
  quantity: number;
};

export type SpecificationOperationData = {
  time: number;
  name: OperationNameEnum;
};
