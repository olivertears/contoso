import { IItem, IProductOrder, ItemTypeEnum } from '../../../interfaces';
import { PRODUCT_ORDER_STATUS_VALUES } from '../../../constants';
import { ICell } from '../../templates/table';

const PRODUCTS: IItem[] = [
  {
    id: 0,
    name: 'Карандаш',
    type: ItemTypeEnum.PRODUCT
  },
  {
    id: 1,
    name: 'Ручка',
    type: ItemTypeEnum.PRODUCT
  }
];

export const productOrderTableAdapter = (productOrders: IProductOrder[]): ICell[] =>
  productOrders.map((productOrder) => ({
    id: productOrder.id,
    data: [
      productOrder.id.toString(),
      productOrder.name,
      PRODUCTS.find((product) => product.id === productOrder.itemId)?.name || '',
      productOrder.quantity.toString(),
      PRODUCT_ORDER_STATUS_VALUES[productOrder.status]
    ]
  }));
