// components/Interview/InputSection.js
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 318px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`

const Title = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`

const SubTitle = styled.div`
  font-family: "Noto Sans KR";
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
`

const Label = styled.div`
  color: #5B3EDE;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
`

const StyledInput = styled.input`
  width: 100%;
  height: 55px;
  padding: 0 16px;
  border: 1px solid #000;
  border-radius: 8px;
  background: white;
  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 18px;
  color: #000;
  box-sizing: border-box;

  &::placeholder {
    color: #7F7F7F;
  }

  &:focus {
    outline: none;
    border-color: #3A00F9;
  }
`

const Error = styled.div`
  color: #FF0000;
  font-size: 14px;
  font-family: "Noto Sans KR";
  margin-top: 8px;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  width: 100%;
  text-align: left;
`

export const InputSection = ({ 
  title,
  subtitle,
  label,
  error,
  ...inputProps
}) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      {label && <Label>{label}</Label>}
      <StyledInput {...inputProps} />
      <Error visible={!!error}>{error}</Error>
    </Section>
  );
};