import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Select, Title, Text } from '../../ui';
import { IProductOrder } from '../../../interfaces';
import { ProductOrderFormProps } from './product-order-form.types';
import { productOrderService } from '../../../services/product-order';
import { productService } from '../../../services/product';
import { observer } from 'mobx-react-lite';
import { specificationService } from '../../../services/specification';

export const ProductOrderForm: FC<ProductOrderFormProps> = observer(({ hideModal }) => {
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
      quantity: 10000
    }
  });

  const onSubmit = (data: Omit<IProductOrder, 'id'>) => {
    setIsLoading(true);
    productOrderService
      .addProductOrder(data)
      .then(hideModal)
      .finally(() => setIsLoading(false));
  };

  const specification = specificationService.specifications$.find(
    ({ itemId, active }) => itemId === +watch('itemId') && active
  );
  const min = specification?.operations.reduce((res, { time }) => res + time, 0);
  const hour = (Number(min) * +watch('quantity')) / 6000 + 4;
  const d = Math.floor(hour / 8);
  const h = (hour - d * 8).toFixed(0);

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
        {productService.products$
          .filter(
            ({ id }) =>
              !!specificationService.specifications$.find(
                ({ itemId, active }) => id === itemId && active
              )
          )
          .map(({ id, name }) => (
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
      <Text type="text">
        Время выполнения:{' '}
        <b>
          {d}д. {h}ч.
        </b>
      </Text>
      <Button type="submit">ДОБАВИТЬ</Button>
    </Form>
  );
});
