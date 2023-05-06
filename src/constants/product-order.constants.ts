import { ProductOrderStatusEnum } from '../interfaces';

export const PRODUCT_ORDER_STATUS_VALUES: { [key in ProductOrderStatusEnum]: string } = {
  CANCELLED: 'Отмена',
  PROCESSING: 'В обработке',
  ASSEMBLY: 'Сборка',
  PAINTING: 'Покраска',
  PACKAGING: 'Упаковка',
  DELIVERY: 'Доставка',
  DONE: 'Завершено'
};
