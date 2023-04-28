import { ISpecification } from '../../../interfaces';
import { SPECIFICATION_STATUS_VALUES } from '../../../constants';
import { ICell } from '../../templates/table';
import { productService } from '../../../services/product';

export const specificationTableAdapter = (specifications: ISpecification[]): ICell[] =>
  specifications.map((specification) => ({
    id: specification.id,
    data: [
      specification.id.toString(),
      specification.name,
      productService.products$.find((product) => product.id === specification.itemId)?.name || '',
      specification.startDate,
      specification.endDate,
      SPECIFICATION_STATUS_VALUES[specification.active.toString()]
    ]
  }));
