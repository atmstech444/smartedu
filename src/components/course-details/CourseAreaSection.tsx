import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseAreaSection = ({ course }: any) => {
  return (
    <>
      <div className="course__meta-2 d-sm-flex mb-30">
        <div className="course__teacher-3 d-flex align-items-center mr-70 mb-30">
          <div className="course__teacher-thumb-3 mr-15">
            <Image
              src={course?.tutorImg}
              style={{ width: "auto", height: "auto" }}
              alt="image not found"
            />
          </div>
          <div className="course__teacher-info-3">
            <h5>Teacher</h5>
            <p>
              <Link href="#">{course?.author}</Link>
            </p>
          </div>
        </div>
        <div className="course__update mr-80 mb-30">
          <h5>Last Update:</h5>
          <p>July 24, 2023</p>
        </div>
        <div className="course__rating-2 mb-30">
          <h5>Review:</h5>
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
        <Image
          src={course?.image}
          style={{ width: "100%", height: "auto" }}
          alt="image not found"
        />
      </div>
    </>
  );
};

export default CourseAreaSection;
