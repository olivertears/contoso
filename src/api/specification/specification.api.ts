import { AxiosResponse } from 'axios';
import { privateApi } from '../index';
import { ISpecification } from '../../interfaces';
import { ISpecificationApi, UpdateSpecificationData } from './specification.types';

class SpecificationApi implements ISpecificationApi {
  endpoint = 'specifications' as const;

  addSpecification(
    addSpecificationData: Omit<ISpecification, 'id'>
  ): Promise<AxiosResponse<ISpecification>> {
    return privateApi.post(this.endpoint, addSpecificationData);
  }

  getSpecifications(): Promise<AxiosResponse<ISpecification[]>> {
    return privateApi.get(this.endpoint);
  }

  updateSpecification(
    updateSpecificationData: UpdateSpecificationData
  ): Promise<AxiosResponse<ISpecification>> {
    return privateApi.put(this.endpoint, updateSpecificationData);
  }
}

export const specificationApi = new SpecificationApi();
