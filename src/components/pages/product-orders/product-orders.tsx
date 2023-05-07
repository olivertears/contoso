import { FC, useEffect, useState } from 'react';
import { Loader } from '../../ui';
import { productOrderService } from '../../../services/product-order';
import { productService } from '../../../services/product';
import { KanbanBoard } from '../../templates/kanban-board';
import { specificationService } from '../../../services/specification';
import { KanbanColumn } from '../../templates/kanban-board/kanban-board.types';
import { EmployeeRoleEnum, IProductOrder, OrderStatus } from '../../../interfaces';
import { ProductOrderCard } from '../../templates/kanban-board/cards/product-order-card';
import { userService } from '../../../services/user';
import { PRODUCT_ORDER_STATUS_VALUES } from '../../../constants';
import { observer } from 'mobx-react-lite';

export const ProductOrders: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData().finally(() => setIsLoading(false));
  }, []);

  const fetchData = async () => {
    await productService.getProducts();
    await productOrderService.getProductOrders();
    await specificationService.getSpecifications();
  };

  const KANBAN_COLUMNS: KanbanColumn<IProductOrder>[] = Object.keys(
    PRODUCT_ORDER_STATUS_VALUES
  ).map((orderStatus) => ({
    name: orderStatus as unknown as OrderStatus,
    orders: productOrderService.productOrders$.filter(
      ({ status }) => status.toString() === orderStatus
    )
  }));

  return (
    <>
      <KanbanBoard
        kanbanColumns={KANBAN_COLUMNS}
        Card={ProductOrderCard}
        hasRights={
          ![
            EmployeeRoleEnum.TECHNOLOGIST,
            EmployeeRoleEnum.ADMIN,
            EmployeeRoleEnum.STOREKEEPER
          ].includes(userService.user$?.role as EmployeeRoleEnum)
        }
        onStatusChange={(id: number, status: OrderStatus) =>
          productOrderService.updateProductOrder(id, status)
        }
        archive={(id: number) =>
          productOrderService.updateProductOrder(id, 'ARCHIVED' as unknown as OrderStatus)
        }
      />
      {isLoading && <Loader />}
    </>
  );
});
