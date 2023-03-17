import { IItem, ItemTypeEnum } from '../../../interfaces';

export const PRODUCTS_HEADER = ['№', 'Название'];

export const PRODUCTS: IItem[] = [
  {
    id: 1,
    name: 'Карандаш',
    type: ItemTypeEnum.PRODUCT
  },
  {
    id: 2,
    name: 'Ручка',
    type: ItemTypeEnum.PRODUCT
  }
];
