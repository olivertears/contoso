export interface IItem {
  id: number;
  name: string;
  type: ItemTypeEnum;
}

export enum ItemTypeEnum {
  PRODUCT = 'PRODUCT',
  ASSEMBLY_MATERIAL = 'ASSEMBLY_MATERIAL',
  PAINTING_MATERIAL = 'PAINTING_MATERIAL'
}
