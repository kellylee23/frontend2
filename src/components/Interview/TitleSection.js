import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  margin-bottom: 24px;
  width: 100%;  
  padding-left: 30px;
`

const MainTitle = styled.div`
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  align-self: flex-start;  
`

const SubTitle = styled.div`
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 400;
  color: #666;
  line-height: 1.5;
  text-align: left;  
`

export const TitleSection = ({ title, subtitle }) => (
  <TitleWrapper>
    <MainTitle>{title}</MainTitle>
    <SubTitle>{subtitle}</SubTitle>
  </TitleWrapper>
);