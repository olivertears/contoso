import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Select, Title } from '../../ui';
import { MaterialOrderData } from '../../../api';
import { IItem, IProductOrder } from '../../../interfaces';
import { MaterialOrderFormProps } from './material-order-form.types';

export const MaterialOrderForm: FC<MaterialOrderFormProps> = ({ materialOrder }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<MaterialOrderData>({
    defaultValues: {
      productOrderId: materialOrder?.productOrderId || 0,
      itemId: materialOrder?.itemId || 0,
      quantity: materialOrder?.quantity || 100
    }
  });

  const onSubmit = (data: MaterialOrderData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Заказ ТМЦ</Title>
      <Select label="Для" {...register('productOrderId', { required: true })}>
        {([] as IProductOrder[]).map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Select>
      <Select label="Материал" {...register('itemId', { required: true })}>
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
      <Button type="submit">{materialOrder ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
    </Form>
  );
};
