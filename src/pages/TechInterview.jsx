import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from "react-icons/fa";
import { BsCaretDownFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
  width: 391px;
  min-height: 100vh;
  margin: 0 auto;
  background: white;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  position: relative;
`

const BackButton = styled.button`
  position: absolute;
  left: 20px;
  background: none;
  border: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  z-index: 1;
`

const Title = styled.div`
  width: 100%;
  font-weight: 600;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 20px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  margin-bottom: 24px;
  width: 100%;  
  padding-left:30px ;
`

const MainTitle = styled.div`
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  align-self: flex-start;  
`

const SubTitle = styled.div`
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 400;
  color: #666;
  line-height: 1.5;
  text-align: left;  
`

const InfoBox = styled.div`
  width: 318px;
  height: 151px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #F2F2F2;
  border-radius: 12px;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 40px;
  color: #1B1B1B;
`
const InfoText = styled.p`
margin: 0;
font-weight: ${props => props.bold ? '700' : '400'};
display: inline;
`

const SelectSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`

const SelectTitle = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`

const SelectSubTitle = styled.div`
  font-family: "Noto Sans KR";
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
`

const SelectLabel = styled.div`
  color: #5B3EDE;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
`

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #000;
  border-radius: 8px;
  margin-top: 4px;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  font-family: "Noto Sans";
  font-size: 16px;
  color: #1B1B1B;
  cursor: pointer;
  
  &:hover {
    background: #F2F2F2;
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid #E5E5E5;
  }
`;

const SelectButton = styled.button`
  width: 100%;
  height: 55px;
  padding: 0 16px;
  border: 1px solid #000;
  border-radius: 8px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.selected ? '#1B1B1B' : '#7F7F7F'};
  cursor: pointer;
  
  .svg{
    width: 20px;
    height: 30px;
    color: #3A00F9;
  }
`;

const NextButton = styled.button`
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
  cursor: pointer;
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  &:hover {
    background: ${props => props.disabled ? '#3A00F9' : '#2900b3'};
  }
`;

const TechInterview = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedResume, setSelectedResume] = useState(null);
    
    const resumes = [
        { id: 1, title: "신입 개발자 이력서" },
        { id: 2, title: "프론트엔드 이력서" },
        { id: 3, title: "백엔드 이력서" },
    ];

    const handleBackClick = () => {
        navigate('/interview');
    };

    const handleResumeSelect = (resume) => {
        setSelectedResume(resume);
        setIsDropdownOpen(false);
    };

    const handleNextClick = () => {
        if (selectedResume) {
            navigate('/interview/options', { 
                state: { 
                    resumeId: selectedResume.id,
                    interviewType: 'technical'
                } 
            });
        }};

    return (
        <Container>
            <Header>
                <BackButton onClick={handleBackClick}>
                    <FaChevronLeft />
                </BackButton>
                <Title>기술 면접</Title>
            </Header>

            <Content>
                <TitleSection>
                    <MainTitle>기술면접?</MainTitle>
                    <SubTitle>
                        지원자의 전문 지식과<br/>
                        기술적 능력을 평가하기 위한 면접입니다.
                    </SubTitle>
                </TitleSection>

                <InfoBox>
                    <div><InfoText bold>이공계 직무</InfoText>에서 많이 실시되며,</div>
                    <div>지원자가 해당 직무에서</div>
                    <div>필요한 <InfoText bold>기술적 문제를</InfoText></div>
                    <div><InfoText bold>해결할 수 있는지</InfoText></div>
                    <div>확인하기 위해 진행됩니다.</div>
                </InfoBox>

                <SelectSection>
                    <SelectTitle>면접에 앞서 이력서를 선택해주세요!</SelectTitle>
                    <SelectSubTitle>이력서에 기반하여 면접이 진행됩니다.</SelectSubTitle>
                    <SelectLabel>[이력서 선택]</SelectLabel>
                    <DropdownContainer>
                        <SelectButton onClick={() => setIsDropdownOpen(!isDropdownOpen)} selected={selectedResume}>
                            {selectedResume ? selectedResume.title : '기본 이력서 선택하기'}
                            <BsCaretDownFill color='#3A00F9'/>
                        </SelectButton>
                
                        {isDropdownOpen && (
                            <DropdownMenu>
                                {resumes.map((resume) => (
                                    <DropdownItem key={resume.id} 
                                        onClick={() => handleResumeSelect(resume)}>
                                        {resume.title}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        )}
                    </DropdownContainer>
                </SelectSection>

                <NextButton onClick={handleNextClick} disabled={!selectedResume}>
                    다음 단계로 가기
                </NextButton>
            </Content>
        </Container>
    );
};

export default TechInterview;