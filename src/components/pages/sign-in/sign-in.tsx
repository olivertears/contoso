import { FC } from 'react';
import { PageWrap } from '../../ui';
import { SignInForm } from '../../forms/sign-in-form';

export const SignIn: FC = () => {
  return (
    <PageWrap>
      <SignInForm />
    </PageWrap>
  );
};
