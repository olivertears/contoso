import { action, makeObservable, observable } from 'mobx';
import { materialOrderApi } from '../../api/material-order';
import { IMaterialOrder, OrderStatus } from '../../interfaces';
import { IMaterialOrderService } from './material-order.types';

class MaterialOrderService implements IMaterialOrderService {
  materialOrders$: IMaterialOrder[] = [];

  constructor() {
    makeObservable(this, {
      materialOrders$: observable,
      setMaterialOrders: action
    });
  }

  setMaterialOrders(materialOrders: IMaterialOrder[]) {
    this.materialOrders$ = materialOrders;
  }

  async addMaterialOrder(addMaterialOrderData: Omit<IMaterialOrder, 'id'>) {
    const { data } = await materialOrderApi.addMaterialOrder(addMaterialOrderData);
    this.setMaterialOrders([data, ...this.materialOrders$]);
  }

  async getMaterialOrders() {
    const { data } = await materialOrderApi.getMaterialOrders();
    this.setMaterialOrders(data);
  }

  async updateMaterialOrder(id: number, status: OrderStatus) {
    const { data } = await materialOrderApi.updateMaterialOrder({ id, status });
    this.setMaterialOrders(this.materialOrders$.map((item) => (item.id === id ? data : item)));
  }
}

export const materialOrderService = new MaterialOrderService();
