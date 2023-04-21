import { AxiosResponse } from 'axios';
import { privateApi } from '../index';
import { IItem } from '../../interfaces';
import { IItemApi } from './item.types';

class ItemApi implements IItemApi {
  endpoint = 'items' as const;

  addItem(addItemData: Omit<IItem, 'id'>): Promise<AxiosResponse<IItem>> {
    return privateApi.post(this.endpoint, addItemData);
  }

  getItems(type: 'PRODUCT' | 'MATERIAL'): Promise<AxiosResponse<IItem[]>> {
    return privateApi.get(this.endpoint, { params: { type } });
  }

  updateItem(updateItemData: IItem): Promise<AxiosResponse<IItem>> {
    return privateApi.put(this.endpoint, updateItemData);
  }
}

export const itemApi = new ItemApi();
