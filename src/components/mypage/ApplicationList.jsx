import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//지원서
const Box3 = styled.div`
  box-sizing: border-box;
  width: 330px;
  height: 206px;
  margin-top: 52px;
  /* margin-left: 25px; */
  /* margin-right: 25px; */
  border: 1px solid #000000;
  border-radius: 10px;
  position: relative;
`;
const Modi3 = styled.button`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  background-color: #3a00f9;
  border-radius: 30px;
  color: white;
  border: none;
  width: 68px;
  height: 23px;
  padding: 3px 6px;
  white-space: nowrap;
  text-align: center;
  margin: 167px 14px 16px 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Fixed = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  position: absolute;
`;
const Changes = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  position: absolute;
  flex-direction: row;
`;

const ApplicationList = ({ accessToken }) => {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER}/api/user/applicationList`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.status === 200) {
          setApplications(response.data); // API로부터 받은 데이터 저장
        } else {
          console.error("지원서 목록을 가져오는 데 실패했습니다.");
        }
      } catch (error) {
        console.error("지원서 목록 조회 오류:", error);
      }
    };

    fetchApplications();
  }, [accessToken]);
  return (
    <Box3>
      <Fixed style={{ marginTop: "29px", marginLeft: "20px" }}>
        나의 지원서
      </Fixed>
      {applications.length > 0
        ? applications.map((application, index) => (
            <Changes
              key={application.applicationId}
              style={{ marginTop: `${index * 50 + 30}px` }}
            >
              {application.name}
            </Changes>
          ))
        : console.log("지원서 없음")}
      <Modi3 onClick={() => navigate("/mypage/introduction")}>업로드하기</Modi3>
    </Box3>
  );
};

export default ApplicationList;
