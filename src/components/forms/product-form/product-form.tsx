import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Title } from '../../ui';
import { ProductData } from '../../../api';
import { ProductFormProps } from './product-form.types';

export const ProductForm: FC<ProductFormProps> = ({ product }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ProductData>({
    defaultValues: {
      name: product?.name || ''
    }
  });

  const onSubmit = (data: ProductData) => {
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
