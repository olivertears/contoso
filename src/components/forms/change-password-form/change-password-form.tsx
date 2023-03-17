import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Title } from '../../ui';
import { ChangePasswordData } from '../../../api';

export const ChangePasswordForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ChangePasswordData>({ defaultValues: { oldPassword: '', newPassword: '' } });

  const onSubmit = (data: ChangePasswordData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Изменить пароль</Title>
      <Input
        label="Старый пароль"
        type="password"
        value={watch('oldPassword')}
        error={errors.oldPassword?.message}
        {...register('oldPassword', {
          required: true,
          minLength: { value: 6, message: 'The password is too short' }
        })}
      />
      <Input
        label="Новый пароль"
        type="password"
        value={watch('newPassword')}
        error={errors.newPassword?.message}
        {...register('newPassword', {
          required: true,
          minLength: { value: 6, message: 'The password is too short' }
        })}
      />
      <Button type="submit">СОХРАНИТЬ</Button>
    </Form>
  );
};
