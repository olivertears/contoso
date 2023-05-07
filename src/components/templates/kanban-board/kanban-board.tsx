import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Text } from '../../ui';
import * as S from './kanban-board.styles';
import { KanbanColumn, KanbanProps } from './kanban-board.types';
import { PRODUCT_ORDER_STATUS_VALUES } from '../../../constants';
import { OrderStatus } from '../../../interfaces';
import { useModal } from '../../../hooks';
import { Modal } from '../modal';

export const KanbanBoard = <T extends { id: number; status: OrderStatus }>({
  kanbanColumns,
  Card,
  hasRights,
  onStatusChange,
  archive
}: KanbanProps<T>) => {
  const { isModalOpen, hideModal, showModal } = useModal();
  const [columns, setColumns] = useState<KanbanColumn<T>[]>(kanbanColumns);

  useEffect(() => {
    setColumns(kanbanColumns);
  }, [kanbanColumns]);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    if (!hasRights) {
      showModal();
    } else if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[+source.droppableId];
      const destColumn = columns[+destination.droppableId];
      const sourceItems = [...sourceColumn.orders];
      const destItems = [...destColumn.orders];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns(
        columns.map((col, index) =>
          index === +source.droppableId
            ? { ...col, orders: sourceItems }
            : index === +destination.droppableId
            ? { ...col, orders: destItems }
            : col
        )
      );
      onStatusChange(sourceColumn.orders[source.index].id, destColumn.name);
    } else {
      const column = columns[+source.droppableId];
      const copiedItems = [...column.orders];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns(
        columns.map((col, index) =>
          index === +source.droppableId ? { name: col.name, orders: copiedItems } : col
        )
      );
    }
  };

  return (
    <S.KanbanWrap>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
          <Text type="header" center bold margin="0 0 10px">
            Упс...
          </Text>
          <Text type="text">У вас нет прав для изменения статуса этого заказа</Text>
        </Modal>
        <S.ColumnWrap>
          {columns.map(({ name, orders }, index) => (
            <Droppable key={index} droppableId={index.toString()}>
              {(provided) => (
                <S.Column ref={provided.innerRef} {...provided.droppableProps}>
                  <S.ColumnTitle>{PRODUCT_ORDER_STATUS_VALUES[name.toString()]}</S.ColumnTitle>
                  {orders.map((productOrder, index) => (
                    <Card
                      key={productOrder.id}
                      order={productOrder}
                      index={index}
                      archive={
                        (name.toString() === 'CANCELLED' || name.toString() === 'DONE') && hasRights
                          ? archive
                          : undefined
                      }
                    />
                  ))}
                  {provided.placeholder}
                </S.Column>
              )}
            </Droppable>
          ))}
        </S.ColumnWrap>
      </DragDropContext>
    </S.KanbanWrap>
  );
};
