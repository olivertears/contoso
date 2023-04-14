import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(29, 29, 31, 0.7);
  z-index: 2;
`;

export const Modal = styled.div`
  background-color: #fff;
  border-radius: 5px;
  max-width: calc(100vw - 60px);
  max-height: calc(100vh - 120px);
  overflow: auto;

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

export const ModalContent = styled.div`
  padding: 20px 30px 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: max-content;
`;
