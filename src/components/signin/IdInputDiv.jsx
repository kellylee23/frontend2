import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const IdInputDiv = ({
    placeholder,
    children,
    setIsCanSignin,
    setId
}) => {
    const [inputValue, setInputValue] = useState("");
    const [isbuttonenabled, setIsButtonEnabled] = useState(false);
    const [showError, setShowError] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

  // 유효성 검사 로직
  const validateInput = (value) => {
    const hasUpperCase = /[A-Z]/.test(value); // 대문자 포함 여부
    const hasLowerCase = /[a-z]/.test(value); // 소문자 포함 여부
    const hasNumber = /[0-9]/.test(value); // 숫자 포함 여부
    return hasUpperCase && hasLowerCase && hasNumber;
  };

  // 입력값이 변경될 때 버튼 활성화 및 에러 메시지 상태 업데이트
  useEffect(() => {
    const isValid = validateInput(inputValue);
    setIsButtonEnabled(isValid);
    setShowError(!isValid); 
  }, [inputValue]);

  useEffect(() => {
        setIsCanSignin(isbuttonenabled && !showError);
    }, [isbuttonenabled, showError, setIsCanSignin]);

  const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
      
  const handleFocus = () => {
        setIsFocused(true); 
    };

  const handleBlur = () => {
        setIsFocused(false); 
    };

  const handlesubmit = async () => {
    try {
      const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/api/user/email-check`,
        {
          params: { email: inputValue }, 
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );


      console.log("서버 응답값:", response.data);
      console.log("서버 전체 응답:", response);

      const isIdAvailable = response.data === false; //중복이 없다는 뜻 => 아이디 생성 가능 !
        
    if (isIdAvailable && validateInput(inputValue)) {
      setId(inputValue);
      setShowError(false); // 에러 메시지 숨김
      alert("사용 가능한 아이디입니다.");
    } else {
      setShowError(true); // 유효하지 않은 경우 에러 메시지 표시
      setIsCanSignin(false);
    }
  } catch (error) {
    console.error("Error during email check:", error);
    alert("서버와 통신 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
    
};

    
    return (
        <>
        <Wrapper>
        <InputField
            placeholder={placeholder}
            value={inputValue}
            onChange = {handleInputChange}
            onFocus={handleFocus} 
            onBlur={handleBlur} 
          />
         <IdentifyButton
          disabled={!isbuttonenabled}
          isbuttonenabled={isbuttonenabled}
          onClick={handlesubmit}
        >
          {children}
        </IdentifyButton>
        
        </Wrapper>
      {isFocused && showError && (
        <ErrorText>대소문자 및 숫자를 포함해서 입력해주세요.</ErrorText>
      )}
    
        {!showError && (
          <SuccessText>사용 가능한 아이디입니다!</SuccessText>
        )}

        </>
            );
        };

export default IdInputDiv;

const Wrapper  = styled.div`
  display: flex;
  flex-direction: row;
  width: 290px;
  margin: 10px;
`;

const InputField = styled.input`
  width: 210px;
  height: 43px;
  padding: 10px;
  font-size: 0.7rem;
  border: 2px solid lightgray;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3A00F9; /* 포커스 시 보라색 */
  }

`
const IdentifyButton = styled.button`
  width: 90px;
  height: 41px;
  margin-left: 10px;
  background-color: ${({ disabled }) => (disabled ? "lightgray" : "#3A00F9")};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "lightgray" : "#2A00F9")};
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.7rem;
  margin-bottom: 1.5rem;
  margin-left: 0.5rem;
`;

const SuccessText = styled.p`
    color: green;
    font-size: 0.7rem;
    margin-bottom: 1.5rem;
    margin-left: 0.5rem;
`;