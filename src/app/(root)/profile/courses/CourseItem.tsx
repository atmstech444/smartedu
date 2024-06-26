import Link from "next/link";
import { I_MyCourse } from "@/api/GET_MyCourses";
import { API_STORAGE } from "@/api/API_PATH";
import { useRouter } from "next/navigation";

export default function CourseItem({ course }: { course: I_MyCourse }) {
  const navigate = useRouter();
  const handleClick = () => {
    navigate.push(`/watch/${course.id}`);
  };

  return (
    <div style={{ width: "250px", marginInline: "auto", cursor: "pointer" }}>
      <div onClick={handleClick}>
        <div style={{ height: "340px" }}>
          <div className="course__item white-bg mb-30 fix">
            <div className="course__thumb w-img p-relative fix">
              <img src={API_STORAGE + course.cover_image} width={250} height={150} alt="image not found" />
              <p className="course__tag">
                <a href={`/watch/${course.id}`}>{course.category.title}</a>
              </p>
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
                    {course.average_rating.toFixed(1)}
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
      </div>
    </div>
  );
}
