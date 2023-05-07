import { UseFieldArrayRemove } from 'react-hook-form';
import { IItem } from '../../../../interfaces';

export interface SpecificationMaterialFieldProps {
  index: number;
  remove: UseFieldArrayRemove;
  availableMaterials: IItem[];
}
