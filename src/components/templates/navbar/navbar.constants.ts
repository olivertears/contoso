import { Link } from './navbar.types';
import { RouteNames } from '../router/router.types';
import { EmployeeRoleEnum } from '../../../interfaces';

export const NAVBAR_ADMIN_LINKS: Link[] = [
  { name: 'Работники', link: RouteNames.EMPLOYEES },
  { name: 'Профиль', link: RouteNames.PROFILE }
];

export const NAVBAR_TECHNOLOGIST_LINKS: Link[] = [
  { name: 'Продукты', link: RouteNames.PRODUCTS },
  { name: 'Материалы', link: RouteNames.MATERIALS },
  { name: 'Спецификации', link: RouteNames.SPECIFICATIONS },
  { name: 'Профиль', link: RouteNames.PROFILE }
];

export const NAVBAR_DISPATCHER_LINKS: Link[] = [
  { name: 'Производственные заказы', link: RouteNames.PRODUCT_ORDERS },
  { name: 'Профиль', link: RouteNames.PROFILE }
];

export const NAVBAR_MASTER_LINKS: Link[] = [
  { name: 'Производственные заказы', link: RouteNames.PRODUCT_ORDERS },
  { name: 'Заказы ТМЦ', link: RouteNames.MATERIAL_ORDERS },
  { name: 'Профиль', link: RouteNames.PROFILE }
];

export const NAVBAR_LINKS: { [key in EmployeeRoleEnum]: Link[] } = {
  ADMIN: NAVBAR_ADMIN_LINKS,
  TECHNOLOGIST: NAVBAR_TECHNOLOGIST_LINKS,
  DISPATCHER: NAVBAR_DISPATCHER_LINKS,
  ASSEMBLY_MASTER: NAVBAR_MASTER_LINKS,
  PAINTING_MASTER: NAVBAR_MASTER_LINKS
};
