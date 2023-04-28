export interface IMaterialOrder {
  id: number;
  employeeId: number;
  productOrderId: number;
  itemId: number;
  quantity: number;
  done: boolean;
}
