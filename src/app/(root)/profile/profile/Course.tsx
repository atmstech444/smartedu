import { API_STORAGE } from "@/api/API_PATH";
import { I_MyCourse } from "@/api/GET_MyCourses";
import { log } from "console";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Course({ course }: { course: I_MyCourse }) {
  return (
    <Wrapper>
      <Header>
        <Icon src={API_STORAGE + course.cover_image} />
        <Title>{course.title}</Title>
      </Header>
      <ProgressText>{Math.round(course.completion_percentage)}%</ProgressText>
      <Progress max={100} value={Math.round(course.completion_percentage)} />

      <Link href={`/watch/${course.id}`}>
        <Button>{`${Math.round(course.completion_percentage) !== 0}` ? "განაგრძე კურსი" : "დაიწყე"}</Button>
      </Link>
    </Wrapper>
  );
}

const Button = styled.button`
  width: 130px;
  height: 40px;
  background-color: #2b4eff;
  border-radius: 8px;
  color: white;
  margin-top: 16px;
  margin-left: auto;
  display: block;
`;

const Progress = styled.progress`
  width: 100%;
  margin-top: 30px;
`;

const ProgressText = styled.p`
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  top: 50px;
  right: 16px;
  color: #818181;
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
