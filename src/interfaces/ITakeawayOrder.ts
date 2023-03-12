export interface ITakeawayOrder {
  id: string;
  employee_id: string;
  production_order_id: string;
  status: TakeawayOrderStatusType;
}

export type TakeawayOrderStatusType = 'DONE';
