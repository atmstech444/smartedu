import AccordionIconFour from "@/svg/accordion-icon-four";
import AccordionIconThree from "@/svg/accordion-icon-three";
import AccordionIconTwo from "@/svg/accordion-icon-two";
import AccordionIconOne from "@/svg/accordior-icon-one";
import React from "react";

const CourseTabAccordion = () => {
  return (
    <div className="course__curriculum">
      <div className="accordion" id="course__accordion">
        <div className="accordion-item mb-50">
          <h2 className="accordion-header" id="week-01">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#week-01-content"
              aria-expanded="true"
              aria-controls="week-01-content"
            >
              Week 01
            </button>
          </h2>
          <div
            id="week-01-content"
            className="accordion-collapse collapse show"
            aria-labelledby="week-01"
            data-bs-parent="#course__accordion"
          >
            <div className="accordion-body">
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconOne />
                  <h3>
                    {" "}
                    <span>Reading:</span> Ut enim ad minim veniam
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    {" "}
                    <i className="icon_clock_alt"></i> 14 minutes
                  </span>
                  <span className="question">2 questions</span>
                </div>
              </div>
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconTwo />
                  <h3>
                    {" "}
                    <span>Video: </span> Greetings and introduction
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    {" "}
                    <i className="icon_clock_alt"></i> 15 minutes
                  </span>
                </div>
              </div>
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconThree />
                  <h3>
                    {" "}
                    <span>Audio:</span> Interactive lesson
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    {" "}
                    <i className="icon_clock_alt"></i> 7 minutes
                  </span>
                  <span className="question">3 questions</span>
                </div>
              </div>
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconFour />
                  <h3>
                    {" "}
                    <span>Reading: </span> Ut enim ad minim veniam
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    {" "}
                    <i className="icon_clock_alt"></i> 22 minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion" id="course__accordion-2">
        <div className="accordion-item mb-50">
          <h2 className="accordion-header" id="week-02">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#week-02-content"
              aria-expanded="true"
              aria-controls="week-02-content"
            >
              Week 02
            </button>
          </h2>
          <div
            id="week-02-content"
            className="accordion-collapse  collapse show"
            aria-labelledby="week-02"
            data-bs-parent="#course__accordion-2"
          >
            <div className="accordion-body">
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconOne />
                  <h3>
                    {" "}
                    <span>Reading:</span> Ut enim ad minim veniam
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    {" "}
                    <i className="icon_clock_alt"></i> 14 minutes
                  </span>
                </div>
              </div>
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconTwo />
                  <h3>
                    {" "}
                    <span>Video: </span> Greetings and introduction
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    {" "}
                    <i className="icon_clock_alt"></i> 15 minutes
                  </span>
                </div>
              </div>
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconThree />
                  <h3>
                    {" "}
                    <span>Audio:</span> Interactive lesson
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    {" "}
                    <i className="icon_clock_alt"></i> 7 minutes
                  </span>
                  <span className="question">2 questions</span>
                </div>
              </div>
              <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                <div className="course__curriculum-info">
                  <AccordionIconFour />
                  <h3>
                    {" "}
                    <span>Reading: </span> Ut enim ad minim veniam
                  </h3>
                </div>
                <div className="course__curriculum-meta">
                  <span className="time">
                    {" "}
                    <i className="icon_clock_alt"></i> 22 minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTabAccordion;
