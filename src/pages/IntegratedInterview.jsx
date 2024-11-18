import React, {useState} from 'react';
import styled from 'styled-components';
import { BsCaretDownFill } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

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
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 500;
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

const CommonSection = styled.div`
  width: 318px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`

const CommonTitle = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 700;
`

const CommonSubTitle = styled.div`
  font-family: "Noto Sans KR";
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`

const CommonLabel = styled.div`
  color: #5B3EDE;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 700;
  margin: 12px 0px;
`

const InputLink = styled.input`
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

const ErrorMessage = styled.div`
  color: #FF0000;
  font-size: 14px;
  font-family: "Noto Sans KR";
  margin-top: 8px;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  width: 100%;
  text-align: left;
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
  box-sizing: border-box;
  cursor: pointer;

  .svg{
    width: 20px;
    height: 30px;
    color: #3A00F9;
  }
  
  &:focus {
    outline: none;
    border-color: #3A00F9;
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
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  &:hover {
    background: ${props => props.disabled ? '#3A00F9' : '#2900b3'};
  }
`;


const IntegratedInterview = () => {
    const navigate = useNavigate();
    const [jobPostingUrl, setJobPostingUrl] = useState('');
    const [urlError, setUrlError] = useState('');
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

    const validateUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };

    const handleUrlChange = (e) => {
        const url = e.target.value;
        setJobPostingUrl(url);
        
        if (url && !validateUrl(url)) {
            setUrlError('올바른 URL을 입력해주세요');
        } else {
            setUrlError('');
        }
    };

    const handleResumeSelect = (resume) => {
        setSelectedResume(resume);
        setIsDropdownOpen(false);
    };

    const handleNextClick = () => {
        if (!jobPostingUrl) {
            setUrlError('모집공고 링크를 입력해주세요');
            return;
        }

        if (!validateUrl(jobPostingUrl)) {
            setUrlError('올바른 URL을 입력해주세요');
            return;
        }

        if (!selectedResume) {
            return;
        }

        navigate('/interview/options', {
            state: {
                jobPostingUrl: jobPostingUrl,
                resumeId: selectedResume.id,
                interviewType: 'integrated'
            }
        });
    };

    return (
        <Container>
            <Header>
                <BackButton onClick={handleBackClick}>
                    <FaChevronLeft />
                </BackButton>
                <Title>통합 면접</Title>
            </Header>

            <Content>
                <TitleSection>
                    <MainTitle>통합면접?</MainTitle>
                    <SubTitle>
                        기술 면접과 공통 면접을<br/>
                        함께 진행하는 면접 형식입니다.
                    </SubTitle>
                </TitleSection>

                <InfoBox>
                    <div>지원자의 전문 지식과 기술적</div>
                    <div>능력을 평가하는<InfoText bold>기술 면접</InfoText>과</div>
                    <div>동일한 질문을 통해 일관된 평가가</div>
                    <div>가능하도록 설계된 <InfoText bold>공통 면접</InfoText>이</div>
                    <div><InfoText bold>함께 진행됩니다.</InfoText></div>
                </InfoBox>

                <CommonSection>
                    <CommonTitle>모집 공고의 링크와 이력서가 필요해요!</CommonTitle>
                    <CommonSubTitle>모집공고와 이력서에 기반하여 면접이 진행됩니다.</CommonSubTitle>
                    <CommonLabel>[모집공고 링크 입력]</CommonLabel>
                    <InputLink
                        type="url"
                        placeholder="링크 입력..."
                        value={jobPostingUrl}
                        onChange={handleUrlChange}
                        onPaste={(e) => {
                            e.preventDefault();
                            const pastedText = e.clipboardData.getData('text');
                            setJobPostingUrl(pastedText);
                            if (!validateUrl(pastedText)) {
                                setUrlError('올바른 URL을 입력해주세요');
                            } else {
                                setUrlError('');
                            }
                        }}
                    />
                    <ErrorMessage visible={!!urlError}>{urlError}</ErrorMessage>
                    
                    <CommonLabel>[이력서 선택]</CommonLabel>
                    <DropdownContainer>
                        <SelectButton 
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            selected={selectedResume}
                        >
                            {selectedResume ? selectedResume.title : '기본 이력서 선택하기'}
                            <BsCaretDownFill color='#3A00F9'/>
                        </SelectButton>
                        
                        {isDropdownOpen && (
                            <DropdownMenu>
                                {resumes.map((resume) => (
                                    <DropdownItem
                                        key={resume.id}
                                        onClick={() => handleResumeSelect(resume)}
                                    >
                                        {resume.title}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        )}
                    </DropdownContainer>
                </CommonSection>

                <NextButton 
                    onClick={handleNextClick}
                    disabled={!jobPostingUrl || !!urlError || !selectedResume}
                >
                    다음 단계로 가기
                </NextButton>
            </Content>
        </Container>
    );
};

export default IntegratedInterview;