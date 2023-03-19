import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import * as S from './navbar.styles';
import { NAVBAR_LINKS } from './navbar.constants';
import { employeeService } from '../../../services/employee';
import { RouteNames } from '../router/router.types';

export const Navbar: FC = () => {
  const logout = () => {
    employeeService.setEmployee(null);
  };

  return (
    <>
      <S.Navbar>
        {NAVBAR_LINKS[employeeService.employee$ ? employeeService.employee$.role : 'COMMON'].map(
          ({ name, link }) => (
            <S.StyledLink key={name} to={link}>
              {name}
            </S.StyledLink>
          )
        )}
        <S.StyledLink to={RouteNames.AUTHORIZATION} onClick={logout}>
          Выйти
        </S.StyledLink>
      </S.Navbar>
      <Outlet />
    </>
  );
};
