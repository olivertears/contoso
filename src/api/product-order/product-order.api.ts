import { AxiosResponse } from 'axios';
import { privateApi } from '../index';
import { IProductOrder } from '../../interfaces';
import { IProductOrderApi, UpdateProductData } from './product-order.types';

class ProductOrderApi implements IProductOrderApi {
  endpoint = 'productOrders' as const;

  addProductOrder(
    addProductOrderData: Omit<IProductOrder, 'id'>
  ): Promise<AxiosResponse<IProductOrder>> {
    return privateApi.post(this.endpoint, addProductOrderData);
  }

  getProductOrders(): Promise<AxiosResponse<IProductOrder[]>> {
    return privateApi.get(this.endpoint);
  }

  updateProductOrder(
    updateProductOrderData: UpdateProductData
  ): Promise<AxiosResponse<IProductOrder>> {
    return privateApi.put(this.endpoint, updateProductOrderData);
  }
}

export const productOrderApi = new ProductOrderApi();
