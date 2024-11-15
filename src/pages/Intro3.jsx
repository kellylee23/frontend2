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

    &: hover {
        color:#000;
    }
`;

const Intro3 = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/intro/4"); 
  };
    
  const handlePreviousPage = () => {
    navigate("/intro/2"); 
  };

  return (
    <Container>
        <Wrapper>
        <Number>3.</Number>
        <Title>다양한 옵션의 <br/> 면접 기능 </Title>
        </Wrapper>
          <Subtitle>화상 면접 or 음성 면접 <br />1:1 면접 or 1:3 면접 <br/> 4가지 옵션 중 원하는 <br/> 유형의 면접을 대비해보세요 !</Subtitle>
        
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

export default Intro3;
