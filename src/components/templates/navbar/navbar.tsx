import { FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import * as S from './navbar.styles';
import { NAVBAR_LINKS } from './navbar.constants';
import { RouteNames } from '../router/router.types';
import { userService } from '../../../services/user';
import { observer } from 'mobx-react-lite';

export const Navbar: FC = observer(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <S.Navbar>
        {NAVBAR_LINKS.map(({ name, link }) => (
          <S.StyledLink key={name} to={link} active={pathname === link}>
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
});
