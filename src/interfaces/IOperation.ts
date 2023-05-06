export interface IOperation {
  queue: number;
  time: number;
  name: OperationEnum;
}

export enum OperationEnum {
  ASSEMBLY = 'ASSEMBLY',
  PAINTING = 'PAINTING',
  PACKAGING = 'PACKAGING'
}
