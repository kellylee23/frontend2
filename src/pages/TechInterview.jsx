import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Dropdown } from '../components/Interview/Dropdown';
import { PrimaryButton } from '../components/Interview/Button';
import { Container, Content } from '../components/PageLayout';
import { TitleSection } from '../components/Interview/TitleSection';
import { BoldText, InfoBox } from '../components/Interview/InfoBox';
import { CommonSection, CommonLabel } from '../components/Interview/CommonSection';

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
        }
    };

    return (
        <Container>
            <Header 
                title="기술 면접" 
                onBackClick={handleBackClick}
            />

            <Content>
                <TitleSection 
                    title="기술면접?"
                    subtitle={
                        <>
                            지원자의 전문 지식과<br/>
                            기술적 능력을 평가하기 위한 면접입니다.
                        </>
                    }
                />

                <InfoBox>
                    <div><BoldText>이공계 직무</BoldText>에서 많이 실시되며,</div>
                    <div>지원자가 해당 직무에서</div>
                    <div>필요한 <BoldText>기술적 문제를</BoldText></div>
                    <div><BoldText>해결할 수 있는지</BoldText></div>
                    <div>확인하기 위해 진행됩니다.</div>
                </InfoBox>

                <CommonSection
                    title="면접에 앞서 이력서를 선택해주세요!"
                    subtitle="이력서에 기반하여 면접이 진행됩니다."
                >
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
                    disabled={!selectedResume}
                >
                    다음 단계로 가기
                </PrimaryButton>
            </Content>
        </Container>
    );
};

export default TechInterview;