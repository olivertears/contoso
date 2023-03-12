import { Link } from './navbar.types';
import { RouteNames } from '../../router/router.types';

export const NAVBAR_USER_LINKS: Link[] = [
  { name: 'Store', link: RouteNames.STORE },
  { name: 'Profile', link: RouteNames.PROFILE },
  { name: 'Favorites', link: RouteNames.FAVORITES },
  { name: 'Cart', link: RouteNames.CART },
  { name: 'Orders', link: RouteNames.ORDERS }
];

export const NAVBAR_COMMON_LINKS: Link[] = [
  { name: 'Store', link: RouteNames.STORE },
  { name: 'Sign In', link: RouteNames.AUTH }
];
