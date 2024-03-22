import React, { useState } from "react";

const ShopLevel = () => {
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
        Level
      </h3>
      <ul>
        <li>
          <div className="course-sidebar-list">
            <input className="edu-check-box" type="checkbox" id="e-lave" />
            <label className="edu-check-label" htmlFor="e-lave">
              All levels (5)
            </label>
          </div>
        </li>
        <li>
          <div className="course-sidebar-list">
            <input className="edu-check-box" type="checkbox" id="e-beg" />
            <label className="edu-check-label" htmlFor="e-beg">
              Beginner (36)
            </label>
          </div>
        </li>
        <li>
          <div className="course-sidebar-list">
            <input className="edu-check-box" type="checkbox" id="e-inter" />
            <label className="edu-check-label" htmlFor="e-inter">
              Intermediate (25)
            </label>
          </div>
        </li>
        <li>
          <div className="course-sidebar-list">
            <input className="edu-check-box" type="checkbox" id="e-exp" />
            <label className="edu-check-label" htmlFor="e-exp">
              Expert (32)
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ShopLevel;
