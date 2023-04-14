import { IProductOrder } from '../../interfaces';

export interface IProductOrderService {
  productOrders$: IProductOrder[];
  addProductOrder: (addProductOrderData: Omit<IProductOrder, 'id'>) => void;
  getProductOrders: () => void;
  updateProductOrder: (updateProductOrderData: IProductOrder) => void;
}
