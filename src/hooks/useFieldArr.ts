import {
  ArrayPath,
  Control,
  FieldArrayWithId,
  FieldValues,
  useFieldArray,
  UseFieldArrayAppend,
  UseFieldArrayRemove
} from 'react-hook-form';

export const useFieldArr = <T extends FieldValues>(control: Control<T>, name: ArrayPath<T>) => {
  const { fields, append, remove } = useFieldArray<T, typeof name>({
    control,
    name
  });

  return [fields, append, remove] as [
    fields: FieldArrayWithId<T, typeof name>[],
    append: UseFieldArrayAppend<T, ArrayPath<T>>,
    remove: UseFieldArrayRemove
  ];
};
