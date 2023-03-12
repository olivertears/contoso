import styled from 'styled-components';

export const Button = styled.button`
  background: #0071e3;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 5px;
  color: #fff;
  width: 100%;
  max-width: 300px;
  min-width: 150px;

  :hover {
    cursor: pointer;
    background: #0080e3;
    box-shadow: inset 0 0 20px #0071e3;
  }
`;
