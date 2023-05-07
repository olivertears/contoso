import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Select, Title } from '../../ui';
import { IMaterialOrder } from '../../../interfaces';
import { MaterialOrderFormProps } from './material-order-form.types';
import { materialOrderService } from '../../../services/material-order';
import { productOrderService } from '../../../services/product-order';
import { materialService } from '../../../services/material';
import { userService } from '../../../services/user';
import { observer } from 'mobx-react-lite';

export const MaterialOrderForm: FC<MaterialOrderFormProps> = observer(({ hideModal }) => {
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
      productOrderId: productOrderService.productOrders$?.[0]?.id,
      itemId: availableMaterials?.[0]?.id,
      quantity: 100
    }
  });

  const onSubmit = (data: Omit<IMaterialOrder, 'id'>) => {
    setIsLoading(true);
    materialOrderService
      .addMaterialOrder({ ...data, employeeId: userService.user$?.id as number })
      .then(hideModal)
      .finally(() => setIsLoading(false));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <Loader />}
      <Title>Заказ ТМЦ</Title>
      <Select label="Для" {...register('productOrderId', { required: true })}>
        {productOrderService.productOrders$.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Select>
      <Select label="Материал" {...register('itemId', { required: true })}>
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
          required: 'Необходимо ввести количество'
        })}
      />
      <Button type="submit">ДОБАВИТЬ</Button>
    </Form>
  );
});
