import { useState } from "react";
import Image from "next/image";
import Empty_Courses from "../../../../public/assets/img/profile/empty-courses.jpg";
import styled from "styled-components";
import CourseItem from "./CourseItem";
export default function MyCourses() {
  const [courses, setCourses] = useState([1, 1, 1, 1, 1]);
  if (courses.length > 0) {
    return (
      <CourseWrapper>
        {courses.map((item, index) => (
          <CourseItem key={"sf" + index} />
        ))}
      </CourseWrapper>
    );
  } else {
    return (
      <EmptyWrapper>
        <Image width={300} src={Empty_Courses} alt="Empty Courses" />
        <P>შენ არ გაქვს კურსი ნაყიდი</P>
        <A className="e-btn" href="/course-grid">
          იყიდე კურსი
        </A>
      </EmptyWrapper>
    );
  }
}

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const A = styled.a`
  margin-top: 16px;
`;

const CourseWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-block: 24px;
  row-gap: 20px;
`;
