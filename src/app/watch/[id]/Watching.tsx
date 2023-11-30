"use client";
import { API_STORAGE } from "@/api/API_PATH";
import { GET_WatchCourse, I_WatchCourse } from "@/api/GET_WatchCourse";
import Wrapper from "@/layout/DefaultWrapper";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Watching = ({ params }: { params: { id: number } }) => {
  const [lectures, setLectures] = useState<I_WatchCourse[]>([]);
  const id = params.id;
  const user = useAppSelector((state) => state.user.user);
  const [activeIndex, setActiveIndex] = useState(0);
  const myCourses = useAppSelector((state) => state.myCourses.courses);
  const hasBought = myCourses.find((course) => {
    if (course) {
      return Number(course.id) === Number(id);
    } else {
      return false;
    }
  });

  const router = useRouter();
  useEffect(() => {
    if (!user || !hasBought) {
      router.push("/sign-in");
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      GET_WatchCourse({ token: user?.token, id }).then((lectures) => {
        if (lectures) {
          setLectures(lectures);
        }
      });
    }
  });

  return (
    <Wrapper>
      {Number(hasBought && lectures.length > 0) && (
        <Main>
          <Content>
            <Left>
              <Video src={API_STORAGE + lectures[activeIndex].video_url} controls></Video>
              <Title>აღწერა</Title>
              <Description>{lectures[activeIndex].description}</Description>
            </Left>
            <Right>
              {lectures.map((lecture, index) => {
                return <LectureSwitch setActiveIndex={setActiveIndex} activeIndex={activeIndex} index={index} key={`lect${lecture.id}`} lecture={lecture} />;
              })}
            </Right>
          </Content>
        </Main>
      )}
    </Wrapper>
  );
};

interface LectureSwitchProps {
  lecture: I_WatchCourse;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const LectureSwitch = ({ lecture, index, activeIndex, setActiveIndex }: LectureSwitchProps) => {
  return (
    <Parent>
      <i
        onClick={() => {
          setActiveIndex(index + 1);
        }}
        style={{ cursor: "pointer" }}
        className={`far  ${activeIndex > index ? "fa-check-square" : "fa-square"}`}
      ></i>
      <LectureTitle
        onClick={() => {
          setActiveIndex(index);
        }}
        isActive={index === activeIndex}
      >
        {lecture.title}
      </LectureTitle>
    </Parent>
  );
};

const Parent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LectureTitle = styled.p<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "black" : "gray")};
  font-size: 16px;
  margin: 0px;
  cursor: pointer;
`;

const Left = styled.div`
  width: 100vw;
  max-width: 800px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.p`
  color: black;
  font-weight: 700;
  font-size: 22px;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const Description = styled.p``;

const Video = styled.video`
  width: 100vw;
  max-width: 800px;
`;

const Main = styled.main`
  background-color: #f3f4f8;
  min-height: 100dvh;
  padding-top: 66px;
  @media (max-width: 1080px) {
    padding-top: 46px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-block: 64px;
  display: flex;
  gap: 36px;
  @media (max-width: 1400px) {
    max-width: 1140px;
  }
  @media (max-width: 1200px) {
    max-width: 960px;
  }
  @media (max-width: 996px) {
    max-width: 720px;
  }
`;

export default Watching;
