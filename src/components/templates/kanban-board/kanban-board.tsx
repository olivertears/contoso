import { FC, useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import * as S from './kanban-board.styles';
import { KanbanColumn, KanbanProps } from './kanban-board.types';
import { ProductOrderCard } from './product-order-card';
import { PRODUCT_ORDER_STATUS_VALUES } from '../../../constants';
import { productOrderService } from '../../../services/product-order';

export const KanbanBoard: FC<KanbanProps> = ({ kanbanColumns }) => {
  const [columns, setColumns] = useState<KanbanColumn[]>(kanbanColumns);

  useEffect(() => {
    setColumns(kanbanColumns);
  }, [kanbanColumns]);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[+source.droppableId];
      const destColumn = columns[+destination.droppableId];
      const sourceItems = [...sourceColumn.productOrders];
      const destItems = [...destColumn.productOrders];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns(
        columns.map((col, index) =>
          index === +source.droppableId
            ? { ...col, productOrders: sourceItems }
            : index === +destination.droppableId
            ? { ...col, productOrders: destItems }
            : col
        )
      );
      productOrderService.updateProductOrder(
        sourceColumn.productOrders[source.index].id,
        destColumn.name
      );
    } else {
      const column = columns[+source.droppableId];
      const copiedItems = [...column.productOrders];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns(
        columns.map((col, index) =>
          index === +source.droppableId ? { name: col.name, productOrders: copiedItems } : col
        )
      );
    }
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <S.ColumnWrap>
        {columns.map(({ name, productOrders }, index) => (
          <Droppable key={index} droppableId={index.toString()}>
            {(provided) => (
              <S.Column ref={provided.innerRef} {...provided.droppableProps}>
                <S.ColumnTitle>{PRODUCT_ORDER_STATUS_VALUES[name]}</S.ColumnTitle>
                {productOrders.map((productOrder, index) => (
                  <ProductOrderCard
                    key={productOrder.id}
                    productOrder={productOrder}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </S.Column>
            )}
          </Droppable>
        ))}
      </S.ColumnWrap>
    </DragDropContext>
  );
};
