export interface IItem {
  id: number;
  name: string;
  type: ItemTypeEnum;
}

export enum ItemTypeEnum {
  PRODUCT = 'PRODUCT',
  ASSEMBLY = 'ASSEMBLY',
  PAINTING = 'PAINTING'
}
