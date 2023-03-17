import { IItem, ItemTypeEnum } from '../../../interfaces';

export const MATERIALS_HEADER = ['№', 'Название', 'Предназначение'];

export const MATERIALS: IItem[] = [
  {
    id: 1,
    name: 'Колпачок',
    type: ItemTypeEnum.ASSEMBLY_MATERIAL
  },
  {
    id: 2,
    name: 'Краска синяя',
    type: ItemTypeEnum.PAINTING_MATERIAL
  }
];
