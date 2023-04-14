import { AxiosResponse } from 'axios';
import { IProductOrder } from '../../interfaces';

export interface IProductOrderApi {
  endpoint: 'productOrders';
  addProductOrder: (
    addProductOrderData: Omit<IProductOrder, 'id'>
  ) => Promise<AxiosResponse<IProductOrder>>;
  getProductOrders: () => Promise<AxiosResponse<IProductOrder[]>>;
  updateProductOrder: (
    updateProductOrderData: IProductOrder
  ) => Promise<AxiosResponse<IProductOrder>>;
}
