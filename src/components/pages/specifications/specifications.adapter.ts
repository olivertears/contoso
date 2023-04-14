import { IItem, ISpecification, ItemTypeEnum } from '../../../interfaces';
import { SPECIFICATION_STATUS_VALUES } from '../../../constants';
import { ICell } from '../../templates/table';

const PRODUCTS: IItem[] = [
  {
    id: 0,
    name: 'Карандаш',
    type: ItemTypeEnum.PRODUCT
  },
  {
    id: 1,
    name: 'Ручка',
    type: ItemTypeEnum.PRODUCT
  }
];

export const specificationTableAdapter = (specifications: ISpecification[]): ICell[] =>
  specifications.map((specification) => ({
    id: specification.id,
    data: [
      specification.id.toString(),
      specification.name,
      PRODUCTS.find((product) => product.id === specification.itemId)?.name || '',
      specification.startDate,
      specification.endDate,
      SPECIFICATION_STATUS_VALUES[specification.isActive.toString()]
    ]
  }));
