import React, { useState } from "react";

const ShopPrice = () => {
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
        Price
      </h3>
      <ul>
        <li>
          <div className="course-sidebar-list">
            <input
              className="edu-check-box"
              type="radio"
              id="e-85"
              name="price"
            />
            <label className="edu-check-label" htmlFor="e-85">
              All (85)
            </label>
          </div>
        </li>
        <li>
          <div className="course-sidebar-list">
            <input
              className="edu-check-box"
              type="radio"
              id="e-all"
              name="price"
            />
            <label className="edu-check-label" htmlFor="e-all">
              Free (21)
            </label>
          </div>
        </li>
        <li>
          <div className="course-sidebar-list">
            <input
              className="edu-check-box"
              type="radio"
              id="f-all"
              name="price"
            />
            <label className="edu-check-label" htmlFor="f-all">
              Paid (54)
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ShopPrice;
