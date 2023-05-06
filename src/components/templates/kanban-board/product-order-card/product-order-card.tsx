import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import * as S from './product-order-card.styles';
import { ProductOrderCardProps } from './product-order-card.types';

export const ProductOrderCard: FC<ProductOrderCardProps> = ({ productOrder, index }) => {
  return (
    <Draggable key={productOrder.id} draggableId={productOrder.id.toString()} index={index}>
      {(provided) => (
        <S.ProductOrderCard
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <S.IdText>№{productOrder.id}</S.IdText>
          <div>
            <b>{productOrder.name}</b>
          </div>
          <div>
            <b>Количество:</b> {productOrder.quantity}
          </div>
        </S.ProductOrderCard>
      )}
    </Draggable>
  );
};
