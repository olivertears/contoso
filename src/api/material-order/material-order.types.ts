import { AxiosResponse } from 'axios';
import { IMaterialOrder } from '../../interfaces';

export interface IMaterialOrderApi {
  endpoint: 'materialOrders';
  addMaterialOrder: (
    addMaterialOrderData: Omit<IMaterialOrder, 'id'>
  ) => Promise<AxiosResponse<IMaterialOrder>>;
  getMaterialOrders: () => Promise<AxiosResponse<IMaterialOrder[]>>;
  updateMaterialOrder: (
    updateMaterialOrderData: IMaterialOrder
  ) => Promise<AxiosResponse<IMaterialOrder>>;
}
