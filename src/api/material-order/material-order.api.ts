import { AxiosResponse } from 'axios';
import { privateApi } from '../index';
import { IMaterialOrder } from '../../interfaces';
import { IMaterialOrderApi } from './material-order.types';

class MaterialOrderApi implements IMaterialOrderApi {
  endpoint = 'materialOrders' as const;

  addMaterialOrder(
    addMaterialOrderData: Omit<IMaterialOrder, 'id'>
  ): Promise<AxiosResponse<IMaterialOrder>> {
    return privateApi.post(this.endpoint, addMaterialOrderData);
  }

  getMaterialOrders(): Promise<AxiosResponse<IMaterialOrder[]>> {
    return privateApi.get(this.endpoint);
  }

  updateMaterialOrder(
    updateMaterialOrderData: IMaterialOrder
  ): Promise<AxiosResponse<IMaterialOrder>> {
    return privateApi.put(this.endpoint, updateMaterialOrderData);
  }
}

export const materialOrderApi = new MaterialOrderApi();
