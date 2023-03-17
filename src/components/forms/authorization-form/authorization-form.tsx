import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Title } from '../../ui';
import { AuthorizationData } from '../../../api';
import { EmployeeRoleEnum, IEmployee } from '../../../interfaces';
import { employeeService } from '../../../services/employee';

export const AuthorizationForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<AuthorizationData>({ defaultValues: { email: '', password: '' } });

  const onSubmit = (data: AuthorizationData) => {
    console.log(data);
    const role = data.email.split('@')[0].toUpperCase();
    if (role in EmployeeRoleEnum) {
      employeeService.setEmployee({ role } as IEmployee);
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
