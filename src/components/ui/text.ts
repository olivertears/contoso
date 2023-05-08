import styled from 'styled-components';

interface TextProps {
  type?: 'title' | 'header' | 'info' | 'text';
  bold?: boolean;
  color?: string;
  center?: boolean;
  width?: string;
  margin?: string;
}

export const Text = styled.div<TextProps>`
  font-size: ${({ type }) =>
    type === 'title'
      ? '32px'
      : type === 'header'
      ? '24px'
      : type === 'info'
      ? '20px'
      : type === 'text'
      ? '16px'
      : '14px'};
  font-weight: ${({ bold }) => bold && 'bold'};
  color: ${({ color }) => color};
  text-align: ${({ center }) => center && 'center'};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};

  b {
    font-size: ${({ type }) =>
      type === 'title'
        ? '32px'
        : type === 'header'
        ? '24px'
        : type === 'info'
        ? '20px'
        : type === 'text'
        ? '16px'
        : '14px'};
  }
`;
