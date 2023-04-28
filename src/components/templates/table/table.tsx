import { FC } from 'react';
import { AddIcon, EditIcon } from '../../ui/icons';
import * as S from './table.styles';
import { TableProps } from './table.types';
import { useLocation } from 'react-router-dom';
import { userService } from '../../../services/user';
import { EmployeeRoleEnum } from '../../../interfaces';

export const Table: FC<TableProps> = ({ header, body, onIconClick }) => {
  const { pathname } = useLocation();

  return (
    <S.Wrap>
      <S.Table columns={header.length + 1}>
        {header.map((title) => (
          <S.HeaderCell key={title}>{title}</S.HeaderCell>
        ))}
        <S.HeaderCell>
          {pathname === '/product_orders' &&
          userService.user$?.role !== EmployeeRoleEnum.DISPATCHER ? (
            ''
          ) : (
            <AddIcon color="#dadada" width="16px" onClick={() => onIconClick(null)} />
          )}
        </S.HeaderCell>
        {body.map(({ data, id }) => (
          <>
            {data.map((text, index) => (
              <S.BodyCell key={id + text + index}>{String(text)}</S.BodyCell>
            ))}
            <S.BodyCell key={id + 'edit'}>
              <EditIcon onClick={() => onIconClick(id)} />
            </S.BodyCell>
          </>
        ))}
      </S.Table>
    </S.Wrap>
  );
};
