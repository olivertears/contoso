import { FC } from 'react';
import { AddIcon, EditIcon } from '../../ui/icons';
import * as S from './table.styles';
import { TableProps } from './table.types';

export const Table: FC<TableProps> = ({ header, body, onIconClick }) => {
  return (
    <S.Wrap>
      <S.Table columns={header.length + 1}>
        {header.map((title) => (
          <S.HeaderCell key={title}>{title}</S.HeaderCell>
        ))}
        <S.HeaderCell>
          <AddIcon width="16px" onClick={() => onIconClick(null)} />
        </S.HeaderCell>
        {body.map(({ data, id }) => (
          <>
            {data.map((text) => (
              <S.BodyCell key={text + Date.now() + id}>{String(text)}</S.BodyCell>
            ))}
            <S.BodyCell>
              <EditIcon onClick={() => onIconClick(id)} />
            </S.BodyCell>
          </>
        ))}
      </S.Table>
    </S.Wrap>
  );
};
