export interface IOperation {
  id: number;
  name: OperationNameEnum;
}

export enum OperationNameEnum {
  ASSEMBLY = 'ASSEMBLY',
  PAINTING = 'PAINTING'
}
