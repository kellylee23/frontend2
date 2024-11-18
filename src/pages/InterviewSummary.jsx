import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Container, Content } from '../components/PageLayout';
import { Header } from '../components/Header';
import { TitleSection } from '../components/Interview/TitleSection';
import { InfoBox,BoldText } from '../components/Interview/InfoBox';

const EvaluationTitle = styled.div`
  color: #3A00F9;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 700;
`
const Descirption = styled.div`
  width: 330px;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 20px; 
`
const EvaluationContainer = styled.div`
  width: 297px;
  height: 278px;
  border-radius: 13px;
  border: 1px solid #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`
const InterviewSummary = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/interview');
    };

    return (
        <Container>
            <Header title="면접 종료" onBackClick={handleBackClick}/>
            <Content>
                <InfoBox>
                    <div>지원자님</div>
                    <div>면접 보시느라 고생 많으셨습니다</div>
                    <div>실제 면접에서도 좋은 결과</div>
                    <div>얻을 수 있으시길 바라겠습니다!</div>
                </InfoBox>
                <Descirption>
                    아래는 방금 진행한<br/>
                    면접에 대한 간단한 총평입니다.<br/>
                    <BoldText>마이페이지</BoldText>에서 더 자세한 평가를<br/>
                    확인할 수 있습니다.
                </Descirption>
                <EvaluationTitle>[총평]</EvaluationTitle>
                <EvaluationContainer>총평 내용</EvaluationContainer>
            </Content>
        </Container>
    );
};

export default InterviewSummary;