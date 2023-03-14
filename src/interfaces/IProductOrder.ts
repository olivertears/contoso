export interface IProductOrder {
  id: number;
  itemId: number;
  name: string;
  quantity: number;
  status: ProductOrderStatusEnum;
}

export enum ProductOrderStatusEnum {
  PROCESSING = 'PROCESSING',
  ASSEMBLY = 'ASSEMBLY',
  PAINTING = 'PAINTING',
  DONE = 'DONE'
}
