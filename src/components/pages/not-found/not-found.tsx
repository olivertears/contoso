import { FC } from 'react';
import { Header, PageWrap } from '../../ui';
import * as S from './not-found.styles';

export const NotFound: FC = () => {
  return (
    <PageWrap>
      <S.Text>404</S.Text>
      <Header>Страница не найдена</Header>
    </PageWrap>
  );
};
