import styled from 'styled-components';

export const PageHeader = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  max-width: 960px;
  position: relative;

  div:first-child {
    flex-grow: 1;
  }

  div:nth-child(2) {
    position: absolute;
    top: 15px;
    right: 0;
    display: flex;
    gap: 10px;
  }
`;
