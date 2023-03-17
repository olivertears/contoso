import { IItem } from '../../../interfaces';
import { ICell } from '../../templates';

export const productTableAdapter = (products: IItem[]): ICell[] =>
  products.map((product) => ({
    id: product.id,
    data: [product.id.toString(), product.name]
  }));
