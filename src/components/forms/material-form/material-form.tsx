import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { MATERIAL_TYPE_VALUES } from '../../../constants';
import { IItem, ItemTypeEnum } from '../../../interfaces';
import { Button, Form, Input, Loader, Select, Title } from '../../ui';
import { MaterialFormProps } from './material-form.types';
import { materialService } from '../../../services/material';

export const MaterialForm: FC<MaterialFormProps> = ({ material, hideModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Omit<IItem, 'id'>>({
    defaultValues: {
      name: material?.name || '',
      type: material?.type || ItemTypeEnum.ASSEMBLY
    }
  });

  const onSubmit = (data: Omit<IItem, 'id'>) => {
    setIsLoading(true);
    material
      ? materialService
          .updateMaterial({ ...data, id: material.id })
          .then(hideModal)
          .finally(() => setIsLoading(false))
      : materialService
          .addMaterial(data.name, data.type)
          .then(hideModal)
          .finally(() => setIsLoading(false));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <Loader />}
      <Title>Материал</Title>
      <Input
        label="Название"
        value={watch('name')}
        error={errors.name?.message}
        {...register('name', {
          required: { value: true, message: 'Необходимо ввести название' }
        })}
      />
      <Select label="Назначение" {...register('type', { required: true, disabled: !!material })}>
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
