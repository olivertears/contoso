import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Select, Title } from '../../ui';
import { IProductOrder } from '../../../interfaces';
import { ProductOrderFormProps } from './product-order-form.types';
import { productOrderService } from '../../../services/product-order';
import { productService } from '../../../services/product';
import { PRODUCT_ORDER_STATUS_VALUES } from '../../../constants';

export const ProductOrderForm: FC<ProductOrderFormProps> = ({ productOrder, hideModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Omit<IProductOrder, 'id'>>({
    defaultValues: {
      name: productOrder?.name || '',
      itemId: productOrder?.itemId || productService.products$?.[0]?.id,
      quantity: productOrder?.quantity || 100,
      status: productOrder?.status
    }
  });

  const onSubmit = (data: Omit<IProductOrder, 'id'>) => {
    setIsLoading(true);
    productOrder
      ? productOrderService
          .updateProductOrder(productOrder.id, data.status)
          .then(hideModal)
          .finally(() => setIsLoading(false))
      : productOrderService
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
          required: 'Необходимо ввести название',
          disabled: !!productOrder
        })}
      />
      <Select label="Продукт" {...register('itemId', { required: true, disabled: !!productOrder })}>
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
          required: 'Необходимо ввести количество',
          disabled: !!productOrder
        })}
      />
      {!!productOrder && (
        <Select label="Статус" {...register('status', { required: !!productOrder })}>
          {Object.entries(PRODUCT_ORDER_STATUS_VALUES).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </Select>
      )}
      <Button type="submit">{productOrder ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
    </Form>
  );
};
