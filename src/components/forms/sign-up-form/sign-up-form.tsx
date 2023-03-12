import { FC } from 'react';
import { Button, Form, Input, Title } from '../../ui';

export const SignUpForm: FC = () => {
  return (
    <>
      <Title>Sign Up</Title>
      <Form>
        <Input placeholder="Firstname" />
        <Input placeholder="Lastname" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button>SIGN IN</Button>
      </Form>
    </>
  );
};
