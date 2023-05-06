import styled from 'styled-components';
import { Header } from '../../ui';

export const ColumnWrap = styled.div`
  display: flex;
  gap: 30px;
`;

export const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #dadadada;
  width: 300px;
  border-radius: 5px;
  padding: 55px 15px 15px;
  gap: 15px;
`;

export const ColumnTitle = styled(Header)`
  position: absolute;
  top: 10px;
`;
