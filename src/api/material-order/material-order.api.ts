import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { IMaterialOrder } from '../../interfaces';
import { IMaterialOrderApi } from './material-order.types';

const api = () => createApi(true);

class MaterialOrderApi implements IMaterialOrderApi {
  endpoint = 'materialOrders' as const;

  @Catch
  addMaterialOrder(
    addMaterialOrderData: Omit<IMaterialOrder, 'id'>
  ): Promise<AxiosResponse<IMaterialOrder>> {
    return api().post(this.endpoint, addMaterialOrderData);
  }

  @Catch
  getMaterialOrders(): Promise<AxiosResponse<IMaterialOrder[]>> {
    return api().get(this.endpoint);
  }

  @Catch
  updateMaterialOrder(
    updateMaterialOrderData: IMaterialOrder
  ): Promise<AxiosResponse<IMaterialOrder>> {
    return api().put(this.endpoint, updateMaterialOrderData);
  }
}

export const materialOrderApi = new MaterialOrderApi();
