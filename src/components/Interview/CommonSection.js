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
  font-size: 17px;
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
  align-self: flex-start;
`

export const CommonSection = ({ title, subtitle, children }) => (
  <Section>
    {title && <Title>{title}</Title>}
    {subtitle && <SubTitle>{subtitle}</SubTitle>}
    {children}
  </Section>
);

export const CommonLabel = Label;