import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";
import { useState } from "react";
import InputDiv from "../components/login/InputDiv";
import PasswordInput from "../components/login/PasswordInput";
import axios from "axios";

import { useAuth } from "../AuthContext";

const LogIn = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { login } = useAuth();
    
    const goToSignin = () => {
       navigate("/signup");
    };

    const handleIdInput = (event) => {
        setId(event.target.value);
    };
  
    const requestData = {
      email: id,
      password: password,
    };

    const handleLogin = async () => {
      if (!id || !password) {
          alert("아이디와 비밀번호를 모두 입력해주세요.");
          return;
      }

      console.log("요청 데이터:", requestData);

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER}/api/user/login`,
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("로그인 응답:", response.data);
        console.log("응답 헤더:", response.headers);
        
        //서버로부터 받은 응답의 헤더 중 authorization 필드에 있는 값을 가져오는 것
        const token = response.headers['authorization'] || 
              response.headers['Authorization'];

        console.log("토큰:", token);
  
      if (token) {
        const accessToken = token.split(" ")[1]; // Bearer <token>에서 <token>만 추출
        localStorage.setItem("authorization", accessToken); // 로컬 스토리지에 저장
      }
        login();
        alert("로그인에 성공하였습니다. 홈 화면으로 이동합니다.");
        navigate('/main');
      } catch (error) {
        console.error("Error response:", error.response);

        // 유효하지 않은 회원 정보 처리
        if (error.response && error.response.status === 401) {
          alert("유효하지 않은 회원 정보입니다.");
        } else {
          alert("로그인 중 오류가 발생했습니다. 다시 시도해 주세요.");
        }
      }
    };
  
    return (
        <Container>
            <Logo src={logo} alt="Logo" />
            <InputWrapper>
                <InputDiv
                    type="text"
                    placeholder="아이디"
                    handleInput={handleIdInput}
                />
                <PasswordInput placeholder= "비밀번호" setPassword={setPassword} />
            </InputWrapper>

            <LoginButton onClick={handleLogin} >로그인</LoginButton>

            <SignupText>
                아직 계정이 없으신가요? <SignupLink onClick={goToSignin}>회원가입</SignupLink>
            </SignupText>
        </Container>
    );
};

export default LogIn;

const Container = styled.div`
  display: flex;
  width: 391px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 120px 20px 20px 20px;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 150px;
`;


const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 0;
`;

const LoginButton = styled.button`
  width: 290px;
  height: 43px;
  padding: 10px;
  margin: 10px;
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
  background-color: #CAC9C9;
  border: none;
  border-radius: 10px;
  outline: none;
  transition: background-color 0.3s;

  &:focus {
    background-color: #3A00F9; 
  }
`;

const SignupText = styled.div`
  margin-top: 20px;
  font-size: 0.9rem;
  color: #aaa;
  text-align: center;
`;

const SignupLink = styled.span`
  color: #3A00F9;
  cursor: pointer;

  &:hover {
    color: #2A00D9; /* 호버 시 약간 어두운 색상 */
  }
`;