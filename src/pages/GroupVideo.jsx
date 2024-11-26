import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Container } from "../components/PageLayout";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import UserIcon from "../img/User.svg";

// padding 제거하기 위해 따로 설정
const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const User = styled.div`
  width: 339px;
  height: 340px;
  background: #d9d9d9;
  border-radius: 13px;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AiContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
`;
const Ai = styled.div`
  width: 162px;
  height: 200px;
  background: #d9d9d9;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-weight: 700;

  .img {
    width: 50px;
    height: 50px;
  }
`;
const RecordContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  gap: 15px;
`;
const RecordButton = styled.div`
  width: 145px;
  height: 42px;
  border-radius: 30px;
  background: ${(props) => (props.isRecording ? "#D9D9D9" : "#2F0BFF")};
  color: ${(props) => (props.isRecording ? "#3A00F9" : "#FFF")};
  font-family: "Noto Sans";
  font-size: 14px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => (props.isRecording ? "#C9C9C9" : "#2900b3")};
  }
`;

const Question = styled.div`
  color: #3a00f9;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 500;
  padding-top: 20px;
`;

const GroupVideo = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [remainingQuestions, setRemainingQuestions] = useState(5);
  const [seconds, setSeconds] = useState(15 * 60);

  const [recorder, setRecoder] = useState(null);
  const [recordedChunk, setRecodedChunk] = useState([]);
  const videoRef = useRef(null);

  const handleBackClick = () => {
    navigate(-1);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      videoRef.current.srcObject = stream;

      const newRecorder = new MediaRecorder(stream);

      newRecorder.ondataavailable = (event) => {
        setRecodedChunk((prev) => [...prev, event.data]);
      };

      newRecorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop());
      };

      newRecorder.start();
      setRecoder(newRecorder);
    } catch (error) {
      console.error("error!:", error);
    }
  };

  const stopRecordingAndSave = () => {
    if (recorder) {
      recorder.stop();
      const recordedBlob = new Blob(recordedChunk, { type: "video/webm" });
      const url = URL.createObjectURL(recordedBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "interview-recording.webm";
      link.click();
    }
  };
  const handleRecordClick = () => {
    if (!isRecording) {
      setRecodedChunk([]); // 녹음 시작 전에 청크 초기화
      startRecording();
    } else {
      stopRecordingAndSave(); // 녹음이 완료되면 저장

      // 녹음이 완료된 후에만 질문 개수 감소
      setRemainingQuestions((prev) => {
        const newCount = prev - 1;
        if (newCount <= 0) {
          navigate("/interview-summary");
        }
        return newCount;
      });
    }

    // 녹음 상태 토글
    setIsRecording(!isRecording);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/interview-summary");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <Container>
      <Header
        title={`진행 시간 ${formatTime(seconds)}`}
        onBackClick={handleBackClick}
      />
      <Contents>
        <User>
          유저 화면
          <video
            ref={videoRef}
            autoPlay
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </User>
        <AiContainer>
          <Ai>
            <img src={UserIcon} alt="user" />
            면접자 2
          </Ai>
          <Ai>
            <img src={UserIcon} alt="user" />
            면접자 3
          </Ai>
        </AiContainer>
        <RecordContainer>
          <RecordButton isRecording={isRecording} onClick={handleRecordClick}>
            {isRecording ? "녹음 완료하기" : "녹음 시작하기"}
          </RecordButton>
        </RecordContainer>
        <Question>남은 질문 개수: {remainingQuestions}개</Question>
      </Contents>
    </Container>
  );
};

export default GroupVideo;
