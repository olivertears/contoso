import { AxiosResponse } from 'axios';
import { IItem } from '../../interfaces';

export interface IItemApi {
  endpoint: 'items';
  addItem: (addItemData: Omit<IItem, 'id'>) => Promise<AxiosResponse<IItem>>;
  getItems: (type: 'PRODUCT' | 'MATERIAL') => Promise<AxiosResponse<IItem[]>>;
  updateItem: (updateItemData: IItem) => Promise<AxiosResponse<IItem>>;
}
