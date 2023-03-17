import { ISpecification } from '../../../interfaces';

export const SPECIFICATIONS_HEADER = ['№', 'Название', 'Продукт', 'Начало', 'Завершение', 'Статус'];

export const SPECIFICATIONS: ISpecification[] = [
  {
    id: 1,
    name: 'Как сделать карандаш',
    itemId: 0,
    startDate: '12.12.2012',
    endDate: '12.12.2042',
    isActive: true
  },
  {
    id: 2,
    name: 'Как сделать ручку',
    itemId: 1,
    startDate: '12.12.2012',
    endDate: '12.12.2042',
    isActive: false
  }
];
