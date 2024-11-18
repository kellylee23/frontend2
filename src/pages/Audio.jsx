import React, { useEffect, useState }from "react";
import styled from "styled-components";
import { Container} from "../components/PageLayout";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import Play from "../img/Play.png"
import Stop from "../img/Stop.png"

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 29px;
`

const Time = styled.div`
  text-align: center;
  font-family: "Noto Sans";
  font-size: 24px;
  font-weight: 600;
  align-self: stretch;
  margin-top: 150px;
`
const Button = styled.div`
  width: 110px;
  height: 110px;
  .img{
    width: 110px;
    height: 110px;
    object-fit: contain;
  }
`
const Text = styled.div`
  text-align: center;
  font-family: "Noto Sans";
  font-size: 20px;
  font-weight: 500;
`

const Question = styled.div`
  color: #3A00F9;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 20px;
  font-weight: 500;
  margin-top: 130px;
`

const Audio = () => {
    const navigate = useNavigate();
    
    const handleBackClick = () => {
        navigate(-1);
    };
    const [isRecording, setIsRecording] = useState(false);
    const [remainingQuestions, setRemainingQuestions] = useState(5);
    const [seconds, setSeconds] = useState(15 * 60);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const handleRecordClick = () => {
        setIsRecording(!isRecording)
        if (isRecording) {
            setRemainingQuestions(prev => {
                const newCount = prev - 1;
                if (newCount <= 0) {
                    navigate('/interview-summary');
                }
                return newCount;
            });
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    navigate('/interview-summary');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [navigate]);

    return (
        <Container>
            <Header title="음성 면접" onBackClick={handleBackClick}/>
            <Contents>
            <Time>진행 시간 {formatTime(seconds)}</Time>
                <Button onClick={handleRecordClick}>
                    <img src={isRecording ? Stop : Play} alt={isRecording ? "stop" : "play"}/>
                </Button>
                <Text>
                    {isRecording ? (<>녹음 완료하기<br/>(다음 질문)</>
                    ) : (<>녹음 시작하기<br/>(답변 시작)</>)}
                </Text>
                <Question>남은 질문 개수: {remainingQuestions}개</Question>
            </Contents>
        </Container>
    );
};

export default Audio;