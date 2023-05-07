import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Text, Input, Loader } from '../../ui';
import { ChangePasswordData } from '../../../api/employee';
import { employeeService } from '../../../services/employee';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';

export const ChangePasswordForm: FC = () => {
  const { isModalOpen, showModal, hideModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    resetField,
    setError,
    formState: { errors }
  } = useForm<ChangePasswordData>({ defaultValues: { oldPassword: '', newPassword: '' } });

  const onSubmit = (data: ChangePasswordData) => {
    setIsLoading(true);
    employeeService
      .changePassword(data)
      .then(() => {
        reset();
        showModal();
      })
      .catch((error) => {
        resetField('oldPassword');
        resetField('newPassword');
        setError('oldPassword', { type: 'custom', message: error.message }, { shouldFocus: true });
        setError('newPassword', { type: 'custom', message: error.message });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Text type="header" bold>
        Изменить пароль
      </Text>
      <Input
        label="Старый пароль"
        type="password"
        value={watch('oldPassword')}
        error={errors.oldPassword?.message}
        {...register('oldPassword', {
          required: true,
          minLength: { value: 4, message: 'Минимальная длина пароля - 4 символа' }
        })}
      />
      <Input
        label="Новый пароль"
        type="password"
        value={watch('newPassword')}
        error={errors.newPassword?.message}
        {...register('newPassword', {
          required: true,
          minLength: { value: 4, message: 'Минимальная длина пароля - 4 символа' }
        })}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : 'СОХРАНИТЬ'}
      </Button>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <Text type="info" bold center margin="0 0 10px">
          Поздравляем
        </Text>
        <Text type="text">Ваш пароль был успешно изменен</Text>
      </Modal>
    </Form>
  );
};
