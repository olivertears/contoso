import { AxiosResponse } from 'axios';
import { privateApi } from '../index';
import { ISpecification } from '../../interfaces';
import { ISpecificationApi, SpecificationData, SpecificationDetails } from './specification.types';

class SpecificationApi implements ISpecificationApi {
  endpoint = 'specifications' as const;

  addSpecification(
    addSpecificationData: Omit<SpecificationData, 'id'>
  ): Promise<AxiosResponse<ISpecification>> {
    return privateApi.post(this.endpoint, addSpecificationData);
  }

  getSpecifications(): Promise<AxiosResponse<ISpecification[]>> {
    return privateApi.get(this.endpoint);
  }

  getSpecificationDetails(id: number): Promise<AxiosResponse<SpecificationDetails>> {
    return privateApi.get(this.endpoint + '/' + id);
  }

  updateSpecification(
    updateSpecificationData: SpecificationData
  ): Promise<AxiosResponse<ISpecification>> {
    return privateApi.put(this.endpoint, updateSpecificationData);
  }
}

export const specificationApi = new SpecificationApi();
