import { FC } from 'react';
import { Divider, PageWrap } from '../../ui';
import { SignInForm } from '../../forms/sign-in-form';
import { SignUpForm } from '../../forms/sign-up-form';

export const Auth: FC = () => {
  return (
    <PageWrap>
      <SignInForm />
      <Divider />
      <SignUpForm />
    </PageWrap>
  );
};
