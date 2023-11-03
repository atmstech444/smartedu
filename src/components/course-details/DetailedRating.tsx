import React from "react";

const DetailedRating = () => {
  return (
    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8">
      <div className="course__review-details grey-bg">
        <h5>Detailed Rating</h5>
        <div className="course__review-content mb-20">
          <div className="course__review-item d-flex align-items-center justify-content-between">
            <div className="course__review-text">
              <span>5 stars</span>
            </div>
            <div className="course__review-progress">
              <div className="single-progress" data-width="100%"></div>
            </div>
            <div className="course__review-percent">
              <h5>100%</h5>
            </div>
          </div>
          <div className="course__review-item d-flex align-items-center justify-content-between">
            <div className="course__review-text">
              <span>4 stars</span>
            </div>
            <div className="course__review-progress">
              <div className="single-progress" data-width="30%"></div>
            </div>
            <div className="course__review-percent">
              <h5>30%</h5>
            </div>
          </div>
          <div className="course__review-item d-flex align-items-center justify-content-between">
            <div className="course__review-text">
              <span>3 stars</span>
            </div>
            <div className="course__review-progress">
              <div className="single-progress" data-width="0%"></div>
            </div>
            <div className="course__review-percent">
              <h5>0%</h5>
            </div>
          </div>
          <div className="course__review-item d-flex align-items-center justify-content-between">
            <div className="course__review-text">
              <span>2 stars</span>
            </div>
            <div className="course__review-progress">
              <div className="single-progress" data-width="0%"></div>
            </div>
            <div className="course__review-percent">
              <h5>0%</h5>
            </div>
          </div>
          <div className="course__review-item d-flex align-items-center justify-content-between">
            <div className="course__review-text">
              <span>1 stars</span>
            </div>
            <div className="course__review-progress">
              <div className="single-progress" data-width="0%"></div>
            </div>
            <div className="course__review-percent">
              <h5>0%</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedRating;
