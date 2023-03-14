import { FC } from 'react';
import { PageWrap } from '../../ui';
import { AuthorizationForm } from '../../forms';

export const Authorization: FC = () => {
  return (
    <PageWrap>
      <AuthorizationForm />
    </PageWrap>
  );
};
