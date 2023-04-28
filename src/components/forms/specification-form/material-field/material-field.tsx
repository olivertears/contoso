import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { Input, Row, Select } from '../../../ui';
import { DeleteIcon } from '../../../ui/icons';
import { SpecificationMaterialFieldProps } from './material-field.types';
import { materialService } from '../../../../services/material';
import { ISpecification } from '../../../../interfaces';

export const MaterialField: FC<SpecificationMaterialFieldProps> = ({ remove, index, isUpdate }) => {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext<ISpecification>();

  return (
    <Row>
      <Select
        label="Материал"
        {...register(`materials.${index}.itemId` as const, {
          valueAsNumber: true,
          disabled: isUpdate
        })}
      >
        {materialService.materials$.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Select>
      <Input
        label="Количество"
        type="number"
        value={watch(`materials.${index}.quantity`)}
        error={errors.materials?.[index]?.quantity?.message}
        {...register(`materials.${index}.quantity` as const, {
          required: { value: true, message: 'Необходимо ввести количество' },
          valueAsNumber: true,
          disabled: isUpdate
        })}
      />
      {!isUpdate && <DeleteIcon onClick={() => watch(`materials`).length > 1 && remove(index)} />}
    </Row>
  );
};
