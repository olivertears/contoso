import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { ISpecification } from '../../interfaces';
import { ISpecificationApi, SpecificationData, SpecificationDetails } from './specification.types';

const api = () => createApi(true);

class SpecificationApi implements ISpecificationApi {
  endpoint = 'specifications' as const;

  @Catch
  addSpecification(
    addSpecificationData: Omit<SpecificationData, 'id'>
  ): Promise<AxiosResponse<ISpecification>> {
    return api().post(this.endpoint, addSpecificationData);
  }

  @Catch
  getSpecifications(): Promise<AxiosResponse<ISpecification[]>> {
    return api().get(this.endpoint);
  }

  @Catch
  getSpecificationDetails(id: number): Promise<AxiosResponse<SpecificationDetails>> {
    return api().get(this.endpoint + '/' + id);
  }

  @Catch
  updateSpecification(
    updateSpecificationData: SpecificationData
  ): Promise<AxiosResponse<ISpecification>> {
    return api().put(this.endpoint, updateSpecificationData);
  }
}

export const specificationApi = new SpecificationApi();
