"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const CourseReviewFrom = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    const form = document.querySelector("#yourFormId");
    if (form) {
      form.addEventListener("submit", handleSubmit);
    }
    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return (
    <>
      <form onClick={handleSubmit} action="#">
        <div className="row">
          <div className="col-xxl-6">
            <div className="course__form-input">
              <input type="text" placeholder="Your Name" />
            </div>
          </div>
          <div className="col-xxl-6">
            <div className="course__form-input">
              <input type="email" placeholder="Your Email" />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="course__form-input">
              <input type="text" placeholder="Review Title" />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="course__form-input">
              <div className="course__form-rating">
                <span>Rating : </span>
                <ul>
                  <li>
                    <Link href="#">
                      {" "}
                      <i className="icon_star"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      {" "}
                      <i className="icon_star"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      {" "}
                      <i className="icon_star"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="no-rating">
                      {" "}
                      <i className="icon_star"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="no-rating">
                      {" "}
                      <i className="icon_star"></i>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <textarea placeholder="Review Summary"></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="course__form-btn mt-10 mb-55">
              <button type="submit" className="e-btn">
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CourseReviewFrom;
