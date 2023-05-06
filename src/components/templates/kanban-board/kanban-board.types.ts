import { IProductOrder, ProductOrderStatusEnum } from '../../../interfaces';

export interface KanbanProps {
  kanbanColumns: KanbanColumn[];
}

export interface KanbanColumn {
  name: ProductOrderStatusEnum;
  productOrders: IProductOrder[];
}
