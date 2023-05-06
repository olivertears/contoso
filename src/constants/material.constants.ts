import { ItemTypeEnum } from '../interfaces';

export const MATERIAL_TYPE_VALUES: {
  [key in Exclude<ItemTypeEnum, 'PRODUCT'>]: string;
} = {
  ASSEMBLY: 'Сборка',
  PAINTING: 'Покраска',
  PACKAGING: 'Упаковка'
};
