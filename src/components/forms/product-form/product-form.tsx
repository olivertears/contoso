import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Title } from '../../ui';
import { ProductFormProps } from './product-form.types';
import { IItem } from '../../../interfaces';

export const ProductForm: FC<ProductFormProps> = ({ product }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Omit<IItem, 'id' | 'type'>>({
    defaultValues: {
      name: product?.name || ''
    }
  });

  const onSubmit = (data: Omit<IItem, 'id' | 'type'>) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Продукт</Title>
      <Input
        label="Название"
        value={watch('name')}
        error={errors.name?.message}
        {...register('name', {
          required: { value: true, message: 'Необходимо ввести название' }
        })}
      />
      <Button type="submit">{product ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
    </Form>
  );
};
