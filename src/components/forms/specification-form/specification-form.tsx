import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Select, Title } from '../../ui';
import { AddIcon } from '../../ui/icons';
import { SpecificationFormProps } from './specification-form.types';
import { MaterialField } from './material-field';
import { OperationField } from './operation-field';
import { NEW_MATERIAL, NEW_OPERATION } from './specification-form.constants';
import { useFieldArr } from '../../../hooks';
import { specificationService } from '../../../services/specification';
import { productService } from '../../../services/product';
import { ISpecification } from '../../../interfaces';
import { getDate } from '../../../utils';

export const SpecificationForm: FC<SpecificationFormProps> = ({ specification, hideModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<ISpecification>({
    defaultValues: {
      name: specification?.name || '',
      itemId: specification?.itemId || productService.products$?.[0]?.id,
      startDate: specification?.startDate || getDate(),
      endDate: specification?.endDate || '',
      active: specification ? specification.active : true,
      materials: specification?.materials || [NEW_MATERIAL],
      operations: specification?.operations || [NEW_OPERATION]
    }
  });

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = methods;

  const [materials, appendMaterial, removeMaterial] = useFieldArr(control, 'materials');
  const [operations, appendOperation, removeOperation] = useFieldArr(control, 'operations');

  const onSubmit = (data: ISpecification) => {
    setIsLoading(true);
    specification
      ? specificationService
          .updateSpecification(specification.id, specification.itemId, data.active)
          .then(hideModal)
          .finally(() => setIsLoading(false))
      : specificationService
          .addSpecification({
            ...data,
            operations: data.operations.map((operation, id) => ({ ...operation, queue: id + 1 }))
          })
          .then(hideModal)
          .finally(() => setIsLoading(false));
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <Loader />}
        <Title>Спецификация</Title>
        <Input
          label="Название"
          value={watch('name')}
          error={errors.name?.message}
          {...register('name', {
            required: 'Необходимо ввести название',
            disabled: !!specification
          })}
        />
        <Select
          label="Продукт"
          {...register('itemId', { valueAsNumber: true, disabled: !!specification })}
        >
          {productService.products$.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
        <Input
          label="От"
          type="date"
          value={' '}
          min={getDate()}
          max={watch('endDate')}
          error={errors.startDate?.message}
          {...register('startDate', {
            required: 'Необходимо ввести дату начала действия спецификации',
            disabled: !!specification
          })}
        />
        <Input
          label="До"
          type="date"
          value={' '}
          min={watch('startDate')}
          error={errors.endDate?.message}
          {...register('endDate', {
            required: 'Необходимо ввести дату окончания действия спецификации',
            disabled: !!specification
          })}
        />
        <Select label="Статус" {...register('active', { required: true })}>
          <option value={'true'}>Действительна</option>
          <option value={'false'}>Недействительна</option>
        </Select>

        <Title>Материалы</Title>
        {materials.map((material, index) => (
          <MaterialField
            key={material.id}
            remove={removeMaterial}
            index={index}
            isUpdate={!!specification}
          />
        ))}
        {!specification && <AddIcon onClick={() => appendMaterial(NEW_MATERIAL)} />}

        <Title>Операции</Title>
        {operations.map((operation, index) => (
          <OperationField
            key={operation.id}
            remove={removeOperation}
            index={index}
            isUpdate={!!specification}
          />
        ))}
        {!specification && <AddIcon onClick={() => appendOperation(NEW_OPERATION)} />}
        <Button type="submit">{specification ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
      </Form>
    </FormProvider>
  );
};
