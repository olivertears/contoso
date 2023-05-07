import styled from 'styled-components';
import { Header } from '../../ui';

export const KanbanWrap = styled.div`
  display: flex;
  padding: 0 50px 30px;
  overflow-x: scroll;
  max-width: calc(100vw - 17px);
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #dadada;
    border-radius: 5px;

    :hover {
      background-color: #434344;
    }
  }
`;

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
