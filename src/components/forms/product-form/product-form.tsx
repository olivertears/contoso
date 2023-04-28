import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Title } from '../../ui';
import { ProductFormProps } from './product-form.types';
import { IItem } from '../../../interfaces';
import { productService } from '../../../services/product';

export const ProductForm: FC<ProductFormProps> = ({ product, hideModal }) => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    product
      ? productService
          .updateProduct({ ...data, id: product.id })
          .then(hideModal)
          .finally(() => setIsLoading(false))
      : productService
          .addProduct(data.name)
          .then(hideModal)
          .finally(() => setIsLoading(false));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <Loader />}
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
