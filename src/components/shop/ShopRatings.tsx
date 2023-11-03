import React, { useState } from "react";

const ShopRatings = () => {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      className={`course-sidebar-info ${
        isActive ? "danger" : "content-hidden"
      }`}
    >
      <h3 className="drop-btn" onClick={handleToggle}>
        Ratings
      </h3>
      <ul>
        <li>
          <div className="course-sidebar-list">
            <input
              className="edu-check-box"
              type="radio"
              id="e-25"
              name="rating"
            />
            <label className="edu-check-star" htmlFor="e-25">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              (25)
            </label>
          </div>
        </li>
        <li>
          <div className="course-sidebar-list">
            <input
              className="edu-check-box"
              type="radio"
              id="e-24"
              name="rating"
            />
            <label className="edu-check-star" htmlFor="e-24">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fal fa-star"></i>
              (25)
            </label>
          </div>
        </li>
        <li>
          <div className="course-sidebar-list">
            <input
              className="edu-check-box"
              type="radio"
              id="e-12"
              name="rating"
            />
            <label className="edu-check-star" htmlFor="e-12">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fal fa-star"></i>
              <i className="fal fa-star"></i>
              (12)
            </label>
          </div>
        </li>
        <li>
          <div className="course-sidebar-list">
            <input
              className="edu-check-box"
              type="radio"
              id="e-28"
              name="rating"
            />
            <label className="edu-check-star" htmlFor="e-28">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fal fa-star"></i>
              <i className="fal fa-star"></i>
              <i className="fal fa-star"></i>
              (28)
            </label>
          </div>
        </li>
        <li>
          <div className="course-sidebar-list">
            <input
              className="edu-check-box"
              type="radio"
              id="e-14"
              name="rating"
            />
            <label className="edu-check-star" htmlFor="e-14">
              <i className="fas fa-star"></i> <i className="fal fa-star"></i>{" "}
              <i className="fal fa-star"></i>
              <i className="fal fa-star"></i>
              <i className="fal fa-star"></i>
              (14)
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ShopRatings;
