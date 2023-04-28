import { action, makeObservable, observable } from 'mobx';
import { productOrderApi } from '../../api/product-order';
import { IProductOrder, ProductOrderStatusEnum } from '../../interfaces';
import { IProductOrderService } from './product-order.types';

class ProductOrderService implements IProductOrderService {
  productOrders$: IProductOrder[] = [];

  constructor() {
    makeObservable(this, {
      productOrders$: observable,
      setProductOrders: action
    });
  }

  setProductOrders(productOrders: IProductOrder[]) {
    this.productOrders$ = productOrders;
  }

  async addProductOrder(addProductOrderData: Omit<IProductOrder, 'id'>) {
    const { data } = await productOrderApi.addProductOrder(addProductOrderData);
    this.setProductOrders([data, ...this.productOrders$]);
  }

  async getProductOrders() {
    const { data } = await productOrderApi.getProductOrders();
    this.setProductOrders(data);
  }

  async updateProductOrder(id: number, status: ProductOrderStatusEnum) {
    const { data } = await productOrderApi.updateProductOrder({ id, status });
    this.setProductOrders(this.productOrders$.map((item) => (item.id === id ? data : item)));
  }
}

export const productOrderService = new ProductOrderService();
