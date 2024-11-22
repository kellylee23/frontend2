import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Box2  from "../components/mypage/ResumeInput";
import Box3  from "../components/mypage/ResumeInput";
import Box4  from "../components/mypage/ResumeInput";
import Box5  from "../components/mypage/ResumeInput";

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
  height: 605px;
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
`;

const Box1 = styled.div`
  position: absolute;
  background-color: #D9D9D9; 
  width: 75px;
  height: 100px;
  margin-left: 14px;
  margin-top: 65px;
  border-radius: 10px;
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

const Resume = () => {

    const navigate = useNavigate(); 
    const [profile, setProfile] = useState();
    const [education, setEducation] = useState();
    const [experience, setExperience] = useState();
    const [contact, setContact] = useState();
    

    const handleInput = (e, field) => {
        const value = e.target.value;
        if (field === "profile") {
          setProfile(value);
        } else if (field === "education") {
          setEducation(value);
        } else if (field === "experience") {
          setExperience(value);
        } else if (field === "contact") {
          setContact(value);
        }
      };

    const handleSave = () => {
        alert('저장되었습니다!');
        console.log({ profile, education, experience, contact });
      };

    const handleBoxClick = () => {
      navigate('/mypage'); 
    };

    return (
        <>
        <Title>나의 기본 이력서</Title>
        <Maindiv>
          <Subtitle style={{margin:"40px 150px 9px 111px"}}>프로필</Subtitle>
          <Box1 />
          <Box2 
            type="text"
            placeholder="프로필을 작성해주세요."
            value={profile}
            onChange={(e) => handleInput(e, "profile")}
          />
          <Subtitle style={{marginTop:"175px", marginLeft:"14px"}}>학력</Subtitle>
          <Box3
            type="text"
            placeholder="학력을 작성해주세요."
            value={education}
            onChange={(e) => handleInput(e, "education")}
          />
          <Subtitle style={{marginTop:"314px", marginLeft:"14px"}}>경력</Subtitle>
          <Box4
            type="text"
            value={experience}
            placeholder="경력을 작성해주세요."
            onChange={(e) => handleInput(e, "experience")}
          />
          <Subtitle style={{marginTop:"468px", marginLeft:"14px"}}>contact</Subtitle>
          <Box5
            type="text"
            value={contact}
            placeholder="연락처를 작성해주세요."
            onChange={(e) => handleInput(e, "contact")}
          />
        </Maindiv>
  
        <MDdiv>
    <Modi1 onClick={handleBoxClick}>목록으로</Modi1>
    <Modi2 onClick={handleSave}>수정완료</Modi2>
    </MDdiv>
        
        </>
      );
};

export default Resume;