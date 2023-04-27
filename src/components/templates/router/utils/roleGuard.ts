import { userService } from '../../../../services/user';
import { RouteNames } from '../router.types';
import { EmployeeRoleEnum } from '../../../../interfaces';

export const roleGuard = (roles: EmployeeRoleEnum[]) => () =>
  !userService.user$ || !roles.includes(userService.user$.role) ? RouteNames.NOT_FOUND : '';
