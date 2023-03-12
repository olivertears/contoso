import { FC, useState } from 'react';
import * as S from './store-dropdown.styles';
import { StoreDropdownProps } from './store-dropdown.types';
import { STORE_DROPDOWN_LINKS } from './store-dropdown.constants';
import { Link } from '../../../ui';

export const StoreDropdown: FC<StoreDropdownProps> = ({
  isStoreDropdownOpen,
  setIsStoreDropdownOpen
}) => {
  const [sectionName, setSectionName] = useState('');
  const SELECTED_SECTION = STORE_DROPDOWN_LINKS.find((section) => section.name === sectionName);

  return (
    <S.StoreDropdown
      isOpen={isStoreDropdownOpen}
      onMouseOver={() => setIsStoreDropdownOpen(true)}
      onMouseLeave={() => {
        setIsStoreDropdownOpen(false);
        setSectionName('');
      }}
    >
      <S.SectionColumn>
        {STORE_DROPDOWN_LINKS.map(({ name, link }) => (
          <S.StyledLink key={name} to={link} onMouseOver={() => setSectionName(name)}>
            {name}
          </S.StyledLink>
        ))}
      </S.SectionColumn>
      <S.ListColumn>
        {SELECTED_SECTION?.children.map(({ name, link }) => (
          <Link key={name} to={link}>
            {name}
          </Link>
        ))}
      </S.ListColumn>
      <S.SectionColumn></S.SectionColumn>
    </S.StoreDropdown>
  );
};
