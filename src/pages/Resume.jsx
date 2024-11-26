import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Box2 from "../components/mypage/ResumeInput";
import Box3 from "../components/mypage/ResumeInput";
import Box4 from "../components/mypage/ResumeInput";
import Box5 from "../components/mypage/ResumeInput";
import axios from "axios";
import img from "../img/Camera.png";

const Title = styled.div`
  margin-top: 88px;
  margin-bottom: 7px;
  font-family: "Noto Sans";
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
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #000000;
`;

const Box1 = styled.div`
  position: absolute;
  background-color: #d9d9d9;
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
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  background-color: #d9d9d9;
  border-radius: 30px;
  color: #3a00f9;
  border: none;
  width: 70px;
  height: 22px;
  white-space: nowrap;
  text-align: center;
  margin-top: 16px;
  margin-left: 190px;
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
  const [image, setImage] = useState(null);
  const [name, setName] = useState(""); // 이름 상태 추가

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result); // 이미지 데이터 URL 저장
      reader.readAsDataURL(file);
    }
  };
  const navigate = useNavigate();
  const [profile, setProfile] = useState();
  const [education, setEducation] = useState();
  const [experience, setExperience] = useState();
  const [contact, setContact] = useState();

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER}/api/user/resume/get`
        );
        const { name, academicAbility, career, contact } = response.data;
        setProfile(name);
        setEducation(academicAbility);
        setExperience(career);
        setContact(contact);
      } catch (error) {
        console.error("Error fetching resume data", error);
      }
    };

    fetchResume();
  }, []);

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

  const handleSave = async () => {
    try {
      const data = {
        name: profile,
        academicAbility: education,
        career: experience,
        contact: contact,
      };
      await axios.post(
        `${process.env.REACT_APP_SERVER}/api/user/resume/save`,
        data
      );
      alert("저장되었습니다!");
      console.log(data);
    } catch (error) {
      console.error("Error saving resume data", error);
    }
  };
  const handleBoxClick = () => {
    navigate("/mypage");
  };
  return (
    <>
      <Title>나의 기본 이력서</Title>
      <Maindiv>
        <Subtitle style={{ margin: "40px 150px 9px 111px" }}>프로필</Subtitle>
        <Box1 onClick={() => document.getElementById("fileUpload").click()}>
          {" "}
          {image ? (
            <img
              src={image}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          ) : (
            <img
              src={img}
              alt="camera"
              style={{
                width: "30px",
                height: "30px",
                objectFit: "cover",
                position: "absolute",
                marginTop: 33,
                marginLeft: 22,
              }}
            />
          )}
          <label htmlFor="fileUpload"></label>
          <input
            id="fileUpload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleUpload}
          />
        </Box1>
        <Box2
          type="text"
          placeholder="프로필을 작성해주세요."
          value={profile}
          onChange={(e) => handleInput(e, "profile")}
        />
        <Subtitle style={{ marginTop: "175px", marginLeft: "14px" }}>
          학력
        </Subtitle>
        <Box3
          type="text"
          placeholder="학력을 작성해주세요."
          value={education}
          onChange={(e) => handleInput(e, "education")}
        />
        <Subtitle style={{ marginTop: "314px", marginLeft: "14px" }}>
          경력
        </Subtitle>
        <Box4
          type="text"
          value={experience}
          placeholder="경력을 작성해주세요."
          onChange={(e) => handleInput(e, "experience")}
        />
        <Subtitle style={{ marginTop: "468px", marginLeft: "14px" }}>
          contact
        </Subtitle>
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
