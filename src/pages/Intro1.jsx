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

const Subtitle = styled.p`
  font-size: 1rem;
  color: black;
  text-align: left;
  padding: 10px;
  margin: 20px;
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

    &:hover {
        color:#000;
    }
`;

const Intro1 = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/intro/2"); // Intro2 페이지로 이동
  };
    
  const handlePreviousPage = () => {
    navigate("/"); // 메인 페이지로 이동
  };

  return (
    <Container>
        <Wrapper>
        <Number>1.</Number>
        <Title>지원서 기반 <br/> 면접 예상질문 제공</Title>
        </Wrapper>
          <Subtitle>지원서 및 이력서를 입력하고 <br /> AI가 제공하는 예상 면접 질문을 받아가세요!</Subtitle>
        
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

export default Intro1;
