import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import * as S from './navbar.styles';
import { NAVBAR_LINKS } from './navbar.constants';
import { employeeService } from '../../../services/employee';

export const Navbar: FC = () => {
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
      </S.Navbar>
      <Outlet />
    </>
  );
};
