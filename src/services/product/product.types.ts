import { IItem } from '../../interfaces';

export interface IProductService {
  products$: IItem[];
  addProduct: (name: string) => void;
  getProducts: () => void;
  updateProduct: (updateProductData: Omit<IItem, 'type'>) => void;
}
