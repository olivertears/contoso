import { IProductOrder, OrderStatus } from '../../interfaces';

export interface IProductOrderService {
  productOrders$: IProductOrder[];
  addProductOrder: (addProductOrderData: Omit<IProductOrder, 'id'>) => void;
  getProductOrders: () => void;
  updateProductOrder: (id: number, status: OrderStatus) => void;
}
