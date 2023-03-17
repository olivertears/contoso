import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { IItem } from '../../../../interfaces';
import { Input, Row, Select, Svg } from '../../../ui';
import { DeleteIcon } from '../../../ui/icons';
import { SpecificationData } from '../../../../api';
import { SpecificationMaterialFieldProps } from './material-field.types';

export const MaterialField: FC<SpecificationMaterialFieldProps> = ({ remove, index }) => {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext<SpecificationData>();

  return (
    <Row>
      <Select label="Материал" {...register(`materials.${index}.itemId` as const)}>
        {([] as IItem[]).map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Select>
      <Input
        label="Количество"
        type="number"
        value={watch(`materials.${index}.quantity`)}
        error={
          errors.materials && errors?.materials[index] && errors.materials[index]?.quantity?.message
        }
        {...register(`materials.${index}.quantity` as const, {
          required: { value: true, message: 'Необходимо ввести количество' }
        })}
      />
      <DeleteIcon Svg={Svg} onClick={() => watch(`materials`).length > 1 && remove(index)} />
    </Row>
  );
};
