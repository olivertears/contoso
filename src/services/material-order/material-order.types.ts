import { IMaterialOrder } from '../../interfaces';

export interface IMaterialOrderService {
  materialOrders$: IMaterialOrder[];
  addMaterialOrder: (addMaterialOrderData: Omit<IMaterialOrder, 'id'>) => void;
  getMaterialOrders: () => void;
  updateMaterialOrder: (id: number, done: boolean) => void;
}
