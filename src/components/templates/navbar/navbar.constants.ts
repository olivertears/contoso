import { Link } from './navbar.types';
import { RouteNames } from '../../router/router.types';
import { EmployeeRoleEnum } from '../../../interfaces/IEmployee';

export const NAVBAR_COMMON_LINKS: Link[] = [{ name: 'Sign In', link: RouteNames.SIGN_IN }];

export const NAVBAR_TECHNOLOGIST_LINKS: Link[] = [
  { name: 'Profiles', link: RouteNames.PROFILES },
  { name: 'Products', link: RouteNames.PRODUCTS },
  { name: 'Specifications', link: RouteNames.SPECIFICATIONS }
];

export const NAVBAR_DISPATCHER_LINKS: Link[] = [
  { name: 'Production orders', link: RouteNames.PRODUCTION_ORDERS }
];

export const NAVBAR_MASTER_LINKS: Link[] = [
  { name: 'Takeaway orders', link: RouteNames.TAKEAWAY_ORDERS },
  { name: 'Production orders', link: RouteNames.PRODUCTION_ORDERS }
];

export const NAVBAR_LINKS: { [key in EmployeeRoleEnum | 'COMMON']: Link[] } = {
  COMMON: NAVBAR_COMMON_LINKS,
  TECHNOLOGIST: NAVBAR_TECHNOLOGIST_LINKS,
  DISPATCHER: NAVBAR_DISPATCHER_LINKS,
  ASSEMBLY_MASTER: NAVBAR_MASTER_LINKS,
  PAINTING_MASTER: NAVBAR_MASTER_LINKS
};
