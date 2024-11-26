import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Box1 from "../components/mypage/IntroInput";
import Box2 from "../components/mypage/IntroInput";
import Box3 from "../components/mypage/IntroInput";
import Box4 from "../components/mypage/IntroInput";
import { Plus } from "../img/svgs";
import axios from "axios";

const Title = styled.div`
  margin-top: 88px;
  margin-bottom: 10px;
  text-align: center;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
`;
const Titles = styled.input`
  font-size: 20px;
  color: #000000;
  text-align: center;
  border: none;
  outline: none;
  width: 340px;
  border-radius: 10px;
  &:focus {
    border: 1px solid;
    border-color: #3a00f9; /* 포커스 시 보라색 */
  }
`;

const Maindiv = styled.div`
  box-sizing: border-box;
  width: 340px;
  height: 642px;
  border: 1px solid #000000;
  border-radius: 10px;
  position: relative;
  margin-left: 25px;
  margin-right: 25px;
`;

const Subtitle = styled.div`
  position: absolute;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #000000;
  margin-left: 15px;
`;

const MDdiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Modi1 = styled.button`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  background-color: #d9d9d9;
  border-radius: 30px;
  color: #3a00f9;
  border: none;
  width: 70px;
  height: 22px;
  white-space: nowrap;
  text-align: center;
  margin-top: 16px;
  margin-left: 190px;
`;

const Modi2 = styled.button`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  background-color: #3a00f9;
  border-radius: 30px;
  color: white;
  border: none;
  width: 70px;
  height: 22px;
  white-space: nowrap;
  text-align: center;
  margin-top: 16px;
  margin-left: 33px;
  margin-bottom: 80px;
  flex-direction: row;
`;

const Qdiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 250px;
  margin-top: 621px;
`;

const Ques = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  color: #d9d9d9;
`;

const Introduction = () => {
  const navigate = useNavigate();
  const [motivation, setMotivation] = useState();
  const [teamwork, setTeamwork] = useState();
  const [effort, setEffort] = useState();
  const [aspiration, setAspiration] = useState();
  const [applicationId, setApplicationId] = useState(null);

  const handleBoxClick = () => {
    navigate("/mypage");
  };

  const handleSaveOrUpdate = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const url = applicationId
      ? `${process.env.REACT_APP_SERVER}/api/user/application?applicationId=${applicationId}` // Update
      : `${process.env.REACT_APP_SERVER}/api/user/application`; // Save

    const method = applicationId ? "put" : "post";

    try {
      const response = await axios({
        method: method,
        url: url,
        data: {
          name: "지원서1",
          motivation: motivation,
          teamwork: teamwork,
          aspiration: aspiration,
          effort: effort,
          customQuestions: [
            { question: "자신의 강점은?", answer: "끈기와 열정입니다." },
            {
              question: "어려운 상황에서 극복한 경험은?",
              answer: "팀원과의 갈등을 해결한 경험이 있습니다.",
            },
          ],
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        alert(applicationId ? "수정되었습니다!" : "저장되었습니다!");
        setApplicationId(response.data.id);
      } else {
        alert(`요청에 실패했습니다: ${response.data}`);
      }
    } catch (error) {
      console.error("Error handling application:", error);
      alert("저장/수정에 실패했습니다.");
    }
  };

  useEffect(() => {
    const fetchApplicationData = async () => {
      const accessToken = localStorage.getItem("accessToken");

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER}/api/user/application?applicationId=${applicationId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          const { motivation, teamwork, effort, aspiration, id } =
            response.data;
          setMotivation(motivation);
          setTeamwork(teamwork);
          setEffort(effort);
          setAspiration(aspiration);
          setApplicationId(id);
        } else {
          console.log("No application found");
        }
      } catch (error) {
        console.error("Error fetching application:", error);
      }
    };

    fetchApplicationData();
  }, [applicationId]);

  const handleInput = (e, field) => {
    const value = e.target.value;
    if (field === "motivation") {
      setMotivation(value);
    } else if (field === "teamwork") {
      setTeamwork(value);
    } else if (field === "effort") {
      setEffort(value);
    } else if (field === "aspiration") {
      setAspiration(value);
    }
  };

  return (
    <>
      <Title>
        <Titles placeholder="지원서명을 작성해주세요." />
      </Title>
      <Maindiv>
        <Subtitle style={{ marginTop: "19px" }}>
          1. 지원동기를 적어주세요.
        </Subtitle>
        <Box1
          type="text"
          value={motivation}
          onChange={(e) => handleInput(e, "motivation")}
        />
        <Subtitle style={{ marginTop: "162px" }}>
          2. 기억에 남는 팀 활동과 팀 내 본인의 역할을 적어주세요.
        </Subtitle>
        <Box2
          type="text"
          value={teamwork}
          onChange={(e) => handleInput(e, "teamwork")}
        />
        <Subtitle style={{ marginTop: "303px" }}>
          3. 직무에 필요한 전문성(지식/기술)을 쌓기 위하여 <br />
          어떠한 노력을 하였는지 적어주세요.
        </Subtitle>
        <Box3
          type="text"
          value={effort}
          onChange={(e) => handleInput(e, "effort")}
        />
        <Subtitle style={{ marginTop: "456px" }}>
          4. 입사 후의 포부를 적어주세요.
        </Subtitle>
        <Box4
          type="text"
          value={aspiration}
          onChange={(e) => handleInput(e, "aspiration")}
        />
        <Qdiv>
          <Ques>질문 추가하기</Ques>
          <Plus />
        </Qdiv>
      </Maindiv>
      <MDdiv>
        <Modi1 onClick={handleBoxClick}>목록으로</Modi1>
        <Modi2 onClick={handleSaveOrUpdate}>수정완료</Modi2>
      </MDdiv>
    </>
  );
};

export default Introduction;
