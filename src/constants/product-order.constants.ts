import { ProductOrderStatusEnum } from '../interfaces';

export const PRODUCT_ORDER_STATUS_VALUES: { [key in ProductOrderStatusEnum]: string } = {
  PROCESSING: 'В обработке',
  ASSEMBLY: 'Сборка',
  PAINTING: 'Покраска',
  DONE: 'Завершено'
};
