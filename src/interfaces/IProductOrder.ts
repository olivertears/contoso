export interface IProductOrder {
  id: number;
  itemId: number;
  name: string;
  quantity: number;
  status: ProductOrderStatusEnum;
}

export enum ProductOrderStatusEnum {
  CANCELLED = 'CANCELLED',
  PROCESSING = 'PROCESSING',
  ASSEMBLY = 'ASSEMBLY',
  PAINTING = 'PAINTING',
  PACKAGING = 'PACKAGING',
  DELIVERY = 'DELIVERY',
  DONE = 'DONE'
}
