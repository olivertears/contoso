import { IMaterialOrder } from '../../../interfaces';

export interface MaterialOrderFormProps {
  materialOrder?: IMaterialOrder;
  hideModal: () => void;
}
