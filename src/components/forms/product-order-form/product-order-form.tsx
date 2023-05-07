import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Select, Title } from '../../ui';
import { IProductOrder } from '../../../interfaces';
import { ProductOrderFormProps } from './product-order-form.types';
import { productOrderService } from '../../../services/product-order';
import { productService } from '../../../services/product';

export const ProductOrderForm: FC<ProductOrderFormProps> = ({ hideModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Omit<IProductOrder, 'id'>>({
    defaultValues: {
      name: '',
      itemId: productService.products$?.[0]?.id,
      quantity: 100
    }
  });

  const onSubmit = (data: Omit<IProductOrder, 'id'>) => {
    setIsLoading(true);
    productOrderService
      .addProductOrder(data)
      .then(hideModal)
      .finally(() => setIsLoading(false));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <Loader />}
      <Title>Заказ продукта</Title>
      <Input
        label="Заказчик"
        value={watch('name')}
        error={errors.name?.message}
        {...register('name', {
          required: 'Необходимо ввести название'
        })}
      />
      <Select label="Продукт" {...register('itemId', { required: true })}>
        {productService.products$.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Select>
      <Input
        label="Количество"
        type="number"
        value={watch('quantity')}
        error={errors.quantity?.message}
        {...register('quantity', {
          required: 'Необходимо ввести количество'
        })}
      />
      <Button type="submit">ДОБАВИТЬ</Button>
    </Form>
  );
};
