import styled from 'styled-components';

export const Svg = styled.svg<{ width?: string; color?: string; hover?: string }>`
  width: ${({ width }) => (width ? width : '16px')};
  height: ${({ width }) => (width ? width : '16px')};
  fill: ${({ color }) => (color ? color : '#000')};
  transition: 0.5s ease-in-out all;
  z-index: 1;

  :hover {
    cursor: ${({ hover }) => !!hover && 'pointer'};
    fill: ${({ hover }) => !!hover && hover};
  }
`;
