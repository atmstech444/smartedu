import React from "react";
import memberImg from "../../../public/assets/img/course/instructor/course-instructor-1.jpg";
import memberImgTwo from "../../../public/assets/img/course/instructor/course-instructor-2.jpg";
import memberImgThree from "../../../public/assets/img/course/instructor/course-instructor-3.jpg";
import Image from "next/image";

const CourseMember = () => {
  return (
    <>
      <div className="course__member mb-45">
        <div className="course__member-item">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6">
              <div className="course__member-thumb d-flex align-items-center">
                <Image
                  src={memberImg}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
                <div className="course__member-name ml-20">
                  <h5>Shahnewaz Sakil</h5>
                  <span>Engineer</span>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="course__member-info pl-45">
                <h5>07</h5>
                <span>Courses</span>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="course__member-info pl-70">
                <h5>05</h5>
                <span>Reviw</span>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="course__member-info pl-85">
                <h5>3.00</h5>
                <span>Rating</span>
              </div>
            </div>
          </div>
        </div>
        <div className="course__member-item">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6">
              <div className="course__member-thumb d-flex align-items-center">
                <Image
                  src={memberImgTwo}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
                <div className="course__member-name ml-20">
                  <h5>Lauren Stamps</h5>
                  <span>Teacher</span>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="course__member-info pl-45">
                <h5>05</h5>
                <span>Courses</span>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="course__member-info pl-70">
                <h5>03</h5>
                <span>Reviw</span>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="course__member-info pl-85">
                <h5>3.00</h5>
                <span>Rating</span>
              </div>
            </div>
          </div>
        </div>
        <div className="course__member-item">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 ">
              <div className="course__member-thumb d-flex align-items-center">
                <Image
                  src={memberImgThree}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
                <div className="course__member-name ml-20">
                  <h5>Jonquil Von</h5>
                  <span>Associate</span>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="course__member-info pl-45">
                <h5>09</h5>
                <span>Courses</span>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="course__member-info pl-70">
                <h5>07</h5>
                <span>Reviw</span>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4">
              <div className="course__member-info pl-85">
                <h5>4.00</h5>
                <span>Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseMember;
