import { Link } from './navbar.types';
import { RouteNames } from '../router/router.types';

export const NAVBAR_LINKS: Link[] = [
  { name: 'Профиль', link: RouteNames.PROFILE },
  { name: 'Работники', link: RouteNames.EMPLOYEES },
  { name: 'Продукты', link: RouteNames.PRODUCTS },
  { name: 'Производственные заказы', link: RouteNames.PRODUCT_ORDERS },
  { name: 'Материалы', link: RouteNames.MATERIALS },
  { name: 'Заказы ТМЦ', link: RouteNames.MATERIAL_ORDERS }
];
