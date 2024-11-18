import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { InputSection } from '../components/Interview/InputSection';
import { Dropdown } from '../components/Interview/Dropdown';
import { PrimaryButton } from '../components/Interview/Button';
import { Container, Content } from '../components/PageLayout';
import { TitleSection } from '../components/Interview/TitleSection';
import { BoldText, InfoBox } from '../components/Interview/InfoBox';
import { CommonSection, CommonLabel } from '../components/Interview/CommonSection';

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
            <Header 
                title="통합 면접" 
                onBackClick={handleBackClick}
            />
            <Content>
                <TitleSection 
                    title="통합면접?"
                    subtitle={
                        <>
                            기술 면접과 공통 면접을<br/>
                            함께 진행하는 면접 형식입니다.
                        </>
                    }
                />
                <InfoBox>
                    <div>지원자의 전문 지식과 기술적</div>
                    <div>능력을 평가하는<BoldText>기술 면접</BoldText>과</div>
                    <div>동일한 질문을 통해 일관된 평가가</div>
                    <div>가능하도록 설계된 <BoldText>공통 면접</BoldText>이</div>
                    <div><BoldText>함께 진행됩니다.</BoldText></div>
                </InfoBox>

                <CommonSection
                    title="모집 공고의 링크와 이력서가 필요해요!"
                    subtitle="모집공고와 이력서에 기반하여 면접이 진행됩니다."
                >
                    <CommonLabel>[모집공고 링크 입력]</CommonLabel>
                    <InputSection
                        type="url"
                        placeholder="링크 입력..."
                        value={jobPostingUrl}
                        onChange={handleUrlChange}
                        error={urlError}
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
                    
                    <CommonLabel>[이력서 선택]</CommonLabel>
                    <Dropdown 
                        isOpen={isDropdownOpen}
                        onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
                        selected={selectedResume}
                        options={resumes}
                        onSelect={handleResumeSelect}
                        placeholder="기본 이력서 선택하기"
                    />
                </CommonSection>

                <PrimaryButton 
                    onClick={handleNextClick}
                    disabled={!jobPostingUrl || !!urlError || !selectedResume}
                >
                    다음 단계로 가기
                </PrimaryButton>
            </Content>
        </Container>
    );
};

export default IntegratedInterview;