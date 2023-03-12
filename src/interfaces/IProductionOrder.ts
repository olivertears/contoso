export interface IProductionOrder {
  id: string;
  name: string;
  item_id: string;
  po_quantity: number;
  specification_id: string;
  status: ProductionOrderStatusType;
}

export type ProductionOrderStatusType = 'DONE';
