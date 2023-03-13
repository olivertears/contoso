import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(29, 29, 31, 0.5);
`;

export const Modal = styled.div`
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  text-align: center;
  position: relative;
  width: 360px;
  max-width: 100%;
  min-width: 210px;
`;

export const CloseButton = styled.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
