import { Dispatch, SetStateAction } from 'react';
import { Link } from '../navbar.types';

export interface StoreDropdownProps {
  isStoreDropdownOpen: boolean;
  setIsStoreDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

export interface StoreDropdownLink extends Link {
  children: Link[];
}
