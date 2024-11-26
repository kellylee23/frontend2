import React from "react";
import styled from "styled-components";
import img from "../img/imagepdf.png";

import Boxscores from "../components/mypage/Boxscores";
import { useNavigate } from "react-router-dom";

const Title = styled.div`
  margin-left: 25px;
  margin-top: 82px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  color: #000000;
  text-align: left;
`;

const Subtitle = styled.div`
  margin-left: 25px;
  margin-top: 13px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: #000000;
`;

const Box1 = styled.div`
  box-sizing: border-box;
  height: 125px;
  margin-left: 25px;
  margin-top: 50px;
  margin-right: 25px;
  border: 1px solid #000000;
  border-radius: 10px;
`;

const Result = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #3a00f9;
  margin-left: 25px;
  margin-top: 43px;
`;

const Rowdiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Circle = styled.div`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  background-color: #1b1b1b;
  color: #ffffff;
  text-align: center;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  white-space: nowrap;
  margin-top: 21px;
  margin-left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Subcircle = styled.div`
  color: #000000;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  margin-top: 16px;
  margin-left: 6px;
`;

const Box2 = styled.div`
  box-sizing: border-box;
  width: auto;
  height: 91px;
  margin-top: 14px;
  margin-left: 25px;
  margin-right: 25px;
  border: 1px solid #000000;
  border-radius: 10px;
`;

const Score = styled.div`
  color: #000000;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin-top: 25px;
`;

const BoxscoreDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FeedbackQ = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #000000;
  margin-left: 42px;
  margin-top: 35px;
  border: 1px solid #000000;
  border-radius: 10px;
  width: 300px;
  height: 38px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const FeedbackA = styled.div`
  margin-left: 42px;
  margin-top: 22px;
  border: 1px solid #000000;
  border-radius: 10px;
  width: 300px;
  height: 100px;
`;

const Script = styled.div`
  margin-left: 22px;
  margin-top: 51px;
  border: 1px solid #3a00f9;
  border-radius: 10px;
  width: 226px;
  height: 25px;
  font-size: 12px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const Modi1 = styled.button`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  background-color: #d9d9d9;
  border-radius: 30px;
  color: #3a00f9;
  border: none;
  width: 115px;
  height: 25px;
  white-space: nowrap;
  text-align: center;
  margin-top: 68px;
  margin-left: 40px;
`;

const Modi2 = styled.button`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  background-color: #3a00f9;
  border-radius: 30px;
  color: white;
  border: none;
  width: 115px;
  height: 25px;
  white-space: nowrap;
  text-align: center;
  margin-top: 68px;
  margin-bottom: 130px;
  margin-left: 50px;
`;

const Archive = () => {
  const navigate = useNavigate();

  const handleBoxClick = () => {
    navigate("/mypage");
  };

  return (
    <>
      <Title>면접 아카이브</Title>
      <Subtitle>2024. 04. 24 15:57 생성</Subtitle>
      <Box1></Box1>
      <Result>가상 면접 결과</Result>
      <Rowdiv>
        <Circle>1</Circle>
        <Subcircle>AI 총평</Subcircle>
      </Rowdiv>
      <Box2></Box2>

      <Rowdiv>
        <Circle>2</Circle>
        <Subcircle>발음점수</Subcircle>
      </Rowdiv>
      <Score>72 / 100점</Score>
      <BoxscoreDiv>
        <Boxscores />
      </BoxscoreDiv>

      <Rowdiv>
        <Circle>3</Circle>
        <Subcircle>문항별 피드백</Subcircle>
      </Rowdiv>
      <FeedbackQ>
        Q1.개발이 적성에 잘 맞는다고 생각하는지? 그 이유는 무엇인가요?{" "}
      </FeedbackQ>
      <FeedbackA></FeedbackA>
      <FeedbackQ>Q2.~~~~~ </FeedbackQ>
      <FeedbackA></FeedbackA>
      <FeedbackQ>Q3.~~~~~ </FeedbackQ>
      <FeedbackA></FeedbackA>

      <Rowdiv>
        <Circle>4</Circle>
        <Subcircle>텍스트 스크립트로 면접 결과 보기</Subcircle>
      </Rowdiv>

      <Rowdiv>
        <img
          src={img}
          alt="pdf"
          style={{
            width: "25px",
            height: "25px",
            marginTop: "50px",
            marginLeft: "50px",
          }}
        />
        <Script>2024. 10. 09 15:57 면접 텍스트 스크립트</Script>
      </Rowdiv>

      <Rowdiv>
        <Modi1>면접 삭제하기</Modi1>
        <Modi2 onClick={handleBoxClick}>목록으로 이동하기</Modi2>
      </Rowdiv>
    </>
  );
};

export default Archive;
