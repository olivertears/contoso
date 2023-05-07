import styled from 'styled-components';

export const PageWrap = styled.div<{ padding?: string; alignItems?: string }>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => padding || '30px 50px'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  gap: 20px;
`;
