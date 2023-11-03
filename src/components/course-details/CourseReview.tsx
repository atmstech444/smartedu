import React from "react";
import CourseReviewRating from "./CourseReviewRating";
import DetailedRating from "./DetailedRating";
import CourseComment from "./CourseComment";
import CourseReviewFrom from "@/form/course-review-form";

const CourseReview = () => {
  return (
    <div className="course__review">
      <h3>Reviews</h3>
      <p>
        Gosh william {`I'm`} telling crikey burke I {`don't`} want no agro A bit
        of {`how's`} your father bugger all mate off his nut that, what a
        plonker cuppa owt to do
      </p>

      <div className="course__review-rating mb-50">
        <div className="row g-0">
          <CourseReviewRating />
          <DetailedRating />
        </div>
      </div>
      <div className="course__comment mb-75">
        <h3>2 Comments</h3>
        <CourseComment />
      </div>
      <div className="course__form">
        <h3>Write a Review</h3>
        <div className="course__form-inner">
          <CourseReviewFrom />
        </div>
      </div>
    </div>
  );
};

export default CourseReview;
