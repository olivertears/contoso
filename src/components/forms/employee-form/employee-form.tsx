import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { EMPLOYEE_ROLE_VALUES } from '../../../constants';
import { Button, Form, Input, Loader, Select, Title } from '../../ui';
import { EmployeeRoleEnum, IEmployee } from '../../../interfaces';
import { EmployeeFormProps } from './employee-form.types';
import { employeeService } from '../../../services/employee';
import { emailRegex } from '../../../utils';

export const EmployeeForm: FC<EmployeeFormProps> = ({ employee, hideModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Omit<IEmployee, 'id'>>({
    defaultValues: {
      email: employee?.email || '',
      lastName: employee?.lastName || '',
      firstName: employee?.firstName || '',
      middleName: employee?.middleName || '',
      role: employee?.role || EmployeeRoleEnum.TECHNOLOGIST,
      active: employee ? employee.active : true
    }
  });

  const onSubmit = (data: Omit<IEmployee, 'id'>) => {
    setIsLoading(true);
    employee
      ? employeeService
          .updateEmployee({ ...data, id: employee.id })
          .then(hideModal)
          .finally(() => setIsLoading(false))
      : employeeService
          .addEmployee(data)
          .then(hideModal)
          .finally(() => setIsLoading(false));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <Loader />}
      <Title>Работник</Title>
      <Input
        label="Логин"
        value={watch('email')}
        error={errors.email?.message}
        {...register('email', {
          required: 'Это поле обязательно',
          pattern: {
            value: emailRegex,
            message: 'Указанный адрес электронной почты не существует'
          }
        })}
      />
      <Input
        label="Фамилия"
        value={watch('lastName')}
        error={errors.lastName?.message}
        {...register('lastName', { required: 'Это поле обязательно' })}
      />
      <Input
        label="Имя"
        value={watch('firstName')}
        error={errors.firstName?.message}
        {...register('firstName', { required: 'Это поле обязательно' })}
      />
      <Input
        label="Отчество"
        value={watch('middleName')}
        error={errors.middleName?.message}
        {...register('middleName', { required: 'Это поле обязательно' })}
      />
      <Select label="Должность" {...register('role', { required: 'Это поле обязательно' })}>
        {Object.entries(EMPLOYEE_ROLE_VALUES).map(([role, name]) => (
          <option key={role} value={role}>
            {name}
          </option>
        ))}
      </Select>
      <Select label="Статус" {...register('active', { required: 'Это поле обязательно' })}>
        <option value={'true'}>Активен</option>
        <option value={'false'}>Неактивен</option>
      </Select>
      <Button type="submit">{employee ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
    </Form>
  );
};
