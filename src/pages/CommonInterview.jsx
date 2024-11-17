import React, {useState} from 'react';
import styled from 'styled-components';
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
  font-family: "Noto Sans";
  font-size: 20px;
  font-weight: 600;
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

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`

const InputTitle = styled.div`
  font-family: 'Noto Sans KR';
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`

const InputSubTitle = styled.div`
  font-family: "Noto Sans KR";
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
`

const InputLabel = styled.div`
  color: #5B3EDE;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
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

  &::placeholder {
    color: #7F7F7F;
  }

  &:focus {
    outline: none;
    border-color: #3A00F9;
  }
`

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
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${props => props.disabled ? '#3A00F9' : '#2900b3'};
  }
`

const ErrorMessage = styled.div`
  color: #FF0000;
  font-size: 14px;
  font-family: "Noto Sans KR";
  margin-top: 8px;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
`

const CommonInterview = () => {
    const navigate = useNavigate();
    const [jobPostingUrl, setJobPostingUrl] = useState('');
    const [error, setError] = useState('');

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
            setError('올바른 URL을 입력해주세요');
        } else {
            setError('');
        }
    };

    const handleNextClick = () => {
        if (!jobPostingUrl) {
            setError('모집공고 링크를 입력해주세요');
            return;
        }

        if (!validateUrl(jobPostingUrl)) {
            setError('올바른 URL을 입력해주세요');
            return;
        }

        navigate('/interview/options', {
            state: {
                jobPostingUrl: jobPostingUrl,
                interviewType: 'common'
            }
        });
    };

    return (
        <Container>
            <Header>
                <BackButton onClick={handleBackClick}>
                    <FaChevronLeft />
                </BackButton>
                <Title>공통 면접</Title>
            </Header>

            <Content>
                <TitleSection>
                    <MainTitle>공통면접?</MainTitle>
                    <SubTitle>
                        모든 지원자에게 동일한 질문을 통해<br/>
                        일관된 평가를 할 수 있도록 설계된 면접 <br/>
                        형식입니다.
                    </SubTitle>
                </TitleSection>

                <InfoBox>
                    <div>일반적인 공통 질문에는</div>
                    <div><InfoText bold>자기소개, 지원 동기, 강점과 약점,</InfoText></div>
                    <div><InfoText bold>직무 관련 경험</InfoText>등이 포함될 수 있습니다.</div>
                </InfoBox>

                <InputSection>
                    <InputTitle>면접에 앞서 모집 공고의 링크가 필요해요!</InputTitle>
                    <InputSubTitle>모집공고에 기반하여 면접이 진행됩니다.</InputSubTitle>
                    <InputLabel>[모집공고 링크 입력]</InputLabel>
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
                                setError('올바른 URL을 입력해주세요');
                            } else {
                                setError('');
                            }
                        }}
                    />
                    <ErrorMessage visible={!!error}>{error}</ErrorMessage>
                </InputSection>

                <NextButton onClick={handleNextClick} disabled={!jobPostingUrl || !!error}>
                    다음 단계로 가기
                </NextButton>
            </Content>
        </Container>
    );
};

export default CommonInterview;