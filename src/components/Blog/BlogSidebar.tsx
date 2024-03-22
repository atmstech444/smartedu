import BlogSearchForm from "@/form/blog-search-form";
import React from "react";
import BlogRecentPost from "./BlogRecentPost";
import BlogCategory from "./BlogCategory";
import BlogTag from "./BlogTag";
import SidebarBanner from "../../../public/assets/img/blog/banner/banner-1.jpg";
import Image from "next/image";

const BlogSidebar = () => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4">
      <div className="blog__sidebar pl-70">
        <div className="sidebar__widget mb-60">
          <div className="sidebar__widget-content">
            <div className="sidebar__search p-relative">
              <BlogSearchForm />
            </div>
          </div>
        </div>
        <div className="sidebar__widget mb-55">
          <div className="sidebar__widget-head mb-35">
            <h3 className="sidebar__widget-title">Recent posts</h3>
          </div>
          <BlogRecentPost />
        </div>
        <BlogCategory />
        <BlogTag />
        <div className="sidebar__widget mb-55">
          <div className="sidebar__banner w-img">
            <Image
              src={SidebarBanner}
              style={{ width: "100%", height: "auto" }}
              alt="image not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
