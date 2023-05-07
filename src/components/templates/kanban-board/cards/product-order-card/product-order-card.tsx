import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import * as S from './product-order-card.styles';
import { ProductOrderCardProps } from './product-order-card.types';
import { observer } from 'mobx-react-lite';
import { productService } from '../../../../../services/product';
import { MdOutlineArchive } from 'react-icons/md';

export const ProductOrderCard: FC<ProductOrderCardProps> = observer(({ order, index, archive }) => {
  return (
    <Draggable key={order.id} draggableId={order.id.toString()} index={index}>
      {(provided) => (
        <S.ProductOrderCard
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {archive && (
            <S.IconWrap>
              <MdOutlineArchive size={20} cursor="pointer" onClick={() => archive(order.id)} />
            </S.IconWrap>
          )}
          <S.IdText>№{order.id}</S.IdText>
          <div>
            <b>{order.name}</b>
          </div>
          <div>
            <b>Продукт:</b> {productService.products$.find(({ id }) => id === order.itemId)?.name}
          </div>
          <div>
            <b>Количество:</b> {order.quantity}
          </div>
        </S.ProductOrderCard>
      )}
    </Draggable>
  );
});
