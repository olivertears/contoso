import { ItemTypeEnum } from '../interfaces';

export const MATERIAL_TYPE_VALUES: {
  [key in Exclude<ItemTypeEnum, ItemTypeEnum.PRODUCT>]: string;
} = {
  ASSEMBLY_MATERIAL: 'Сборка',
  PAINTING_MATERIAL: 'Покраска'
};
