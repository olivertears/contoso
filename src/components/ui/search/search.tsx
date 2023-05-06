import { ChangeEventHandler, FC, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import * as S from './search.styles';
import { SearchProps } from './search.types';
import { SearchIcon } from '../icons';

export const Search: FC<SearchProps> = ({ setSearch }) => {
  const [value, setValue] = useState('');

  const debounceSearch = useCallback(
    debounce((search: string) => setSearch(search), 500),
    []
  );

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const search = event.target.value;
    setValue(search);
    debounceSearch(search);
  };

  return (
    <S.Wrap>
      <S.Input placeholder="Поиск..." value={value} onChange={onSearchChange} />
      <SearchIcon />
    </S.Wrap>
  );
};
