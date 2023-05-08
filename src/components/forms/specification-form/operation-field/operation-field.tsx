import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { OPERATION_NAME_VALUES } from '../../../../constants';
import { Header, Input, Row, Select } from '../../../ui';
import { DeleteIcon } from '../../../ui/icons';
import { OperationFieldProps } from './operation-field.types';
import { ISpecification, OperationEnum } from '../../../../interfaces';

export const OperationField: FC<OperationFieldProps> = ({ remove, index, availableOperations }) => {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext<ISpecification>();

  return (
    <Row>
      <Header>{index + 1}</Header>
      <Select label="Операция" {...register(`operations.${index}.name`)}>
        {Object.entries(OPERATION_NAME_VALUES)
          .filter(
            ([key]) =>
              availableOperations.includes(key as OperationEnum) ||
              watch(`operations.${index}`).name === key
          )
          .map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
      </Select>
      <Input
        label="Время (мин / 100 шт.)"
        type="number"
        value={watch(`operations.${index}.time`)}
        error={errors.operations?.[index]?.time?.message}
        {...register(`operations.${index}.time`, {
          required: { value: true, message: 'Необходимо ввести количество' },
          valueAsNumber: true
        })}
      />
      {watch(`operations`).length > 1 && <DeleteIcon onClick={() => remove(index)} />}
    </Row>
  );
};
