import styled from 'styled-components';

export const SpecificationItem = styled.div`
  padding: 20px 30px;
  background-color: #f5f5f5;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SpecificationHeader = styled.div`
  width: 100%;
  display: flex;
`;

export const IconWrap = styled.div<{ top: string }>`
  position: absolute;
  right: ${({ top }) => top};
  display: flex;
  gap: 10px;
`;

export const ActiveText = styled.div`
  color: #aeaeae;
`;

export const SpecificationInfo = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
