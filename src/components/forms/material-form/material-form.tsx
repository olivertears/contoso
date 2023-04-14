import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { MATERIAL_TYPE_VALUES } from '../../../constants';
import { IItem, ItemTypeEnum } from '../../../interfaces';
import { Button, Form, Input, Select, Title } from '../../ui';
import { MaterialFormProps } from './material-form.types';

export const MaterialForm: FC<MaterialFormProps> = ({ material }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Omit<IItem, 'id'>>({
    defaultValues: {
      name: material?.name || '',
      type: material?.type || ItemTypeEnum.ASSEMBLY_MATERIAL
    }
  });

  const onSubmit = (data: Omit<IItem, 'id'>) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Материал</Title>
      <Input
        label="Название"
        value={watch('name')}
        error={errors.name?.message}
        {...register('name', {
          required: { value: true, message: 'Необходимо ввести название' }
        })}
      />
      <Select label="Назначение" {...register('type', { required: true })}>
        {Object.entries(MATERIAL_TYPE_VALUES).map(([role, name]) => (
          <option key={role} value={role}>
            {name}
          </option>
        ))}
      </Select>
      <Button type="submit">{material ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
    </Form>
  );
};
