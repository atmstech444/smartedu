"use client";
import { API_STORAGE } from "@/api/API_PATH";
import { GET_MyCourses } from "@/api/GET_MyCourses";
import { GET_WatchCourse, I_WatchCourse } from "@/api/GET_WatchCourse";
import { POST_MarkAsCompleted } from "@/api/POST_MarkAsCompleted";
import { PUT_WatchTime } from "@/api/PUT_WatchTime";
import Wrapper from "@/layout/DefaultWrapper";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Watching = ({ params }: { params: { id: number } }) => {
  const [lectures, setLectures] = useState<I_WatchCourse[]>([]);
  const id = params.id;
  const user = useAppSelector((state) => state.user.user);
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useAppDispatch();
  const [hasBought, setHasBought] = useState(false);
  const video_ref = useRef<HTMLVideoElement>(null);
  const router = useRouter();


  

  useEffect(() => {
    if (user) {
      GET_WatchCourse({ token: user?.token, id }).then((lectures) => {
        if (lectures) {
          setLectures(lectures);
          const lecturesFiltered = lectures.filter((lecture) => {
            if (lecture.video_progress) {
              return lecture.video_progress.is_completed;
            } else {
              return false;
            }
          });
          if (lecturesFiltered.length !== lectures.length) {
            setActiveIndex(lecturesFiltered.length);
          } else {
            setActiveIndex(0);
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    if (user) {
      GET_MyCourses({ token: user.token }, dispatch).then((resp) => {
        if (resp) {
          let course = resp.find((course) => {
            if (course) {
              return Number(course.id) === Number(id);
            } else {
              return false;
            }
          });
          if (!course) {
            router.push("/sign-in");
          } else {
            setHasBought(true);
          }
        }
      });
    } else {
      router.push("/sign-in");
    }
  }, [user]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      if (user && lectures[activeIndex]) {
        PUT_WatchTime({
          token: user.token,
          id: lectures[activeIndex].id,
          watched_time: video_ref.current?.currentTime || 0,
        });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (user && lectures[activeIndex] && video_ref.current) {
        PUT_WatchTime({
          token: user.token,
          id: lectures[activeIndex].id,
          watched_time: video_ref.current.currentTime || 0,
        });
      }
    };
  }, [lectures, activeIndex, user, video_ref.current]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = ""; // For Chrome
      return ""; // For other browsers
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [lectures]);

  useEffect(() => {
    const videoElement = video_ref.current;
    if (videoElement) {
      
      const handlePause = () => {
        const currentTime = Math.floor(videoElement.currentTime);
        if (user) {
          PUT_WatchTime({ token: user?.token, id: lectures[activeIndex].id, watched_time: currentTime });
        }
      };

      videoElement.addEventListener("pause", handlePause);

      return () => {
        videoElement.removeEventListener("pause", handlePause);
      };
    }
  }, [video_ref.current, lectures]);

  useEffect(() => {
    const videoElement = video_ref.current;
    const activeLecture = lectures[activeIndex];
    if (activeLecture && activeLecture.video_progress?.watched_time !== undefined) {
      if (videoElement) {
        if (lectures[activeIndex].video_progress?.watched_time) {
          console.log(activeLecture.video_progress.watched_time);
          videoElement.currentTime = activeLecture.video_progress.watched_time;
        }
      }
    }
  }, [video_ref.current, lectures]);

  useEffect(() => {
    const videoElement = video_ref.current;

    return () => {
      if (videoElement && user && lectures[activeIndex]) {
        const currentTime = Math.floor(videoElement.currentTime);
        PUT_WatchTime({ token: user.token, id: lectures[activeIndex].id, watched_time: currentTime });
      }
    };
  }, [lectures]);

  return (
    <Wrapper>
      {Number(hasBought && lectures.length > 0) && (
        <Main>
          <Content>
            <Left>
              <Video ref={video_ref} src={API_STORAGE + lectures[activeIndex].video_url} controls></Video>
              <Title>აღწერა</Title>
              <Description>{lectures[activeIndex].description}</Description>
            </Left>
            <Right>
              {lectures.map((lecture, index) => {
                return <LectureSwitch id={lecture.id} setActiveIndex={setActiveIndex} activeIndex={activeIndex} index={index} key={`lect${lecture.id}`} lecture={lecture} />;
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
  id: number;
}

const LectureSwitch = ({ lecture, index, activeIndex, setActiveIndex, id }: LectureSwitchProps) => {
  const user = useAppSelector((state) => state.user.user);
  const [isCompleted, setIsCompleted] = useState<boolean>(Boolean(lecture.video_progress?.is_completed));
  return (
    <Parent>
      <Flex>
        <i
          onClick={async () => {
            if (user) {
              try {
                POST_MarkAsCompleted({ token: user?.token, id });
                setIsCompleted(true);
              } catch {}
            }
          }}
          style={{ cursor: "pointer" }}
          className={`far  ${isCompleted ? "fa-check-square" : "fa-square"}`}
        ></i>
        <LectureTitle
          onClick={() => {
            setActiveIndex(index);
          }}
          isActive={index === activeIndex}
        >
          {lecture.title}
        </LectureTitle>
      </Flex>
      <Flex>
        <i className="far fa-clock"></i>
        <p style={{ margin: "0px", width: "65px" }}>{secondsToMinutes(lecture.video_duration)} წუთი</p>
      </Flex>
    </Parent>
  );
};
function secondsToMinutes(seconds: number): number {
  return Math.round(seconds / 60);
}

const Parent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  background-color: white;
  padding: 4px;
  padding-inline: 12px;
  width: 100%;
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

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default Watching;
