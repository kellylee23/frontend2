import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";
import { useState } from "react";
import InputDiv from "../components/login/InputDiv";
import PasswordInput from "../components/login/PasswordInput";
import axiosInstance from "../APIs/AxiosInstance";

const LogIn = () => {
    const [id, setId] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
    
    const goToSignin = () => {
    navigate("/signup");
    };

    const handleIdInput = (event) => {
        setId(event.target.value);
    };

    const handleLogin = async () => {
      try {
          const response = await axiosInstance.post('/api/user/login', {
              email: id,
              password: password
          });
          
          const token = response.headers['authorization'];
          if (token) {
              sessionStorage.setItem('accessToken', token);
              alert("로그인 성공");
              navigate('/');
          }
      } catch (error) {
          console.error('Login error:', error);
          alert('로그인 실패');
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