import { action, makeObservable, observable } from 'mobx';
import { specificationApi, SpecificationData, SpecificationDetails } from '../../api/specification';
import { ISpecification } from '../../interfaces';
import { ISpecificationService } from './specification.types';

class SpecificationService implements ISpecificationService {
  specifications$: ISpecification[] = [];
  specificationDetails$: SpecificationDetails | null = null;

  constructor() {
    makeObservable(this, {
      specifications$: observable,
      setSpecifications: action,
      specificationDetails$: observable,
      setSpecificationDetails: action
    });
  }

  setSpecifications(specifications: ISpecification[]) {
    this.specifications$ = specifications;
  }

  setSpecificationDetails(specificationDetails: SpecificationDetails | null) {
    this.specificationDetails$ = specificationDetails;
  }

  async addSpecification(addSpecificationData: Omit<SpecificationData, 'id'>) {
    const { data } = await specificationApi.addSpecification(addSpecificationData);
    this.setSpecifications([...this.specifications$, data]);
  }

  async getSpecifications() {
    const { data } = await specificationApi.getSpecifications();
    this.setSpecifications(data);
  }

  async getSpecificationDetails(id: number) {
    const { data } = await specificationApi.getSpecificationDetails(id);
    this.setSpecificationDetails(data);
  }

  async updateSpecification(updateSpecificationData: SpecificationData) {
    const { data } = await specificationApi.updateSpecification(updateSpecificationData);
    this.setSpecifications(
      this.specifications$.map((item) => (item.id === updateSpecificationData.id ? data : item))
    );
  }
}

export const specificationService = new SpecificationService();
