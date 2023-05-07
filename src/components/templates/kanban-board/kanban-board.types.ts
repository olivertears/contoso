import { OrderStatus } from '../../../interfaces';
import { FC } from 'react';

export interface KanbanProps<T extends { id: number; status: OrderStatus }> {
  kanbanColumns: KanbanColumn<T>[];
  Card: FC<{ order: T; index: number; archive?: (id: number) => void }>;
  hasRights: boolean;
  onStatusChange: (id: number, status: OrderStatus) => void;
  archive: (id: number) => void;
}

export interface KanbanColumn<T> {
  name: OrderStatus;
  orders: T[];
}
