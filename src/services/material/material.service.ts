import { action, makeObservable, observable } from 'mobx';
import { itemApi } from '../../api/item';
import { IItem, ItemTypeEnum } from '../../interfaces';
import { IMaterialService } from './material.types';

class MaterialService implements IMaterialService {
  materials$: IItem[] = [];

  constructor() {
    makeObservable(this, {
      materials$: observable,
      setMaterials: action
    });
  }

  setMaterials(products: IItem[]) {
    this.materials$ = products;
  }

  async addMaterial(name: string, type: ItemTypeEnum) {
    const { data } = await itemApi.addItem({ name, type });
    this.setMaterials([...this.materials$, data]);
  }

  async getMaterials() {
    const { data } = await itemApi.getItems('MATERIAL');
    this.setMaterials(data);
  }

  async updateMaterial(updateMaterialData: IItem) {
    const { data } = await itemApi.updateItem(updateMaterialData);
    this.setMaterials(
      this.materials$.map((item) => (item.id === updateMaterialData.id ? data : item))
    );
  }
}

export const materialService = new MaterialService();
