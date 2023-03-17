import { IProductOrder, ProductOrderStatusEnum } from '../../../interfaces';

export const PRODUCT_ORDERS_HEADER = ['№', 'Название', 'Продукт', 'Количество', 'Статус'];

export const PRODUCT_ORDERS: IProductOrder[] = [
  {
    id: 1,
    itemId: 0,
    name: 'ИП Иванов',
    quantity: 100,
    status: ProductOrderStatusEnum.PROCESSING
  },
  {
    id: 2,
    itemId: 1,
    name: 'ААА Большой Друг',
    quantity: 228,
    status: ProductOrderStatusEnum.ASSEMBLY
  }
];
