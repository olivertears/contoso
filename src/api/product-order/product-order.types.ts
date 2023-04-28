import { AxiosResponse } from 'axios';
import { IProductOrder, ProductOrderStatusEnum } from '../../interfaces';

export interface IProductOrderApi {
  endpoint: 'productOrders';
  addProductOrder: (
    addProductOrderData: Omit<IProductOrder, 'id'>
  ) => Promise<AxiosResponse<IProductOrder>>;
  getProductOrders: () => Promise<AxiosResponse<IProductOrder[]>>;
  updateProductOrder: (
    updateProductOrderData: UpdateProductData
  ) => Promise<AxiosResponse<IProductOrder>>;
}

export type UpdateProductData = {
  id: number;
  status: ProductOrderStatusEnum;
};
