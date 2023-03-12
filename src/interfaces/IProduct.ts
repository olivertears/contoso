export interface IProduct {
  id: string;
  price: number;
  brand: string;
  name: string;
  type: ProductType;
  description?: string;
  color: string;
  originCountry: string;
  amount: number;
  averageRate: number;
}

export type ProductType = 'Mac' | 'iPad' | 'iPhone' | 'Watch' | 'AirPods';
