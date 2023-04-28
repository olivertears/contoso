import { IProductOrder, ProductOrderStatusEnum } from '../../interfaces';

export interface IProductOrderService {
  productOrders$: IProductOrder[];
  addProductOrder: (addProductOrderData: Omit<IProductOrder, 'id'>) => void;
  getProductOrders: () => void;
  updateProductOrder: (id: number, status: ProductOrderStatusEnum) => void;
}
