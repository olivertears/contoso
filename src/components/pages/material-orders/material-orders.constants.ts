import { IMaterialOrder } from '../../../interfaces';

export const MATERIAL_ORDERS_HEADER = [
  '№',
  'Заказ',
  'Работник',
  'Материал',
  'Количество',
  'Статус'
];

export const MATERIAL_ORDERS: IMaterialOrder[] = [
  {
    id: 1,
    employeeId: 1,
    productOrderId: 0,
    itemId: 0,
    quantity: 100,
    isDone: false
  },
  {
    id: 2,
    employeeId: 0,
    productOrderId: 1,
    itemId: 1,
    quantity: 100,
    isDone: true
  }
];
