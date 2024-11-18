import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import img from '../img/Camera.png';


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
  height: 417px;
  border: 1px solid #000000;
  border-radius: 10px;
  position: relative;
  margin-left: 25px;
  margin-right: 25px;
`;

const StyledIcon = styled(Icon)`
  width:55px;
  height: 55px;
  color: white;
`;

const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 66px;
  margin:57px auto;
  background: #d9d9d9;
  border-radius: 100px;
  margin-bottom: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UploadButton = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #ffffff;
  margin: 0 auto 25px;
  background: #d9d9d9;
  border: none;
  border-radius: 30px;
  width: 120px;
  height: 25px;

  &:hover {
    border: 1px solid #3A00F9;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 14px;
  color: #d9d9d9;
  margin-left: 20px;
  margin-top: 40px;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  margin-left: 20px;
  margin-right: 20px;

  &:hover {
    border-bottom: 1px solid #3A00F9;
  }
`;

const NameInput = styled.input`
  font-size: 24px;
  font-weight: bold;
  border:none;
  outline: none;
  width: 100px;
`;

const SaveButton = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: white;
  background-color: #3A00F9;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  width: 68px;
  height: 23px;
  white-space: nowrap;
`;

const PasswordInput = styled.input`
  font-size: 24px;
  font-weight: bold;
  border:none;
  outline: none;
  width: 200px;
`;

const ProfileEdit = () => {
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
  
    const handleNameChange = (e) => {
      if (e.target.value.length <= 4) { // 4글자 제한
        setName(e.target.value);
      }
    };
  
    return (
      <>
        <Title>개인정보수정</Title>
        <Maindiv>
          <ProfileIcon>
            {image ? <img src={image} alt="Profile" /> : <StyledIcon icon="ic:baseline-person" />}
          </ProfileIcon>
          <label htmlFor="fileUpload">
            <UploadButton onClick={() => document.getElementById("fileUpload").click()}> <img src={img} alt="camera" style={{width:'15px', height:'15px', marginRight:'10px', marginTop:'3px'}} />사진 올리기</UploadButton>
          </label>
          <input
            id="fileUpload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleUpload}
          />
          <InputGroup>
            <Label>이름</Label>
            <InputRow>
              <NameInput
                maxLength={4}
                value={name}
                onChange={handleNameChange}
              />
              <SaveButton>저장하기</SaveButton>
            </InputRow>
          </InputGroup>
  
          <InputGroup>
            <Label>비밀번호</Label>
            <InputRow>
              <PasswordInput></PasswordInput>
              <SaveButton>저장하기</SaveButton>
            </InputRow>
          </InputGroup>
        </Maindiv>
      </>
    );
  };
  
  export default ProfileEdit;
  
