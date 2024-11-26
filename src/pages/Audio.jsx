import React, { useEffect, useState }from "react";
import styled from "styled-components";
import { Container} from "../components/PageLayout";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import Play from "../img/Play.png"
import Stop from "../img/Stop.png"
import MicRecorder from "mic-recorder-to-mp3"
import axios from "axios";

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
    const [isRecording, setIsRecording] = useState(false);
    const [remainingQuestions, setRemainingQuestions] = useState(5);
    const [seconds, setSeconds] = useState(15 * 60);
    const [recorder] = useState(new MicRecorder({bitRate: 128}));
    
    const handleBackClick = () => {
        navigate(-1);
    };
    

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
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

    const StartRecording = async () => {
        try{
            await recorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error("Error starting recording:", error);
            alert("마이크 접근 권한이 필요합니다.");
        }
    };

    const StopRecording = async() => {
        try{
            const [buffer, blob] = await recorder.stop().getMp3();
            
            // 녹음된 파일 재생
            const audioElement = document.createElement('audio');
            audioElement.src = URL.createObjectURL(blob);
            audioElement.play();


            const audioFile = new File(buffer, 'audio.wav', {
                type: 'audio/wav',
                lastModified: Date.now()
            });

            const formData = new FormData();
            formData.append('wavFile', audioFile);

            try {
                const token = localStorage.getItem('accessToken');
                const response = await axios.post(`/api/interview/interview`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log('Upload success:', response.data);
                setRemainingQuestions(prev => {
                    const newCount = prev - 1;
                    if (newCount <= 0) {
                        navigate('/interview-summary');
                    }
                    return newCount;
                });

            } catch(error){
                console.log("Upload error:", error);
                if (error.response){
                    console.error('Server error: ', error.response.data);
                    alert(`업로드 실패: ${error.response.data.message || '서버 오류가 발생했습니다.'}`);
                } else if (error.request){
                    alert('서버로부터 응답이 없습니다. 네트워크 연결을 확인해주세요.');
                } else{
                    alert('업로드 중 오류가 발생했습니다.');
                }
            }

            setIsRecording(false);
        } catch (error) {
            console.error("Recording error:", error);
            alert("녹음 중지 중 오류가 발생했습니다.");
            setIsRecording(false);
        }
    };

    const handleRecordClick = () => {
        if(!isRecording){
            StartRecording();
        }else{
            StopRecording();
        }
    };

    return (
        <Container>
            <Header title="음성 면접" onBackClick={handleBackClick}/>
            <Contents>
            <Time>진행 시간 {formatTime(seconds)}</Time>
                <Button onClick={handleRecordClick}>
                    <img src={isRecording ? Stop : Play} alt={isRecording ? "stop" : "play"}/>
                </Button>
                <Text>
                    {isRecording ? (
                    <>
                    녹음 완료하기<br/>(다음 질문)
                    </>
                    ) : (
                    <>녹음 시작하기<br/>
                    (답변 시작)
                    </>)}
                </Text>
                <Question>남은 질문 개수: {remainingQuestions}개</Question>
            </Contents>
        </Container>
    );
};

export default Audio;