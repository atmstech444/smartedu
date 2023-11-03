import Link from "next/link";
import React from "react";

const CourseReviewRating = () => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
      <div className="course__review-rating-info grey-bg text-center">
        <h5>5</h5>
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
              <i className="fas fa-star"></i>{" "}
            </Link>
          </li>
        </ul>
        <p>5 Ratings</p>
      </div>
    </div>
  );
};

export default CourseReviewRating;
