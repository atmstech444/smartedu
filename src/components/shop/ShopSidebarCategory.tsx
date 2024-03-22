import React, { useState } from "react";

const ShopSidebarCategory = () => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div
      className={`course-sidebar-info ${
        isActive ? "danger" : "content-hidden"
      }`}
    >
      <h3 className="drop-btn" onClick={handleToggle}>
        Categories
      </h3>
      <ul>
        <li>
          <div className="course-sidebar-list">
            <input className="edu-check-box" type="checkbox" id="e-bus" />
            <label className="edu-check-label" htmlFor="e-bus">
              Business (12)
            </label>
          </div>
        </li>
        <li>
          <div className="course-sidebar-list">
            <input className="edu-check-box" type="checkbox" id="e-dev" />
            <label className="edu-check-label" htmlFor="e-dev">
              Development (9)
            </label>
          </div>
        </li>
        <li>
          <div className="course-sidebar-list">
            <input className="edu-check-box" type="checkbox" id="e-data" />
            <label className="edu-check-label" htmlFor="e-data">
              Data Science (25)
            </label>
          </div>
        </li>
        <li>
          <div className="course-sidebar-list">
            <input className="edu-check-box" type="checkbox" id="e-art" />
            <label className="edu-check-label" htmlFor="e-art">
              Arts & Design (10)
            </label>
          </div>
        </li>
        <li>
          <div className="course-sidebar-list">
            <input className="edu-check-box" type="checkbox" id="e-mark" />
            <label className="edu-check-label" htmlFor="e-mark">
              Marketing (22)
            </label>
          </div>
        </li>
        <li>
          <div className="course-sidebar-list">
            <input className="edu-check-box" type="checkbox" id="e-heal" />
            <label className="edu-check-label" htmlFor="e-heal">
              Health & Fitness (5)
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ShopSidebarCategory;
