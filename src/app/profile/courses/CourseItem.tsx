import Link from "next/link";
import Image from "next/image";
import { I_MyCourse } from "@/api/GET_MyCourses";
import { API_STORAGE } from "@/api/API_PATH";

export default function CourseItem({ course }: { course: I_MyCourse }) {
  return (
    <div style={{ width: "250px", marginInline: "auto" }}>
      <div className="course__item white-bg mb-30 fix">
        <div className="course__thumb w-img p-relative fix">
          <Link href={`/course-details/${course.id}`}>
            <img src={API_STORAGE + course.cover_image} width={250} height={150} alt="image not found" />
          </Link>
          <div className="course__tag">
            <Link href={`/course-details/${course.id}`} className={course.course_category_id ? `${course.course_category_id}` : ""}>
              {course.category.title}
            </Link>
          </div>
        </div>
        <div className="course__content">
          <div className="course__meta d-flex align-items-center justify-content-between">
            <div className="course__lesson">
              <span>
                <i className="far fa-book-alt"></i>
                {course.lectures_count} Lesson
              </span>
            </div>
            <div className="course__rating">
              <span>
                <i className="fas fa-star"></i>
                4.5 (45)
              </span>
            </div>
          </div>
          <h3 className="course__title">
            <Link href={`/course-details/${course.id}`}>{course.title}</Link>
          </h3>
          <div className="course__teacher d-flex align-items-center">
            <div className="course__teacher-thumb mr-15">
              <img src={API_STORAGE + course.lecturer.image} width={200} height={300} alt="image not found" />
            </div>
            <h6>
              <Link href="/instructor-details">
                {course.lecturer.first_name} {course.lecturer.last_name}
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
