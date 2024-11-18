import styled from 'styled-components';

export const PrimaryButton = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 30px;
  background: #3A00F9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
  border: none;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 700;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  &:hover {
    background: ${props => props.disabled ? '#3A00F9' : '#2900b3'};
  }
`;