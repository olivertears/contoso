import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import * as S from './material-order-card.styles';
import { MaterialOrderCardProps } from './material-order-card.types';
import { observer } from 'mobx-react-lite';
import { employeeService } from '../../../../../services/employee';
import { materialService } from '../../../../../services/material';
import { MdOutlineArchive } from 'react-icons/md';

export const MaterialOrderCard: FC<MaterialOrderCardProps> = observer(
  ({ order, index, archive }) => {
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
              <b>Производтсвенный заказ:</b> №{order.productOrderId}
            </div>
            <div>
              <b>Работник: </b>
              {employeeService.employees$
                .filter(({ id }) => id === order.employeeId)
                .map(({ firstName, lastName }) => firstName + ' ' + lastName)}
            </div>
            <div>
              <b>Материал: </b>
              {materialService.materials$.find(({ id }) => id === order.itemId)?.name}
            </div>
            <div>
              <b>Количество:</b> {order.quantity}
            </div>
          </S.ProductOrderCard>
        )}
      </Draggable>
    );
  }
);
