import { action, makeObservable, observable } from 'mobx';
import { specificationApi } from '../../api/specification';
import { ISpecification } from '../../interfaces';
import { ISpecificationService } from './specification.types';

class SpecificationService implements ISpecificationService {
  specifications$: ISpecification[] = [];

  constructor() {
    makeObservable(this, {
      specifications$: observable,
      setSpecifications: action
    });
  }

  setSpecifications(specifications: ISpecification[]) {
    this.specifications$ = specifications;
  }

  async addSpecification(addSpecificationData: Omit<ISpecification, 'id'>) {
    const { data } = await specificationApi.addSpecification(addSpecificationData);
    this.setSpecifications([
      data,
      ...this.specifications$.map((specification) =>
        data.active && specification.itemId === data.itemId && specification.active
          ? { ...specification, active: false }
          : specification
      )
    ]);
  }

  async getSpecifications() {
    const { data } = await specificationApi.getSpecifications();
    this.setSpecifications(data);
  }

  async updateSpecification(id: number, productId: number, active: boolean) {
    const { data } = await specificationApi.updateSpecification({ id, productId, active });
    this.setSpecifications(
      this.specifications$.map((specification) => {
        if (specification.id === id) {
          return data;
        }

        return active && specification.itemId === productId && specification.active
          ? { ...specification, active: false }
          : specification;
      })
    );
  }
}

export const specificationService = new SpecificationService();
