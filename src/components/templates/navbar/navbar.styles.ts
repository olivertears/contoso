import styled from 'styled-components';
import { Link } from '../../ui';

export const Wrap = styled.div`
  width: 100%;
`;

export const Navbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #1d1d1f;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const StyledLink = styled(Link)`
  line-height: 20px;
  padding: 15px;
`;
