import { AxiosResponse } from 'axios';
import { ISpecification } from '../../interfaces';

export interface ISpecificationApi {
  endpoint: 'specifications';
  addSpecification: (
    addSpecificationData: Omit<ISpecification, 'id'>
  ) => Promise<AxiosResponse<ISpecification>>;
  getSpecifications: () => Promise<AxiosResponse<ISpecification[]>>;
  updateSpecification: (
    updateSpecificationData: UpdateSpecificationData
  ) => Promise<AxiosResponse<ISpecification>>;
}

export type UpdateSpecificationData = {
  id: number;
  productId: number;
  active: boolean;
};
