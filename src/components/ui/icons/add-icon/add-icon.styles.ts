import styled from 'styled-components';

export const Svg = styled.svg<{ width?: string; margin?: string }>`
  fill: none;
  stroke: #434344;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  height: ${({ width }) => (width ? width : '20px')};
  width: ${({ width }) => (width ? width : '20px')};
  cursor: pointer;
  margin: ${({ margin }) => (margin ? margin : '0 auto')};
`;
