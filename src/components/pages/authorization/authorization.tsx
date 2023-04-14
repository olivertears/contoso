import { FC } from 'react';
import { PageWrap } from '../../ui';
import { AuthorizationForm } from '../../forms/authorization-form';

export const Authorization: FC = () => {
  return (
    <PageWrap>
      <AuthorizationForm />
    </PageWrap>
  );
};
