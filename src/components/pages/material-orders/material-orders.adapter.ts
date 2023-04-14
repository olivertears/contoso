import { IEmployee, IItem, IMaterialOrder, IProductOrder, ItemTypeEnum } from '../../../interfaces';
import { MATERIAL_ORDER_STATUS_VALUES } from '../../../constants';
import { ICell } from '../../templates/table';

const PRODUCT_ORDERS: IProductOrder[] = [
  {
    id: 0,
    name: 'ИП Иванов'
  } as IProductOrder,
  {
    id: 1,
    name: 'ААА Большой Друг'
  } as IProductOrder
];

const EMPLOYEES: IEmployee[] = [
  {
    id: 0,
    lastName: 'Подольская',
    firstName: 'Елизавета',
    middleName: 'Александровна'
  } as IEmployee,
  {
    id: 1,
    lastName: 'Иванов',
    firstName: 'Иван',
    middleName: 'Иванович'
  } as IEmployee
];

const MATERIALS: IItem[] = [
  {
    id: 0,
    name: 'Грифель карандаша',
    type: ItemTypeEnum.ASSEMBLY_MATERIAL
  },
  {
    id: 1,
    name: 'Колпачок ручки',
    type: ItemTypeEnum.PAINTING_MATERIAL
  }
];

export const materialOrderTableAdapter = (materialOrders: IMaterialOrder[]): ICell[] =>
  materialOrders.map((materialOrder) => ({
    id: materialOrder.id,
    data: [
      materialOrder.id.toString(),
      PRODUCT_ORDERS.find((productOrder) => productOrder.id === materialOrder.productOrderId)
        ?.name || '',
      EMPLOYEES.reduce(
        (accumulator, currentValue) =>
          currentValue.id === materialOrder.employeeId
            ? currentValue.lastName + ' ' + currentValue.firstName + ' ' + currentValue.middleName
            : accumulator,
        ''
      ),
      MATERIALS.find((material) => material.id === materialOrder.itemId)?.name || '',
      materialOrder.quantity.toString(),
      MATERIAL_ORDER_STATUS_VALUES[materialOrder.isDone.toString()]
    ]
  }));
