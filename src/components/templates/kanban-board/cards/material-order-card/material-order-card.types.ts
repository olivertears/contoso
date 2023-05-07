import { IMaterialOrder } from '../../../../../interfaces';

export interface MaterialOrderCardProps {
  order: IMaterialOrder;
  index: number;
  archive?: (id: number) => void;
}
