import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Title } from '../../ui';
import { AuthenticateData } from '../../../api/auth';
import { EmployeeRoleEnum, IEmployee } from '../../../interfaces';
import { employeeService } from '../../../services/employee';

export const AuthorizationForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({ defaultValues: { email: '', password: '' } });

  const onSubmit = (data: AuthenticateData) => {
    console.log(data);
    const role = data.email.split('@')[0].toUpperCase();
    if (role in EmployeeRoleEnum) {
      employeeService.setEmployee({ role } as IEmployee);
    }
  };

  return (
    <>
      <Title>Sign In</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Логин"
          type="email"
          value={watch('email')}
          error={errors.email?.message}
          {...register('email', { required: true })}
        />
        <Input
          label="Пароль"
          type="password"
          value={watch('password')}
          error={errors.password?.message}
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
