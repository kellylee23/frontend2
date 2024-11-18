import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaChevronLeft } from "react-icons/fa";
import QuestionIcon from "../img/hugeicons_question.png"
import Technical from "../img/Development Skill.png"
import Common from "../img/Management.png"
import Intergrated from "../img/Workspace.png"

const Container = styled.div`
  width: 391px;
  min-height: 100vh;
  margin: 0 auto;
  background: white;
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  position: relative;
`

const BackButton = styled.button`
  position: absolute;
  left: 20px;
  background: none;
  border: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  z-index: 1;
`
const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Question = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 600;
  margin: 30px 0px;
  .png{
    width: 45px;
    height: 45px;
  }
`

const Title = styled.div`
  width: 100%;
  font-weight: 500;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 20px;
  font-weight: 600;
`
const OptionTitle = styled.div`
  color: #3A00F9;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0;
`
const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const OptionContainer = styled.div`
  width: 297px;
  height: 417px;
  border-radius: 13px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`
const Option = styled.div`
  width: 230px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  .png{
    width: 45px;
    height: 45px;
  }
`
const Optiontext= styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: rgba(0, 0, 0, 0.50);
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-weight: 500;
`

const OptionBtn = styled.button`
  width: 158px;
  height: 33px;
  border-radius: 30px;
  background: #3A00F9;
  color: #FFF;
  border: none;
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #2900b3;
  }
`

const MockInterview = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/main');
    };

    return (
        <Container>
        <Header>
          <BackButton onClick={handleBackClick}>
            <FaChevronLeft />
          </BackButton>
          <Title>모의 면접</Title>
        </Header>
        <QuestionContainer>
            <Question>
                <img src={QuestionIcon} alt="question_icon" />어떤 면접을<br/>진행하고 싶으신가요?
            </Question>
        </QuestionContainer>
        <Contents>
        <OptionTitle>[면접 형식 선택]</OptionTitle>
        <OptionContainer>
            <Option>
                <img src={Technical} alt="technical" />
                <Optiontext>
                    전문 지식과 기술 능력평가
                    <OptionBtn onClick={() => navigate('/interview/technical')}>
                        기술 면접 진행하기
                    </OptionBtn>
                </Optiontext>
            </Option>
            <Option>
                <img src={Common} alt="common" />
                <Optiontext>
                    공통 질문을 통한 일관된 평가
                    <OptionBtn onClick={() => navigate('/interview/common')}>
                        공통 면접 진행하기
                    </OptionBtn>
                </Optiontext>
            </Option>
            <Option>
                <img src={Intergrated} alt="intergrated" />
                <Optiontext>
                    기술 면접 + 공통 면접
                    <OptionBtn onClick={() => navigate('/interview/integrated')}>
                        통합 면접 진행하기
                    </OptionBtn>
                </Optiontext>
            </Option>
        </OptionContainer>
        </Contents>
      </Container>
    );
};

export default MockInterview;