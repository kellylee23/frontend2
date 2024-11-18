import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { PrimaryButton } from '../components/Interview/Button';
import { Container, Content } from '../components/PageLayout';
import { TitleSection } from '../components/Interview/TitleSection';
import { BoldText, InfoBox } from '../components/Interview/InfoBox';
import { InputSection } from '../components/Interview/InputSection';

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
            <Header 
                title="공통 면접" 
                onBackClick={handleBackClick}
            />

            <Content>
                <TitleSection 
                    title="공통면접?"
                    subtitle={
                        <>
                            모든 지원자에게 동일한 질문을 통해<br/>
                            일관된 평가를 할 수 있도록 설계된 면접 <br/>
                            형식입니다.
                        </>
                    }
                />

                <InfoBox>
                    <div>일반적인 공통 질문에는</div>
                    <div><BoldText>자기소개, 지원 동기, 강점과 약점,</BoldText></div>
                    <div><BoldText>직무 관련 경험</BoldText>등이 포함될 수 있습니다.</div>
                </InfoBox>

                <InputSection
                    title="면접에 앞서 모집 공고의 링크가 필요해요!"
                    subtitle="모집공고에 기반하여 면접이 진행됩니다."
                    label="[모집공고 링크 입력]"
                    type="url"
                    placeholder="링크 입력..."
                    value={jobPostingUrl}
                    onChange={handleUrlChange}
                    error={error}
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

                <PrimaryButton 
                    onClick={handleNextClick}
                    disabled={!jobPostingUrl || !!error}
                >
                    다음 단계로 가기
                </PrimaryButton>
            </Content>
        </Container>
    );
};

export default CommonInterview;