import { IItem, ItemTypeEnum } from '../../interfaces';

export interface IMaterialService {
  materials$: IItem[];
  addMaterial: (name: string, type: ItemTypeEnum) => void;
  getMaterials: () => void;
  updateMaterial: (updateMaterialData: IItem) => void;
}
