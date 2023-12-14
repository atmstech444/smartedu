import Image from "next/image";
import Empty_Courses from "../../../../public/assets/img/profile/empty-courses.jpg";
import styled from "styled-components";
import CourseItem from "./CourseItem";
import { useAppSelector } from "@/redux/store";
export default function MyCourses() {
  const courses = useAppSelector((state) => state.myCourses.courses);
  if (courses.length > 0) {
    let unwatched = courses.filter((course) => course.completion_percentage !== 100);
    let watched = courses.filter((course) => course.completion_percentage === 100);
    return (
      <div style={{ padding: "24px" }}>
        {unwatched.length > 0 && <CourseWrapper>{unwatched.map((item, index) => item && <CourseItem course={item} key={"sf" + index} />)}</CourseWrapper>}
        {watched.length > 0 && (
          <>
            <Devider />
            <Title>გავლილი კურსები</Title>
            <CourseWrapper>{watched.map((item, index) => item && <CourseItem course={item} key={"sf" + index} />)}</CourseWrapper>
          </>
        )}
      </div>
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

const Devider = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 8px;
  background-color: #e4e3e3;
  margin-bottom: 32px;
  margin-top: 32px;
`;

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: black;
  font-weight: 600;
  padding-left: 32px;
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
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
  row-gap: 20px;
`;
