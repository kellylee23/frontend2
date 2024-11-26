import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Box1  from "../components/mypage/IntroInput";
import Box2  from "../components/mypage/IntroInput";
import Box3  from "../components/mypage/IntroInput";
import Box4  from "../components/mypage/IntroInput";
import { Plus } from "../img/svgs";

const Title =styled.div`
  margin-top: 88px;
  margin-bottom: 7px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  color: #000000;
  text-align: center;
`;

const Maindiv = styled.div`
  box-sizing: border-box;
  width: 340px;
  height: 642px;
  border: 1px solid #000000;
  border-radius: 10px;
  position: relative;
  margin-left: 25px;
  margin-right: 25px;
`;

const Subtitle = styled.div`
  position: absolute;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #000000;
  margin-left: 15px;
`;

const MDdiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const Modi1 = styled.button`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  background-color: #d9d9d9;
  border-radius:30px;
  color : #3A00F9;
  border: none;
  width: 70px;
  height: 22px;
  white-space: nowrap;
  text-align: center;
  margin-top: 16px;
  margin-left: 190px;
`;

const Modi2 = styled.button`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  background-color: #3A00F9;
  border-radius:30px;
  color : white;
  border: none;
  width: 70px;
  height: 22px;
  white-space: nowrap;
  text-align: center;
  margin-top: 16px;
  margin-left: 33px;
  margin-bottom: 80px;
  flex-direction: row;
`;
const Qdiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 250px;
    margin-top: 621px;
`;

const Ques = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  color: #d9d9d9;
`;

const Introduction= () => {
    const navigate = useNavigate();

    const handleBoxClick = () => {
        navigate('/mypage'); 
      };
    const handleSave = () => {
        alert('저장되었습니다!');
        console.log({ motive, role, effort, dream });
      };

    const [motive, setMotive] = useState();
    const [role, setRole] = useState();
    const [effort, setEffort] = useState();
    const [dream, setDream] = useState();
    

    const handleInput = (e, field) => {
        const value = e.target.value;
        if (field === "motive") {
          setMotive(value);
        } else if (field === "role") {
          setRole(value);
        } else if (field === "effort") {
          setEffort(value);
        } else if (field === "dream") {
          setDream(value);
        }
      };

  return (
    <>
    <Title>나의 자기소개서</Title>
    <Maindiv>
      <Subtitle style={{marginTop:"19px"}}>1. 지원동기를 적어주세요.</Subtitle>
      <Box1
      type="text"
      value={motive}
      onChange={(e) => handleInput(e, "motive")} 
      />
      <Subtitle style={{marginTop:"162px"}}>2. 기억에 남는 팀 활동과 팀 내 본인의 역할을 적어주세요.</Subtitle>
      <Box2
        type="text"
        value={role}
        onChange={(e) => handleInput(e, "role")} 
        />
      <Subtitle style={{marginTop:"303px"}}>3. 직무에 필요한 전문성(지식/기술)을 쌓기 위하여 <br />어떠한 노력을 하였는지 적어주세요.</Subtitle>
      <Box3      
      type="text"
      value={effort}
      onChange={(e) => handleInput(e, "effort")} 
      />
      <Subtitle style={{marginTop:"456px"}}>4. 입사 후의 포부를 적어주세요.</Subtitle>
      <Box4      
      type="text"
      value={dream}
      onChange={(e) => handleInput(e, "dream")} 
      />
      <Qdiv>
        <Ques>질문 추가하기</Ques>
        <Plus></Plus>
      </Qdiv>
    </Maindiv>
    <MDdiv>
    <Modi1 onClick={handleBoxClick}>목록으로</Modi1>
    <Modi2 onClick={handleSave}>수정완료</Modi2>
    </MDdiv>
    
    </>
  );
}

export default Introduction;
