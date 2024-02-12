"use client";
import { API_STORAGE } from "@/api/API_PATH";
import { GET_MyCourses, I_MyCourse } from "@/api/GET_MyCourses";
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
  const [hasBought, setHasBought] = useState<any>(false);
  const video_ref = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      GET_WatchCourse({ token: user?.token, id }, dispatch).then((lectures) => {
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
            setHasBought(course);
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
        PUT_WatchTime(
          {
            token: user.token,
            id: lectures[activeIndex].id,
            watched_time: video_ref.current?.currentTime || 0,
          },
          dispatch
        );
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (user && lectures[activeIndex] && video_ref.current) {
        PUT_WatchTime(
          {
            token: user.token,
            id: lectures[activeIndex].id,
            watched_time: video_ref.current.currentTime || 0,
          },
          dispatch
        );
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
  }, [lectures, activeIndex]);

  useEffect(() => {
    const videoElement = video_ref.current;
    if (videoElement) {
      const handlePause = () => {
        const currentTime = Math.floor(videoElement.currentTime);
        if (user) {
          PUT_WatchTime({ token: user?.token, id: lectures[activeIndex].id, watched_time: currentTime }, dispatch);
        }
      };

      videoElement.addEventListener("pause", handlePause);

      return () => {
        videoElement.removeEventListener("pause", handlePause);
      };
    }
  }, [video_ref.current, lectures, activeIndex]);

  useEffect(() => {
    const videoElement = video_ref.current;
    const activeLecture = lectures[activeIndex];
    if (activeLecture && activeLecture.video_progress?.watched_time !== undefined) {
      if (videoElement) {
        if (lectures[activeIndex].video_progress?.watched_time) {
          videoElement.currentTime = activeLecture.video_progress.watched_time;
        }
      }
    }
  }, [video_ref.current, lectures, activeIndex]);

  useEffect(() => {
    const videoElement = video_ref.current;

    return () => {
      if (videoElement && user && lectures[activeIndex]) {
        const currentTime = Math.floor(videoElement.currentTime);
        PUT_WatchTime({ token: user.token, id: lectures[activeIndex].id, watched_time: currentTime }, dispatch);
      }
    };
  }, [lectures]);

  return (
    // <Wrapper>
    <>
      <p>teona</p>
      {/* {Number(hasBought && lectures.length > 0) && (
        <Main>
          <Content>
            <TitleCourse style={{ fontWeight: 500 }}>{hasBought.title}</TitleCourse>
            <Left>
              <Video ref={video_ref} src={API_STORAGE + lectures[activeIndex].video_url} controls></Video>
              <Title>აღწერა</Title>
              <Description>{lectures[activeIndex].description}</Description>
            </Left>
            <Right>
              {lectures.map((lecture, index) => (
                <LectureSwitch
                  id={lecture.id}
                  setActiveIndex={setActiveIndex}
                  activeIndex={activeIndex}
                  index={index}
                  key={lecture.id} // Assigning lecture.id as the key
                  lecture={lecture}
                />
              ))}
            </Right>
          </Content>
        </Main>
      )} */}
    </>

    // </Wrapper>
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
  const dispatch = useAppDispatch();
  return (
    <Parent isActive={index === activeIndex}>
      <Flex>
        <i
          onClick={async () => {
            if (user) {
              try {
                POST_MarkAsCompleted({ token: user?.token, id }, dispatch);
                setIsCompleted(!isCompleted);
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
          isActive={index >= activeIndex}
        >
          {lecture.title}
        </LectureTitle>
      </Flex>
      <Flex style={{ width: "115px", justifyContent: "center", backgroundColor: "#e9edff", padding: "4px 12px", borderRadius: "24px", color: "#2b4eff" }}>
        <i className="far fa-clock"></i>
        <p style={{ margin: "0px", color: "#2b4eff" }}>{secondsToMinutes(lecture.video_duration)} წუთი</p>
      </Flex>
    </Parent>
  );
};
function secondsToMinutes(seconds: number): number {
  return Math.round(seconds / 60);
}

const Parent = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px;
  padding-inline: 12px;
  width: 100%;
  border-radius: 4px;
  background-color: white;
  border: 1px solid white;
  border-color: ${(props) => (props.isActive ? "rgb(43, 78, 255)" : "white")};
`;

const TitleCourse = styled.p`
  color: black;
  font-weight: 500;
  font-size: 22px;
  grid-column: 1 / span 2;
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
  position: relative;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 12px;
  row-gap: 0px;
  @media (max-width: 1400px) {
    max-width: 1140px;
  }
  @media (max-width: 1200px) {
    max-width: 960px;
    display: flex;
    flex-direction: column;
    max-width: 720px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default Watching;
