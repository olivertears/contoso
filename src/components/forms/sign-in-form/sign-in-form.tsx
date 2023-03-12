import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Title } from '../../ui';
import { AuthenticateData } from '../../../api/auth/auth.types';
import { EmployeeRoleEnum, IEmployee } from '../../../interfaces/IEmployee';
import { employeeService } from '../../../services/employee';

export const SignInForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { email: '', password: '' } });

  const onSubmit = (data: AuthenticateData) => {
    const role = data.email.split('@')[0].toUpperCase();
    if (role in EmployeeRoleEnum) {
      employeeService.setEmployee({ role } as IEmployee);
    }
  };

  return (
    <>
      <Title>Sign In</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" placeholder="Email" {...register('email', { required: true })} />
        <Input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: true,
            minLength: { value: 6, message: 'The password is too short' }
          })}
        />
        <Button type="submit">SIGN IN</Button>
      </Form>
    </>
  );
};
