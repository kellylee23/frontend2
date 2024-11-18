import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { Container} from "../components/PageLayout";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";

// padding 제거하기 위해 따로 설정
const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const User = styled.div`
  width: 339px;
  height: 550px;
  background: #D9D9D9;
  border-radius: 13px;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const RecordContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  gap: 15px;
`
const RecordStart = styled.div`
  width: 145px;
  height: 42px;
  border-radius: 30px;
  background: #2F0BFF;
  color: #FFF;
  font-family: "Noto Sans";
  font-size: 14px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const RecordStop = styled.div`
  width: 145px;
  height: 42px;
  border-radius: 30px;
  background: #D9D9D9;
  color: #3A00F9;
  font-family: "Noto Sans";
  font-size: 14px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Question = styled.div`
  color: #3A00F9;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 500;
  padding-top: 20px;
`
const Vedio = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };
    const [isRecording, setIsRecording] = useState(false);
    const [remainingQuestions, setRemainingQuestions] = useState(5);
    const [seconds, setSeconds] = useState(15 * 60);
    const [timerActive, setTimerActive] = useState(false);

    const formatTime = (timeInSeconds) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleRecordClick = () => {
    // 녹음 시작
    if (!isRecording) {
        setIsRecording(true);
        setTimerActive(true);
    } 
    // 녹음 종료
    else {
        setIsRecording(false);
        setTimerActive(false);
        setRemainingQuestions(prev => Math.max(0, prev - 1));
        
        // 모든 질문이 끝났을 때 면접 종료 페이지로 이동
        if (remainingQuestions <= 1) {
            navigate('/interview-summary');
        }
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
    return(
        <Container>
            <Header title={`진행 시간 ${formatTime(seconds)}`} onBackClick={handleBackClick}/>
            <Contents>
                <User>유저 화면</User>
                <RecordContainer>
                    <RecordStart>녹음 시작하기</RecordStart>
                    <RecordStop>녹음 완료하기</RecordStop>
                </RecordContainer>
                <Question>남은 질문 개수: {remainingQuestions}개</Question>
            </Contents>
        </Container>
    )
};

export default Vedio;