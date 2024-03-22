import React from "react";
import ShopSidebarCategory from "./ShopSidebarCategory";
import ShopRatings from "./ShopRatings";
import ShopPrice from "./ShopPrice";
import ShopLevel from "./ShopLevel";

const ShopSidebar = () => {
  return (
    <>
      <div className="course-sidebar-widget mb-20">
        <ShopSidebarCategory />
      </div>
      <div className="course-sidebar-widget mb-20">
        <ShopLevel />
      </div>
      <div className="course-sidebar-widget mb-20">
        <ShopRatings />
      </div>
      <div className="course-sidebar-widget mb-20">
        <ShopPrice />
      </div>
    </>
  );
};

export default ShopSidebar;
