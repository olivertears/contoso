import styled from 'styled-components';
import { Link } from '../../../ui';

export const StoreDropdown = styled.div<{ isOpen: boolean }>`
  width: 100%;
  padding: 75px;
  background-color: #1d1d1f;
  position: absolute;
  top: 0;
  transform: ${({ isOpen }) => `translateY(${isOpen ? 0 : '-100%'})`};
  transition: 0.5s ease-in-out all;
  justify-content: center;
  display: flex;
`;

export const SectionColumn = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #dadada;
  transition: 0.5s ease-in-out color;
`;

export const ListColumn = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: #dadada;
  transition: 0.5s ease-in-out color;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
`;
