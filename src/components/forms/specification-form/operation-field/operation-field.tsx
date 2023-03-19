import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { OPERATION_NAME_VALUES } from '../../../../constants';
import { Header, Input, Row, Select, Svg } from '../../../ui';
import { DeleteIcon } from '../../../ui/icons';
import { SpecificationData } from '../../../../api';
import { OperationFieldProps } from './operation-field.types';

export const OperationField: FC<OperationFieldProps> = ({ remove, index }) => {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext<SpecificationData>();

  return (
    <Row>
      <Header>{index + 1}</Header>
      <Select label="Операция" {...register(`operations.${index}.name`)}>
        {Object.entries(OPERATION_NAME_VALUES).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </Select>
      <Input
        label="Время (мин)"
        type="number"
        value={watch(`operations.${index}.time`)}
        error={
          errors.operations && errors.operations[index] && errors.operations[index]?.time?.message
        }
        {...register(`operations.${index}.time`, {
          required: { value: true, message: 'Необходимо ввести количество' }
        })}
      />
      <DeleteIcon Svg={Svg} onClick={() => watch(`operations`).length > 1 && remove(index)} />
    </Row>
  );
};
