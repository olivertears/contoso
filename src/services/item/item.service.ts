import { action, makeObservable, observable } from 'mobx';
import { itemApi } from '../../api/item';
import { IItem } from '../../interfaces';
import { IItemService } from './item.types';

class ItemService implements IItemService {
  items$: IItem[] = [];

  constructor() {
    makeObservable(this, {
      items$: observable,
      setItems: action
    });
  }

  setItems(items: IItem[]) {
    this.items$ = items;
  }

  async addItem(addItemData: Omit<IItem, 'id'>) {
    const { data } = await itemApi.addItem(addItemData);
    this.setItems([...this.items$, data]);
  }

  async getItems(type: 'PRODUCT' | 'MATERIAL') {
    const { data } = await itemApi.getItems(type);
    this.setItems(data);
  }

  async updateItem(updateItemData: IItem) {
    const { data } = await itemApi.updateItem(updateItemData);
    this.setItems(this.items$.map((item) => (item.id === updateItemData.id ? data : item)));
  }
}

export const itemService = new ItemService();
