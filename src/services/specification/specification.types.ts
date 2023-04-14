import { ISpecification } from '../../interfaces';
import { SpecificationData, SpecificationDetails } from '../../api/specification';

export interface ISpecificationService {
  specifications$: ISpecification[];
  specificationDetails$: SpecificationDetails | null;
  addSpecification: (addSpecificationData: Omit<SpecificationData, 'id'>) => void;
  getSpecifications: () => void;
  getSpecificationDetails: (id: number) => void;
  updateSpecification: (updateSpecificationData: SpecificationData) => void;
}
