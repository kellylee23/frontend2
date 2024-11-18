import styled from "styled-components";
import { Icon } from '@iconify/react';
import { WaveIcon, WaveIcon2, Voice, Breathe, Speed } from "../../img/svgs";


const Boxscore = styled.div`
  background-color: #D9D9D9;
  width: 62px;
  height: 56px;
  margin-top: 13px;
  border-radius: 10px;
  position: relative;
  margin-left: 7px;
  margin-right: 7px;
`;

const BoxscoreTitle = styled.div`
  color: #3A00F9;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  text-align: center;
  margin-top: 6px;
  margin-bottom: 10px;
`;

const BoxscoreBottom = styled.div`
  color: #3A00F9;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  text-align: center;
  margin-top: 25px;
`;

const StyledWaveIcon = styled.div`
  position: absolute;
  top: 30px; /* 아이콘이 아래쪽으로 이동 */
  left: 0; /* 가운데 정렬을 위해 추가 */
  right: 0; /* 가운데 정렬을 위해 추가 */
  z-index: 2; /* 위에 올릴 아이콘 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWaveIcon2 = styled.div`
  position: absolute;
  top: 21px; /* 위쪽으로 이동 */
  left: 0; /* 가운데 정렬을 위해 추가 */
  right: 0; /* 가운데 정렬을 위해 추가 */
  z-index: 1; /* 아래에 놓을 아이콘 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledVoice = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;



const Boxscores = () => {
    return (
      <>
      <Boxscore> 
          <BoxscoreTitle>음역</BoxscoreTitle>  
          <StyledWaveIcon>
              <WaveIcon />
          </StyledWaveIcon>
          <StyledWaveIcon2>
              <WaveIcon2 />
        </StyledWaveIcon2>
          <BoxscoreBottom>일치율 50%</BoxscoreBottom>
      </Boxscore>

      <Boxscore> 
          <BoxscoreTitle>성량</BoxscoreTitle>  
          <StyledVoice><Voice /></StyledVoice>
          <BoxscoreBottom>일치율 100%</BoxscoreBottom>
      </Boxscore>

      <Boxscore> 
          <BoxscoreTitle>호흡</BoxscoreTitle>  
          <StyledVoice><Breathe /></StyledVoice>
          <BoxscoreBottom>일치율 90%</BoxscoreBottom>
      </Boxscore>

      <Boxscore> 
          <BoxscoreTitle>속도</BoxscoreTitle>  
          <StyledVoice><Speed /></StyledVoice>
          <BoxscoreBottom>일치율 60%</BoxscoreBottom>
      </Boxscore>
      </>
    );
  }
  
  export default Boxscores;