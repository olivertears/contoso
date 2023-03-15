import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { ROLE_VALUES } from '../../../constants';
import { Button, Form, Input, Select, Title } from '../../ui';
import { EmployeeData } from '../../../api/employee';
import { EmployeeFormProps } from './employee-form.types';

export const EmployeeForm: FC<EmployeeFormProps> = ({ employee }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: employee
      ? {
          email: employee.email,
          lastName: employee.lastName,
          firstName: employee.firstName,
          middleName: employee.middleName,
          role: employee.role,
          isActive: employee.isActive
        }
      : ({ isActive: true, role: Object.keys(ROLE_VALUES)[0] } as EmployeeData)
  });

  const onSubmit = (data: EmployeeData) => {
    console.log(data);
  };

  return (
    <>
      <Title>Работник</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          {Object.entries(ROLE_VALUES).map(([role, name]) => (
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
    </>
  );
};
