import { IProductOrder } from '../../../interfaces';
import { PRODUCT_ORDER_STATUS_VALUES } from '../../../constants';
import { ICell } from '../../templates/table';
import { productService } from '../../../services/product';

export const productOrderTableAdapter = (productOrders: IProductOrder[]): ICell[] =>
  productOrders.map((productOrder) => ({
    id: productOrder.id,
    data: [
      productOrder.id.toString(),
      productOrder.name,
      productService.products$.find((product) => product.id === productOrder.itemId)?.name || '',
      productOrder.quantity.toString(),
      PRODUCT_ORDER_STATUS_VALUES[productOrder.status]
    ]
  }));
