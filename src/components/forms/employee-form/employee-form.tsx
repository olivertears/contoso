import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { EMPLOYEE_ROLE_VALUES } from '../../../constants';
import { Button, Form, Input, Select, Title } from '../../ui';
import { EmployeeData } from '../../../api';
import { EmployeeRoleEnum } from '../../../interfaces';
import { EmployeeFormProps } from './employee-form.types';

export const EmployeeForm: FC<EmployeeFormProps> = ({ employee }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<EmployeeData>({
    defaultValues: {
      email: employee?.email || '',
      lastName: employee?.lastName || '',
      firstName: employee?.firstName || '',
      middleName: employee?.middleName || '',
      role: employee?.role || EmployeeRoleEnum.TECHNOLOGIST,
      isActive: employee?.isActive || true
    }
  });

  const onSubmit = (data: EmployeeData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Работник</Title>
      <Input
        label="Логин"
        type="email"
        value={watch('email')}
        error={errors.email?.message}
        {...register('email', { required: true })}
      />
      <Input
        label="Фамилия"
        value={watch('lastName')}
        error={errors.lastName?.message}
        {...register('lastName', { required: { value: true, message: 'Это поле надо указать' } })}
      />
      <Input
        label="Имя"
        value={watch('firstName')}
        error={errors.firstName?.message}
        {...register('firstName', { required: true })}
      />
      <Input
        label="Отчество"
        value={watch('middleName')}
        error={errors.middleName?.message}
        {...register('middleName', { required: true })}
      />
      <Select label="Должность" {...register('role', { required: true })}>
        {Object.entries(EMPLOYEE_ROLE_VALUES).map(([role, name]) => (
          <option key={role} value={role}>
            {name}
          </option>
        ))}
      </Select>
      <Select label="Статус" {...register('isActive', { required: true })}>
        <option value={'true'}>Активен</option>
        <option value={'false'}>Неактивен</option>
      </Select>
      <Button type="submit">{employee ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
    </Form>
  );
};
