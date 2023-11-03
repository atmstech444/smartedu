import Link from "next/link";
import React from "react";

const BlogTag = () => {
  return (
    <div className="sidebar__widget mb-55">
      <div className="sidebar__widget-head mb-35">
        <h3 className="sidebar__widget-title">Tags</h3>
      </div>
      <div className="sidebar__widget-content">
        <div className="sidebar__tag">
          <Link href="#">Art & Design</Link>
          <Link href="#">Course</Link>
          <Link href="#">Videos</Link>
          <Link href="#">App</Link>
          <Link href="#">Education</Link>
          <Link href="#">Data Science</Link>
          <Link href="#">Machine Learning</Link>
          <Link href="#">Tips</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogTag;
