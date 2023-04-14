import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Select, Title } from '../../ui';
import { IItem, IProductOrder } from '../../../interfaces';
import { ProductOrderFormProps } from './product-order-form.types';

export const ProductOrderForm: FC<ProductOrderFormProps> = ({ productOrder }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Omit<IProductOrder, 'id'>>({
    defaultValues: {
      name: productOrder?.name || '',
      itemId: productOrder?.itemId || 0,
      quantity: productOrder?.quantity || 100
    }
  });

  const onSubmit = (data: Omit<IProductOrder, 'id'>) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Заказ продукта</Title>
      <Input
        label="Название"
        value={watch('name')}
        error={errors.name?.message}
        {...register('name', {
          required: { value: true, message: 'Необходимо ввести название' }
        })}
      />
      <Select label="Продукт" {...register('itemId', { required: true })}>
        {([] as IItem[]).map(({ id, name }) => (
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
          required: { value: true, message: 'Необходимо ввести количество' }
        })}
      />
      <Button type="submit">{productOrder ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
    </Form>
  );
};
