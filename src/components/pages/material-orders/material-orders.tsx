import { FC, useEffect, useState } from 'react';
import { Loader } from '../../ui';
import { employeeService } from '../../../services/employee';
import { materialService } from '../../../services/material';
import { materialOrderService } from '../../../services/material-order';
import { EmployeeRoleEnum, IMaterialOrder, OrderStatus } from '../../../interfaces';
import { userService } from '../../../services/user';
import { KanbanBoard } from '../../templates/kanban-board';
import { KanbanColumn } from '../../templates/kanban-board/kanban-board.types';
import { MATERIAL_ORDER_STATUS_VALUES } from '../../../constants';
import { MaterialOrderCard } from '../../templates/kanban-board/cards/material-order-card';
import { productOrderService } from '../../../services/product-order';
import { observer } from 'mobx-react-lite';
import { specificationService } from '../../../services/specification';

export const MaterialOrders: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData().finally(() => setIsLoading(false));
  }, []);

  const fetchData = async () => {
    await materialService.getMaterials();
    await employeeService.getEmployees();
    await materialOrderService.getMaterialOrders();
    await productOrderService.getProductOrders();
    await specificationService.getSpecifications();
  };

  const KANBAN_COLUMNS: KanbanColumn<IMaterialOrder>[] = Object.keys(
    MATERIAL_ORDER_STATUS_VALUES
  ).map((orderStatus) => ({
    name: orderStatus as unknown as OrderStatus,
    orders: materialOrderService.materialOrders$.filter(
      ({ status }) => status?.toString() === orderStatus
    )
  }));

  return (
    <>
      <KanbanBoard
        kanbanColumns={KANBAN_COLUMNS}
        Card={MaterialOrderCard}
        hasRights={[
          EmployeeRoleEnum.ASSEMBLY,
          EmployeeRoleEnum.PAINTING,
          EmployeeRoleEnum.PACKAGING,
          EmployeeRoleEnum.STOREKEEPER
        ].includes(userService.user$?.role as EmployeeRoleEnum)}
        onStatusChange={(id: number, status: OrderStatus) =>
          materialOrderService.updateMaterialOrder(id, status as unknown as OrderStatus)
        }
        archive={(id: number) =>
          materialOrderService.updateMaterialOrder(id, 'ARCHIVED' as unknown as OrderStatus)
        }
      />
      {isLoading && <Loader />}
    </>
  );
});
