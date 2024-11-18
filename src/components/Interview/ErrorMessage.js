import styled from 'styled-components';

export const ErrorMessage = styled.div`
  color: #FF0000;
  font-size: 14px;
  font-family: "Noto Sans KR";
  margin-top: 8px;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  width: 100%;
  text-align: left;
`;