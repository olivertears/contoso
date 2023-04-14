import styled from 'styled-components';

export const Wrap = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  min-width: 200px;
`;

export const Table = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, auto)`};
  width: 100%;
  overflow: auto;
`;

export const BodyCell = styled.div`
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dadada;
  color: #1d1d1f;
  white-space: nowrap;
`;

export const HeaderCell = styled(BodyCell)`
  background-color: #434344;
  color: #fff;
`;
