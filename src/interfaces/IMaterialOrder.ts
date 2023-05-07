import { OrderStatus } from './OrderStatus';

export interface IMaterialOrder {
  id: number;
  employeeId: number;
  productOrderId: number;
  itemId: number;
  quantity: number;
  status: OrderStatus;
}
