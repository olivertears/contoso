import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Select, Title } from '../../ui';
import { IMaterialOrder } from '../../../interfaces';
import { MaterialOrderFormProps } from './material-order-form.types';
import { materialOrderService } from '../../../services/material-order';
import { productOrderService } from '../../../services/product-order';
import { materialService } from '../../../services/material';
import { userService } from '../../../services/user';
import { observer } from 'mobx-react-lite';
import { specificationService } from '../../../services/specification';

export const MaterialOrderForm: FC<MaterialOrderFormProps> = observer(({ hideModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  let availableMaterials = materialService.materials$.filter(
    (material) => material.type.toString() === userService.user$?.role.toString()
  );

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<Omit<IMaterialOrder, 'id'>>({
    defaultValues: {
      productOrderId: productOrderService.productOrders$?.[0]?.id,
      itemId: availableMaterials?.[0]?.id,
      quantity: 100
    }
  });

  const orderedItem = productOrderService.productOrders$.find(
    ({ id }) => id === +watch('productOrderId')
  );
  const specification = specificationService.specifications$.find(
    ({ itemId, active }) => itemId === orderedItem?.itemId && active
  );
  const amount =
    Number(specification?.materials.find(({ itemId }) => itemId === watch('itemId'))?.quantity) *
    Number(orderedItem?.quantity);

  availableMaterials = materialService.materials$.filter(
    (material) =>
      material.type.toString() === userService.user$?.role.toString() &&
      specification?.materials.map(({ itemId }) => itemId).includes(material.id)
  );

  useEffect(() => {
    setValue('quantity', amount);
  }, [amount]);

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
      <Select
        label="№ производственного заказа"
        {...register('productOrderId', { required: true })}
      >
        {productOrderService.productOrders$
          .filter(({ status }) => !['ARCHIVED', 'CANCELLED', 'DONE'].includes(status.toString()))
          .map(({ id }) => (
            <option key={id} value={id}>
              {id}
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
