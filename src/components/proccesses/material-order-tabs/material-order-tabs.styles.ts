import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TabsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const StyledLink = styled(Link)<{ active?: boolean }>`
  font-size: 16px;
  font-weight: bold;
  color: ${({ active }) => (active ? '#1d1d1f' : '#434344')};
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  transition: 0.5s ease-in-out all;
  cursor: pointer;
`;
