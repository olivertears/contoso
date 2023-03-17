import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IItem } from '../../../interfaces';
import { Button, Form, Input, Select, Title } from '../../ui';
import { AddIcon } from '../../ui/icons';
import { SpecificationData } from '../../../api';
import * as S from './specification-form.styles';
import { SpecificationFormProps } from './specification-form.types';
import { MaterialField } from './material-field';
import { OperationField } from './operation-field';
import { NEW_MATERIAL, NEW_OPERATION } from './specification-form.constants';
import { useFieldArr } from '../../../hooks';

export const SpecificationForm: FC<SpecificationFormProps> = ({ specification }) => {
  const methods = useForm<SpecificationData>({
    defaultValues: {
      name: specification?.name || '',
      itemId: specification?.itemId || 0,
      startDate: specification?.startDate || '',
      endDate: specification?.endDate || '',
      isActive: specification?.isActive || true,
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
  const [operations, appendOperation, removeOperation] = useFieldArr(control, 'operations');

  const onSubmit = (data: SpecificationData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Спецификация</Title>
        <Input
          label="Название"
          value={watch('name')}
          error={errors.name?.message}
          {...register('name', {
            required: { value: true, message: 'Необходимо ввести название' }
          })}
        />
        <Select label="Продукт" {...register('itemId')}>
          {([] as IItem[]).map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
        <Input
          label="От"
          type="date"
          value={' '}
          error={errors.startDate?.message}
          {...register('startDate', {
            required: { value: true, message: 'Необходимо ввести название' }
          })}
        />
        <Input
          label="До"
          type="date"
          value={' '}
          error={errors.endDate?.message}
          {...register('endDate', {
            required: { value: true, message: 'Необходимо ввести название' }
          })}
        />
        <Select label="Статус" {...register('isActive', { required: true })}>
          <option value={'true'}>Действительна</option>
          <option value={'false'}>Недействительна</option>
        </Select>

        <Title>Материалы</Title>
        {materials.map((material, index) => (
          <MaterialField key={material.id} remove={removeMaterial} index={index} />
        ))}
        <AddIcon Svg={S.IconButton} onClick={() => appendMaterial(NEW_MATERIAL)} />

        <Title>Операции</Title>
        {operations.map((operation, index) => (
          <OperationField key={operation.id} remove={removeOperation} index={index} />
        ))}
        <AddIcon Svg={S.IconButton} onClick={() => appendOperation(NEW_OPERATION)} />
        <Button type="submit">{specification ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
      </Form>
    </FormProvider>
  );
};
