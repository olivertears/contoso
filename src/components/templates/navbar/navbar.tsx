import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import * as S from './navbar.styles';
import { NAVBAR_LINKS } from './navbar.constants';
import { RouteNames } from '../router/router.types';
import { userService } from '../../../services/user';

export const Navbar: FC = () => {
  return (
    <>
      <S.Navbar>
        {userService.user$ &&
          NAVBAR_LINKS[userService.user$?.role].map(({ name, link }) => (
            <S.StyledLink key={name} to={link}>
              {name}
            </S.StyledLink>
          ))}
        <S.StyledLink to={RouteNames.AUTHORIZATION} onClick={userService.logout}>
          Выйти
        </S.StyledLink>
      </S.Navbar>
      <Outlet />
    </>
  );
};
