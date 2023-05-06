import styled from 'styled-components';

export const ProductOrdersWrap = styled.div`
  display: flex;
  padding: 30px 50px;
  overflow-x: scroll;

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
