import styled from "styled-components";

const InfoBoxWrapper = styled.div`
  width: 318px;
  height: 151px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #F2F2F2;
  border-radius: 12px;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #1B1B1B;
`

export const BoldText = styled.span`
  font-weight: 700;
`

export const InfoBox = ({ children }) => (
  <InfoBoxWrapper>{children}</InfoBoxWrapper>
);