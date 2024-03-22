import Link from "next/link";
import React from "react";
import AuthorImgOne from "../../../public/assets/img/course/teacher/teacher-3.jpg";
import AuthorImgTwo from "../../../public/assets/img/course/teacher/teacher-2.jpg";
import AuthorImgThree from "../../../public/assets/img/course/teacher/teacher-1.jpg";
import Image from "next/image";

const CourseDescription = ({ desc }: { desc: string }) => {
  return (
    <>
      <div className="course__description">
        <h3>კურსის აღწერა</h3>
        <p>{desc}</p>

        {/* <div className="course__tag-2 mb-35 mt-35">
          <i className="fa-solid fa-tag"></i>
          <Link href="#">Big data,</Link>
          <Link href="#">Data analysis,</Link>
          <Link href="#">Data modeling</Link>
        </div>
        <div className="course__description-list mb-45">
          <h4>What is the Target Audience?</h4>
          <ul>
            <li>
              {" "}
              <i className="icon_check"></i> {`Business's`} managers, leaders
            </li>
            <li>
              {" "}
              <i className="icon_check"></i> Downloadable lectures, code and
              design assets for all projects
            </li>
            <li>
              {" "}
              <i className="icon_check"></i> Anyone who is finding a chance to
              get the promotion
            </li>
          </ul>
        </div>
        <div className="course__instructor mb-45">
          <h3>Other Instructors</h3>
          <div className="course__instructor-wrapper d-md-flex align-items-center">
            <div className="course__instructor-item d-flex align-items-center mr-70">
              <div className="course__instructor-thumb mr-20">
                <Image
                  src={AuthorImgOne}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </div>
              <div className="course__instructor-content">
                <h3>Eleanor Fant</h3>
                <p>Instructor</p>
              </div>
            </div>
            <div className="course__instructor-item d-flex align-items-center mr-70">
              <div className="course__instructor-thumb mr-20">
                <Image
                  src={AuthorImgTwo}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </div>
              <div className="course__instructor-content">
                <h3>Lauren Stamps</h3>
                <p>Teacher</p>
              </div>
            </div>
            <div className="course__instructor-item d-flex align-items-center mr-70">
              <div className="course__instructor-thumb mr-20">
                <Image
                  src={AuthorImgThree}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </div>
              <div className="course__instructor-content">
                <h3>Jonquil Von</h3>
                <p>Associate</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CourseDescription;
