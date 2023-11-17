import React from "react";
import PageTItleShape from "./PageTItleShap";
import CourseAreaSection from "./CourseAreaSection";
import CourseDescription from "./CourseDescription";
import CourseTabAccordion from "./CourseTabAccordion";
import CourseReview from "./CourseReview";
import CourseMember from "./CourseMembar";
import ShareCourse from "./ShereCourse";
import CourseRelated from "../Elements/Slider/RelatedCourseSlider";
import CourseSidebarArea from "./CourseSidebarArea";
import CtaSection from "../home/CtaSection";
import { idType } from "@/interFace/interFace";
import courses_data from "@/data/courses-data";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";

const CourseDetailsMain = ({ id }: idType) => {
  const course: any = courses_data.find((item) => item.id == id);
  return (
    <>
      <Breadcrumb title="Course Details" subTitle="Course Details" />
      <section className="page__title-area pt-120 pb-90">
        <PageTItleShape />
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="course__wrapper">
                <div className="page__title-content mb-25">
                  <span className="page__title-pre">{course?.category}</span>
                  <h5 className="page__title-3">{course?.title}</h5>
                </div>
                <CourseAreaSection course={course} />

                <div className="course__tab-2 mb-45">
                  <ul className="nav nav-tabs" id="courseTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                        type="button"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        {" "}
                        <i className="fas fa-ribbon"></i>{" "}
                        <span>Discription</span>{" "}
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link "
                        id="curriculum-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#curriculum"
                        type="button"
                        role="tab"
                        aria-controls="curriculum"
                        aria-selected="false"
                      >
                        {" "}
                        <i className="fas fa-book"></i> <span>Curriculum</span>{" "}
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="review-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#review"
                        type="button"
                        role="tab"
                        aria-controls="review"
                        aria-selected="false"
                      >
                        {" "}
                        <i className="far fa-star"></i> <span>Reviews</span>{" "}
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="member-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#member"
                        type="button"
                        role="tab"
                        aria-controls="member"
                        aria-selected="false"
                      >
                        {" "}
                        <i className="fal fa-user"></i> <span>Members</span>{" "}
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="course__tab-content mb-95">
                  <div className="tab-content" id="courseTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <CourseDescription />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="curriculum"
                      role="tabpanel"
                      aria-labelledby="curriculum-tab"
                    >
                      <CourseTabAccordion />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="review"
                      role="tabpanel"
                      aria-labelledby="review-tab"
                    >
                      <CourseReview />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="member"
                      role="tabpanel"
                      aria-labelledby="member-tab"
                    >
                      <CourseMember />
                    </div>
                    <ShareCourse />
                  </div>
                </div>
                <CourseRelated />
              </div>
            </div>
            <CourseSidebarArea course={course} />
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
};

export default CourseDetailsMain;
