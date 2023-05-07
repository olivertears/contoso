import { FC } from 'react';
import { AddIcon } from '../../ui/icons';
import * as S from './table.styles';
import { TableProps } from './table.types';
import { BiEdit } from 'react-icons/bi';

export const Table: FC<TableProps> = ({ header, body, onIconClick, hasRights }) => {
  return (
    <S.Wrap>
      <S.Table columns={header.length + Number(hasRights)}>
        {header.map((title) => (
          <S.HeaderCell key={title}>{title}</S.HeaderCell>
        ))}
        {hasRights && (
          <S.HeaderCell>
            <AddIcon color="#dadada" width="16px" onClick={() => onIconClick(null)} />
          </S.HeaderCell>
        )}
        {body.map(({ data, id }) => (
          <>
            {data.map((text, index) => (
              <S.BodyCell key={id + text + index}>{String(text)}</S.BodyCell>
            ))}
            {hasRights && (
              <S.BodyCell key={id + 'edit'}>
                <BiEdit
                  color="#1d1d1f"
                  size={20}
                  cursor="pointer"
                  onClick={() => onIconClick(id)}
                />
              </S.BodyCell>
            )}
          </>
        ))}
      </S.Table>
    </S.Wrap>
  );
};
