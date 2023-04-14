import { IItem } from '../../interfaces';

export interface IItemService {
  items$: IItem[];
  addItem: (addItemData: Omit<IItem, 'id'>) => void;
  getItems: (type: 'PRODUCT' | 'MATERIAL') => void;
  updateItem: (updateItemData: IItem) => void;
}
