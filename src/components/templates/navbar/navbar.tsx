import { FC, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import * as S from './navbar.styles';
import { RouteNames } from '../../router/router.types';
import { userService } from '../../../services/user';
import { NAVBAR_USER_LINKS, NAVBAR_COMMON_LINKS } from './navbar.constants';
import { AppleIcon } from '../../icons/apple-icon';
import { StoreDropdown } from './store-dropdown';

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);

  return (
    <S.Wrap>
      <S.Navbar>
        <AppleIcon
          width={'20px'}
          color={'#dadada'}
          hover={'#fff'}
          onClick={() => navigate(RouteNames.MENU)}
        />
        {(!!userService.user$ ? NAVBAR_USER_LINKS : NAVBAR_COMMON_LINKS).map(({ name, link }) => (
          <S.StyledLink
            key={name}
            to={link}
            onMouseOver={() => name === 'Store' && setIsStoreDropdownOpen(true)}
            onMouseLeave={() => name === 'Store' && setIsStoreDropdownOpen(false)}
          >
            {name}
          </S.StyledLink>
        ))}
      </S.Navbar>
      <StoreDropdown
        isStoreDropdownOpen={isStoreDropdownOpen}
        setIsStoreDropdownOpen={setIsStoreDropdownOpen}
      />
      <Outlet />
    </S.Wrap>
  );
};
