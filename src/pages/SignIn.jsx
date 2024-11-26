import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import PasswordInput from "../components/login/PasswordInput";
import IdInputDiv from "../components/signin/IdInputDiv";
import axios from "axios";

const SignIn = () => {
    const [firstPassword, setFirstPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");

    const [name, setName] = useState("");
    const isNameValid = name.trim().length > 0;

    const [id, setId] = useState(); //아이디 확인
    const [issame, setIsSame] = useState(false); //비밀번호 일치상태 확인
    const [isCanSignin, setIsCanSignin] = useState(false);
    const [error,setError] = useState("");

    const navigate = useNavigate();
    
    const goToLogin = () => {
    navigate("/login");
    };
  
    useEffect(() => {
      // secondPassword가 입력될 때만 비밀번호 일치 여부를 확인
      if (secondPassword) {
        if (firstPassword === secondPassword) {
          setIsSame(true);
          setError(""); // 에러 메시지 초기화
        } else {
          setIsSame(false);
          setError("비밀번호가 일치하지 않습니다."); 
        }
      } else {
        setIsSame(false);
        setError(""); // secondPassword가 비어있으면 에러 초기화
      }
    }, [secondPassword, firstPassword]);

  


  const handleSignup = async () => {
    if (!isCanSignin || !isNameValid || !issame) return;

      const requestData = {
        email: id,
        name: name,
        password: firstPassword,
      };

      console.log("Request Data:", requestData);


    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER}/api/user/signup`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json"
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        console.log("Reponse", response);
        alert("회원가입이 완료되었습니다.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error response:", error.response);
      setError("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
};
    return (
    <Container>
      <TopSection>
        <Logo src={logo} alt="Logo" />
        <Title>계정을 생성하세요</Title>
      </TopSection>
    
    <SigninWrapper>
        <NameInput
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
       <IdInputDiv
        placeholder= "아이디"
        setIsCanSignin={setIsCanSignin}
        setId={setId}
        >
          중복확인      
      </IdInputDiv>

        <PasswordInput
            placeholder="비밀번호"
            setPassword={setFirstPassword}
        />
        <PasswordInput
            placeholder="비밀번호 확인"
            setPassword={setSecondPassword}
        />
        </SigninWrapper>
              {error && <ErrorMessage>{error}</ErrorMessage>} 
      
        <SignupButton
          disabled={!isCanSignin || !isNameValid || !issame}
          onClick={handleSignup}
        >
          회원가입
        </SignupButton>
      
    <LoginText>
        이미 계정이 있으신가요? <LoginLink onClick={goToLogin}>로그인</LoginLink>
    </LoginText>

    </Container>
    );
};

export default SignIn;

const Container = styled.div`
  display: flex;
  width: 391px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 120px 20px 20px 20px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  text-align: center;
  margin-bottom: 20px;
`;

const NameInput = styled.input`
  width: 196px;
  height: 43px;
  padding: 10px;
  margin: 10px;
  font-size: 0.7rem;
  border: 2px solid lightgray;
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #3a00f9;
  }
`;

const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 0;
`;
const SignupButton = styled.button`
  width: 290px;
  height: 43px;
  background-color: ${({ disabled }) => (disabled ? "lightgray" : "#3A00F9")};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "lightgray" : "#2A00F9")};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: 10px 0;
`;


const LoginText = styled.div`
  margin-top: 20px;
  font-size: 0.9rem;
  color: #aaa;
  text-align: center;
`;

const LoginLink = styled.span`
  color: #3A00F9;
  cursor: pointer;

  &:hover {
    color: #2A00D9; /* 호버 시 약간 어두운 색상 */
  }
`;