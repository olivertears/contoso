import { IOperation } from './IOperation';

export interface ISpecification {
  id: number;
  name: string;
  itemId: number;
  startDate: string;
  endDate: string;
  active: boolean;
  materials: SpecificationMaterialData[];
  operations: IOperation[];
}

export type SpecificationMaterialData = {
  itemId: number;
  quantity: number;
};
