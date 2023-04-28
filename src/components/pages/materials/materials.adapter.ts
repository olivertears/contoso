import { IItem, ItemTypeEnum } from '../../../interfaces';
import { ICell } from '../../templates/table';
import { MATERIAL_TYPE_VALUES } from '../../../constants';

export const materialTableAdapter = (materials: IItem[]): ICell[] =>
  materials.map((material) => ({
    id: material.id,
    data: [
      material.id.toString(),
      material.name,
      material.type !== ItemTypeEnum.PRODUCT ? MATERIAL_TYPE_VALUES[material.type] : ''
    ]
  }));
