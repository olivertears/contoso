import { ISpecification } from '../../interfaces';

export interface ISpecificationService {
  specifications$: ISpecification[];
  addSpecification: (addSpecificationData: Omit<ISpecification, 'id'>) => void;
  getSpecifications: () => void;
  updateSpecification: (id: number, productId: number, active: boolean) => void;
}
