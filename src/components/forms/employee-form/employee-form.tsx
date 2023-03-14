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
        <Input type="email" placeholder="Логин" {...register('email', { required: true })} />
        <Input placeholder="Фамилия" {...register('lastName', { required: true })} />
        <Input placeholder="Имя" {...register('firstName', { required: true })} />
        <Input placeholder="Отчество" {...register('middleName', { required: true })} />
        <Select {...register('role', { required: true })}>
          {Object.entries(ROLE_VALUES).map(([role, name]) => (
            <option key={role} value={role}>
              {name}
            </option>
          ))}
        </Select>
        <Select {...register('isActive', { required: true })}>
          <option value={'true'}>Активен</option>
          <option value={'false'}>Неактивен</option>
        </Select>
        <Button type="submit">{employee ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
      </Form>
    </>
  );
};
