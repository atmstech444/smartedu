import { API_STORAGE } from "@/api/API_PATH";
import { I_Course_Details } from "@/api/GET_CourseDetails";
import Link from "next/link";
import React from "react";

const CourseAreaSection = ({ course }: { course: I_Course_Details }) => {
  const stars = [];
  for (let i = 1; i <= course.average_rating; i++) {
    stars.push(
      <li>
        <Link href="#">
          {" "}
          <i className="fas fa-star"></i>{" "}
        </Link>
      </li>
    );
  }
  if (course.average_rating % 1 !== 0) {
    stars.push(
      <li>
        <Link href="#">
          {" "}
          <i className="fa-solid fa-star-half-stroke"></i>{" "}
        </Link>
      </li>
    );
  }
  return (
    <>
      <div className="course__meta-2 d-sm-flex mb-30">
        <div className="course__teacher-3 d-flex align-items-center mr-70 mb-30">
          <div className="course__teacher-thumb-3 mr-15">
            <img src={API_STORAGE + course.lecturer.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
          </div>
          <div className="course__teacher-info-3">
            <h5>ტუტორი</h5>
            <p style={{ fontWeight: 500 }}>
              <Link href="#">
                {course.lecturer.first_name} {course.lecturer.last_name}
              </Link>
            </p>
          </div>
        </div>
        {/* <div className="course__update mr-80 mb-30">
          <h5>Last Update:</h5>
          <p>July 24, 2023</p>
        </div> */}
        <div className="course__rating-2 mb-30">
          {course.average_rating !== 0 ? (
            <>
              <h5>შეფასება:</h5>
              <div className="course__rating-inner d-flex align-items-center">
                <ul>{stars}</ul>
                <p>{course.average_rating}</p>
              </div>
            </>
          ) : (
            <p>შეფასება არ არის</p>
          )}
        </div>
      </div>
      <div className="course__img w-img mb-30">
        <img src={API_STORAGE + course.cover_image} style={{ width: "100%", height: "400px" }} alt="image not found" />
      </div>
    </>
  );
};

export default CourseAreaSection;
