import { API_STORAGE } from "@/api/API_PATH";
import { I_MyCourse } from "@/api/GET_MyCourses";
import { POST_Rate } from "@/api/POST_Rate";
import { useAppSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function RateCourse({ course }: { course: I_MyCourse }) {
  const [rate, setRate] = useState(0);
  const [isRated, setIsRated] = useState<number | null>(null);
  const user = useAppSelector((state) => state.user.user);
  useEffect(() => {
    if (isRated && user) {
      POST_Rate({ course_id: course.id, token: user.token, rating: isRated });
    }
  }, [isRated]);
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          onMouseEnter={() => {
            setRate(i + 1);
          }}
          onMouseLeave={() => {
            if (isRated) {
              setRate(isRated);
            } else {
              setRate(0);
            }
          }}
          onClick={() => {
            setIsRated(i + 1);
            setRate(i + 1);
          }}
          className={`fa-${rate <= i ? "regular" : "solid"} fa-star${i < rate ? " rated" : ""}`}
        ></Star>
      );
    }
    return stars;
  };

  return (
    <Wrapper>
      <Header>
        <Icon src={API_STORAGE + course.cover_image} />
        <Title>{course.title}</Title>
      </Header>
      <StarsWrapper>{renderStars()}</StarsWrapper>
    </Wrapper>
  );
}

const Star = styled.i`
  color: #ffb703;
  cursor: pointer;
`;

const StarsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 32px;
  font-size: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #f3f5f8;
  padding: 16px;
  position: relative;
  border-radius: 8px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: black;
  margin: 0;
`;

const Icon = styled.img`
  width: 30px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #7e7a7a;
`;
