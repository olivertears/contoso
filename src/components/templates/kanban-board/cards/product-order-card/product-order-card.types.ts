import { IProductOrder } from '../../../../../interfaces';

export interface ProductOrderCardProps {
  order: IProductOrder;
  index: number;
  archive?: (id: number) => void;
}
