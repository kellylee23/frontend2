import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LeftArrow, RightArrow } from "../img/ArrowIcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center; 
  gap: 30px; 
`;

const Number = styled.h1`
  font-size: 5rem;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  margin: 10px 0;
  text-align: left;
  line-height: 1.3; 
`;

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left; 
  margin-top: 20px;
`
const BoldSubtitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: black;
  text-align: left;
  padding: 10px 0;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: black;
  text-align: left;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center; 
  margin-top: 20px;
`;

const ImagePlaceholder = styled.div`
  width: 280px;
  height: 280px;
  background-color: #ddd;
  margin: 20px;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: #333;

  &:hover {
    color: #000;
  }
`;

const LeftArrowButton = styled.button`
    background:none;
    border:none;
    cursor: pointer;
    font-size: 2 rem;
    color: #333;

    &: hover {
        color:#000;
    }
`;

const Intro2 = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/intro/3"); 
  };
    
  const handlePreviousPage = () => {
    navigate("/intro"); 
  };

  return (
    <Container>
        <Wrapper>
            <Number>2.</Number>
            <Title>다양한 옵션의 <br/> 면접 질문 선택 </Title>
        </Wrapper>

        <SubtitleContainer>  
          <BoldSubtitle>기술 면접 선택:</BoldSubtitle>
          <Subtitle>이력서를 기반으로 <br /> 기술 면접 질문만 연습할 수 있어요</Subtitle>
          <BoldSubtitle>공통 면접 선택:</BoldSubtitle>
          <Subtitle>원하는 기업의 모집 공고를 <br /> url로 받아 공통 질문만 연습할 수 있어요</Subtitle>
          <BoldSubtitle>통합 면접 선택:</BoldSubtitle>
          <Subtitle>실제 면접처럼 <br /> 실전 면접을 준비해보세요</Subtitle>
        </SubtitleContainer>
          
        <RowContainer>
          <LeftArrowButton onClick={handlePreviousPage}>
              <LeftArrow />
          </LeftArrowButton> 
                <ImagePlaceholder /> 
          <ArrowButton onClick={handleNextPage}>
              <RightArrow/>
          </ArrowButton>
        </RowContainer>
    </Container>
  );
};

export default Intro2;
