import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Select, Title } from '../../ui';
import { IMaterialOrder } from '../../../interfaces';
import { MaterialOrderFormProps } from './material-order-form.types';
import { materialOrderService } from '../../../services/material-order';
import { productOrderService } from '../../../services/product-order';
import { materialService } from '../../../services/material';
import { userService } from '../../../services/user';

export const MaterialOrderForm: FC<MaterialOrderFormProps> = ({ materialOrder, hideModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const availableMaterials = materialService.materials$.filter(
    (material) => material.type.toString() === userService.user$?.role.toString()
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Omit<IMaterialOrder, 'id'>>({
    defaultValues: {
      productOrderId: materialOrder?.productOrderId || productOrderService.productOrders$?.[0]?.id,
      itemId: materialOrder?.itemId || availableMaterials?.[0]?.id,
      quantity: materialOrder?.quantity || 100,
      done: materialOrder?.done
    }
  });

  const onSubmit = (data: Omit<IMaterialOrder, 'id'>) => {
    setIsLoading(true);
    materialOrder
      ? materialOrderService
          .updateMaterialOrder(materialOrder.id, data.done)
          .then(hideModal)
          .finally(() => setIsLoading(false))
      : materialOrderService
          .addMaterialOrder({ ...data, employeeId: userService.user$?.id as number })
          .then(hideModal)
          .finally(() => setIsLoading(false));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <Loader />}
      <Title>Заказ ТМЦ</Title>
      <Select
        label="Для"
        {...register('productOrderId', { required: true, disabled: !!materialOrder })}
      >
        {productOrderService.productOrders$.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Select>
      <Select
        label="Материал"
        {...register('itemId', { required: true, disabled: !!materialOrder })}
      >
        {availableMaterials.map(({ id, name }) => (
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
          disabled: !!materialOrder
        })}
      />
      {!!materialOrder && (
        <Select label="Статус" {...register('done', { required: !!materialOrder })}>
          <option value={'false'}>В обработке</option>
          <option value={'true'}>Завершено</option>
        </Select>
      )}
      <Button type="submit">{materialOrder ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
    </Form>
  );
};
