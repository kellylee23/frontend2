import styled from "styled-components";

const InputDiv = ({ type, placeholder, handleInput }) => {
    return (
        <InputField type={type} placeholder={placeholder} onChange={handleInput} />
    );
};

export default InputDiv;

const InputField = styled.input`
  width: 290px;
  height: 43px;
  padding: 10px;
  margin: 10px;
  font-size: 0.7rem;
  border: 2px solid lightgray;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3A00F9; /* 포커스 시 보라색 */
  }

`