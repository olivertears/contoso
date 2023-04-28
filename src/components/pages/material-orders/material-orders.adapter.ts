import { IMaterialOrder } from '../../../interfaces';
import { MATERIAL_ORDER_STATUS_VALUES } from '../../../constants';
import { ICell } from '../../templates/table';
import { productOrderService } from '../../../services/product-order';
import { employeeService } from '../../../services/employee';
import { materialService } from '../../../services/material';

export const materialOrderTableAdapter = (materialOrders: IMaterialOrder[]): ICell[] =>
  materialOrders.map((materialOrder) => ({
    id: materialOrder.id,
    data: [
      materialOrder.id.toString(),
      productOrderService.productOrders$.find(
        (productOrder) => productOrder.id === materialOrder.productOrderId
      )?.name || '',
      employeeService.employees$.reduce(
        (accumulator, currentValue) =>
          currentValue.id === materialOrder.employeeId
            ? currentValue.lastName + ' ' + currentValue.firstName + ' ' + currentValue.middleName
            : accumulator,
        ''
      ),
      materialService.materials$.find((material) => material.id === materialOrder.itemId)?.name ||
        '',
      materialOrder.quantity.toString(),
      MATERIAL_ORDER_STATUS_VALUES[materialOrder.done.toString()]
    ]
  }));
