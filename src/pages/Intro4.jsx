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

const Intro4 = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/login"); 
  };
    
  const handlePreviousPage = () => {
    navigate("/intro/3"); 
  };

  return (
    <Container>
        <Wrapper>
        <Number>4.</Number>
        <Title>AI가 남겨주는 <br/> 면접 피드백 </Title>
        </Wrapper>
          <Subtitle>AI가 남겨주는 면접에 대한 <br />총평 , 텍스트 스크립트 피드백, <br/> 발음 점수를 확인해보세요.</Subtitle>
        
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

export default Intro4;
