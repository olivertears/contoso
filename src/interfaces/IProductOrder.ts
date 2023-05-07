import { OrderStatus } from './OrderStatus';

export interface IProductOrder {
  id: number;
  itemId: number;
  name: string;
  quantity: number;
  status: OrderStatus;
}
