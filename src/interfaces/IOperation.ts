export interface IOperation {
  queue: number;
  time: number;
  name: OperationNameEnum;
}

export enum OperationNameEnum {
  ASSEMBLY = 'ASSEMBLY',
  PAINTING = 'PAINTING'
}
