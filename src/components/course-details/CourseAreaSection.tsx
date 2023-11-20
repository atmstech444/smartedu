import { API_STORAGE } from "@/api/API_PATH";
import { I_Course_Details } from "@/api/GET_CourseDetails";
import Link from "next/link";
import React from "react";

const CourseAreaSection = ({ course }: { course: I_Course_Details }) => {
  return (
    <>
      <div className="course__meta-2 d-sm-flex mb-30">
        <div className="course__teacher-3 d-flex align-items-center mr-70 mb-30">
          <div className="course__teacher-thumb-3 mr-15">
            <img src={API_STORAGE + course.lecturer.image} style={{ width: "auto", height: "auto" }} alt="image not found" />
          </div>
          <div className="course__teacher-info-3">
            <h5>მენტორი</h5>
            <p>
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
          <h5>შეფასება:</h5>
          <div className="course__rating-inner d-flex align-items-center">
            <ul>
              <li>
                <Link href="#">
                  {" "}
                  <i className="fas fa-star"></i>{" "}
                </Link>
              </li>
              <li>
                <Link href="#">
                  {" "}
                  <i className="fas fa-star"></i>{" "}
                </Link>
              </li>
              <li>
                <Link href="#">
                  {" "}
                  <i className="fas fa-star"></i>{" "}
                </Link>
              </li>
              <li>
                <Link href="#">
                  {" "}
                  <i className="fas fa-star"></i>{" "}
                </Link>
              </li>
              <li>
                <Link href="#">
                  {" "}
                  <i className="fa-solid fa-star-half-stroke"></i>{" "}
                </Link>
              </li>
            </ul>
            <p>4.5</p>
          </div>
        </div>
      </div>
      <div className="course__img w-img mb-30">
        <img src={API_STORAGE + course.cover_image} style={{ width: "100%", height: "400px" }} alt="image not found" />
      </div>
    </>
  );
};

export default CourseAreaSection;
