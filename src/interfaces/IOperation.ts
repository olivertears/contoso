export interface IOperation {
  id: number;
  queue: number;
  time: number;
  name: OperationNameEnum;
}

export enum OperationNameEnum {
  ASSEMBLY = 'ASSEMBLY',
  PAINTING = 'PAINTING'
}
