import React from "react";

const HeaderCartIcon = () => {
  return (
    <>
      <div className="header__cart-icon">
        <svg viewBox="0 0 24 24">
          <circle className="st0" cx="9" cy="21" r="1" />
          <circle className="st0" cx="20" cy="21" r="1" />
          <path
            className="st0"
            d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6"
          />
        </svg>
      </div>
    </>
  );
};

export default HeaderCartIcon;
