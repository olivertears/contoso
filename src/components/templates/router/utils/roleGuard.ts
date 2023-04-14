import { userService } from '../../../../services/user';
import { RouteNames } from '../router.types';

export const roleGuard = (role: string) => () =>
  userService.user$?.role.includes(role) ? '' : RouteNames.NOT_FOUND;
