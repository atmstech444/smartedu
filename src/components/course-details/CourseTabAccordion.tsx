import { I_Course_Details } from "@/api/GET_CourseDetails";
import React from "react";

const CourseTabAccordion = ({ course }: { course: I_Course_Details }) => {
  return (
    <div className="course__curriculum">
      {course.syllabus.map((item, index) => {
        return (
          <div key={`acc-${item.course_id}`} className="accordion" id="course__accordion">
            <div className="accordion-item mb-50">
              <h2 className="accordion-header" id={`week-${index}`}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#week-${index}-content`} aria-expanded="true" aria-controls={`week-${index}-content`}>
                  {item.title}
                </button>
              </h2>
              <div id={`week-${index}-content`} className="accordion-collapse collapse show" aria-labelledby={`week-${index}`} data-bs-parent="#course__accordion">
                <div className="accordion-body">
                  {item.descriptions.map((description, index) => {
                    return (
                      <div key={`des-${description.course_syllabus_id}`} className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                        <div className="course__curriculum-info">
                          <h3>
                            <span>{description.description}</span>
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseTabAccordion;
