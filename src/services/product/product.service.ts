import { action, makeObservable, observable } from 'mobx';
import { itemApi } from '../../api/item';
import { IItem, ItemTypeEnum } from '../../interfaces';
import { IProductService } from './product.types';

class ProductService implements IProductService {
  products$: IItem[] = [];

  constructor() {
    makeObservable(this, {
      products$: observable,
      setProducts: action
    });
  }

  setProducts(products: IItem[]) {
    this.products$ = products;
  }

  async addProduct(name: string) {
    const { data } = await itemApi.addItem({ name, type: ItemTypeEnum.PRODUCT });
    this.setProducts([...this.products$, data]);
  }

  async getProducts() {
    const { data } = await itemApi.getItems('PRODUCT');
    this.setProducts(data);
  }

  async updateProduct(updateProductData: Omit<IItem, 'type'>) {
    const { data } = await itemApi.updateItem({ ...updateProductData, type: ItemTypeEnum.PRODUCT });
    this.setProducts(
      this.products$.map((item) => (item.id === updateProductData.id ? data : item))
    );
  }
}

export const productService = new ProductService();
