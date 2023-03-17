import { IItem } from '../../../interfaces';
import { ICell } from '../../templates';
import { MATERIAL_TYPE_VALUES } from '../../../constants';

export const materialTableAdapter = (materials: IItem[]): ICell[] =>
  materials.map((material) => ({
    id: material.id,
    data: [material.id.toString(), material.name, MATERIAL_TYPE_VALUES[material.type]]
  }));
