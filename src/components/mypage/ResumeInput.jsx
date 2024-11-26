import styled from "styled-components";

const ResumeInput = ({ type, handleInput }) => {
    return (
        <>
        <Box2 type={type} placeholder={"프로필을 작성해주세요."} onChange={handleInput} />
        <Box3 type={type} placeholder={"학력을 작성해주세요."} onChange={handleInput} />
        <Box4 type={type} placeholder={"경력을 작성해주세요."} onChange={handleInput} />
        <Box5 type={type} placeholder={"연락처를 작성해주세요."} onChange={handleInput} />
        </>
    );
};

export default ResumeInput;

//2:프로필, 3:학력, 4:경력, 5:연락

const Box2 = styled.textarea`
  position: absolute;
  background-color: #D9D9D9; 
  width: 210px;
  height: 100px;
  margin-left: 111px;
  margin-top: 65px;
  padding: 10px;
  border-radius: 10px;
  flex-direction: row;
  outline: none;
  border: none;
  text-align: left;
  vertical-align: top;

  &::placeholder {
    text-align: left;
    vertical-align: top; 
  }

  &:focus {
    border : 1px solid;
    border-color: #3A00F9; /* 포커스 시 보라색 */
  }
`;

const Box3 = styled.textarea`
  position: absolute;
  background-color: #D9D9D9; 
  width: 306px;
  height: 104px;
  margin-left: 14px;
  margin-top: 200px;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  text-align: left;
  vertical-align: top;

  &::placeholder {
    text-align: left; 
    vertical-align: top;
  }

  &:focus {
    border : 1px solid;
    border-color: #3A00F9; /* 포커스 시 보라색 */
  }
`;

const Box4 = styled.textarea`
  position: absolute;
  background-color: #D9D9D9; 
  width: 306px;
  height: 119px;
  margin-left: 14px;
  margin-top: 339px;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  text-align: left;
  vertical-align: top;

  &::placeholder {
    text-align: left;
    vertical-align: top;
  }

  &:focus {
    border : 1px solid;
    border-color: #3A00F9; /* 포커스 시 보라색 */
  }
`;

const Box5 = styled.textarea`
  position: absolute;
  background-color: #D9D9D9; 
  width: 306px;
  height: 60px;
  margin-left: 14px;
  margin-top: 493px;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  text-align: left;
  vertical-align: top;

  &::placeholder {
    text-align: left;
    vertical-align: top;
  }

  &:focus {
    border : 1px solid;
    border-color: #3A00F9; /* 포커스 시 보라색 */
  }
`;