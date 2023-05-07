import { AxiosResponse } from 'axios';
import { IMaterialOrder, OrderStatus } from '../../interfaces';

export interface IMaterialOrderApi {
  endpoint: 'materialOrders';
  addMaterialOrder: (
    addMaterialOrderData: Omit<IMaterialOrder, 'id'>
  ) => Promise<AxiosResponse<IMaterialOrder>>;
  getMaterialOrders: () => Promise<AxiosResponse<IMaterialOrder[]>>;
  updateMaterialOrder: (
    updateMaterialOrderData: UpdateMaterialOrderData
  ) => Promise<AxiosResponse<IMaterialOrder>>;
}

export type UpdateMaterialOrderData = {
  id: number;
  status: OrderStatus;
};
