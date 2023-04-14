import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { IProductOrder } from '../../interfaces';
import { IProductOrderApi } from './product-order.types';

const api = () => createApi(true);

class ProductOrderApi implements IProductOrderApi {
  endpoint = 'productOrders' as const;

  @Catch
  addProductOrder(
    addProductOrderData: Omit<IProductOrder, 'id'>
  ): Promise<AxiosResponse<IProductOrder>> {
    return api().post(this.endpoint, addProductOrderData);
  }

  @Catch
  getProductOrders(): Promise<AxiosResponse<IProductOrder[]>> {
    return api().get(this.endpoint);
  }

  @Catch
  updateProductOrder(updateProductOrderData: IProductOrder): Promise<AxiosResponse<IProductOrder>> {
    return api().put(this.endpoint, updateProductOrderData);
  }
}

export const productOrderApi = new ProductOrderApi();
