import Link from "next/link";
import { I_MyCourse } from "@/api/GET_MyCourses";
import { API_STORAGE } from "@/api/API_PATH";
import styled from "styled-components";

export default function CourseItem({ course }: { course: I_MyCourse }) {
  return (
    <Link href={`/watch/${course.id}`}>
      <div style={{ width: "250px", marginInline: "auto" }}>
        <div className="course__item white-bg mb-30 fix">
          <div className="course__thumb w-img p-relative fix">
            <img src={API_STORAGE + course.cover_image} width={250} height={150} alt="image not found" />
            <Title className="course__tag">{course.category.title}</Title>
          </div>
          <div className="course__content">
            <div className="course__meta d-flex align-items-center justify-content-between">
              <div className="course__lesson">
                <span>
                  <i className="far fa-book-alt"></i>
                  {course.lectures_count} გაკვეთილი
                </span>
              </div>
              <div className="course__rating">
                <span>
                  <i className="fas fa-star"></i>
                  {course.average_rating}
                </span>
              </div>
            </div>
            <h3 className="course__title" style={{ height: "50px" }}>
              {course.title}
            </h3>
            <div className="course__teacher d-flex align-items-center">
              <div className="course__teacher-thumb mr-15">
                <img src={API_STORAGE + course.lecturer.image} width={200} height={300} alt="image not found" />
              </div>
              <h6>
                {course.lecturer.first_name} {course.lecturer.last_name}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

const Title = styled.div`
  background-color: #588157;
  color: white;
  padding: 4px;
  border-radius: 24px;
  padding-inline: 16px;
`;
