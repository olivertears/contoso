import { FC, useMemo, useState } from 'react';
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
import {
  IItem,
  IOperation,
  ISpecification,
  OperationEnum,
  SpecificationMaterialData
} from '../../../interfaces';
import { getDate } from '../../../utils';
import { materialService } from '../../../services/material';
import { observer } from 'mobx-react-lite';

export const SpecificationForm: FC<SpecificationFormProps> = observer(({ hideModal, product }) => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<ISpecification>({
    defaultValues: {
      name: '',
      itemId: product.id,
      startDate: getDate(),
      endDate: '',
      active: false,
      materials: [NEW_MATERIAL],
      operations: [NEW_OPERATION]
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
  const watchedMaterials = watch(`materials`);
  const controlledMaterials = materials.map((material, index) => ({
    ...material,
    ...watchedMaterials?.[index]
  }));
  const availableMaterials = useMemo(
    (): IItem[] =>
      materialService.materials$.filter(
        ({ id }) => !controlledMaterials.some(({ itemId }) => itemId === id)
      ),
    [controlledMaterials]
  );

  const [operations, appendOperation, removeOperation] = useFieldArr(control, 'operations');
  const watchedOperations = watch(`operations`);
  const controlledOperations = operations.map((operation, index) => ({
    ...operation,
    ...watchedOperations?.[index]
  }));
  const availableOperations = useMemo(
    (): OperationEnum[] =>
      Object.keys(OperationEnum).filter(
        (operation) => !controlledOperations.some(({ name }) => name === operation)
      ) as OperationEnum[],
    [controlledOperations]
  );

  const MATERIAL_DATA: SpecificationMaterialData = {
    itemId: availableMaterials[0]?.id,
    quantity: 1
  };

  const OPERATION_DATA: IOperation = {
    name: availableOperations[0],
    time: 5,
    queue: 1
  };

  const onSubmit = (data: ISpecification) => {
    setIsLoading(true);
    specificationService
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
            required: 'Необходимо ввести название'
          })}
        />
        <Select label="Продукт" {...register('itemId', { valueAsNumber: true })}>
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
            required: 'Необходимо ввести дату начала действия спецификации'
          })}
        />
        <Input
          label="До"
          type="date"
          value={' '}
          min={watch('startDate')}
          error={errors.endDate?.message}
          {...register('endDate', {
            required: 'Необходимо ввести дату окончания действия спецификации'
          })}
        />
        <Select label="Статус" {...register('active', { required: true })}>
          <option value={'true'}>Действительна</option>
          <option value={'false'}>Недействительна</option>
        </Select>

        <Title>Материалы</Title>
        {controlledMaterials.map((material, index) => (
          <MaterialField
            key={material.id}
            remove={removeMaterial}
            index={index}
            availableMaterials={availableMaterials}
          />
        ))}
        {!!availableMaterials.length && <AddIcon onClick={() => appendMaterial(MATERIAL_DATA)} />}

        <Title>Операции</Title>
        {controlledOperations.map((operation, index) => (
          <OperationField
            key={operation.id}
            remove={removeOperation}
            index={index}
            availableOperations={availableOperations}
          />
        ))}
        {!!availableOperations.length && (
          <AddIcon onClick={() => appendOperation(OPERATION_DATA)} />
        )}
        <Button type="submit"> ДОБАВИТЬ</Button>
      </Form>
    </FormProvider>
  );
});
