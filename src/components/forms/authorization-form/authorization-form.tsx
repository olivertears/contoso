import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Title } from '../../ui';
import { AuthenticateData } from '../../../api/auth';
import { EmployeeRoleEnum, IEmployee } from '../../../interfaces';
import { userService } from '../../../services/user';
import { authService } from '../../../services/auth';

export const AuthorizationForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<AuthenticateData>({ defaultValues: { email: '', password: '' } });

  const onSubmit = (data: AuthenticateData) => {
    console.log(data);
    const role = data.email.split('@')[0].toUpperCase();
    if (role in EmployeeRoleEnum) {
      authService.setToken('token');
      userService.setUser({ role } as IEmployee);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Авторизация</Title>
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
      <Button type="submit">ВОЙТИ</Button>
    </Form>
  );
};
