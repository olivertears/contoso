import { AxiosResponse } from 'axios';
import { Catch, createApi } from '../../utils';
import { IItem } from '../../interfaces';
import { IItemApi } from './items.types';

const api = () => createApi(true);

class ItemsApi implements IItemApi {
  endpoint = 'items' as const;

  @Catch
  addItem(addItemData: Omit<IItem, 'id'>): Promise<AxiosResponse<IItem>> {
    return api().post(this.endpoint, addItemData);
  }

  @Catch
  getItems(type: 'PRODUCT' | 'MATERIAL'): Promise<AxiosResponse<IItem[]>> {
    return api().get(this.endpoint, { params: { type } });
  }

  @Catch
  updateItem(updateItemData: IItem): Promise<AxiosResponse<IItem>> {
    return api().put(this.endpoint, updateItemData);
  }
}

export const itemApi = new ItemsApi();
