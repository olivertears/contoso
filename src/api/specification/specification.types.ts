import { AxiosResponse } from 'axios';
import { IItem, IOperation, ISpecification, OperationNameEnum } from '../../interfaces';

export interface ISpecificationApi {
  endpoint: 'specifications';
  addSpecification: (
    addSpecificationData: Omit<SpecificationData, 'id'>
  ) => Promise<AxiosResponse<ISpecification>>;
  getSpecifications: () => Promise<AxiosResponse<ISpecification[]>>;
  getSpecificationDetails: (id: number) => Promise<AxiosResponse<SpecificationDetails>>;
  updateSpecification: (
    updateSpecificationData: SpecificationData
  ) => Promise<AxiosResponse<ISpecification>>;
}

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

export type SpecificationDetails = {
  materials: IItem[];
  operations: IOperation[];
};
