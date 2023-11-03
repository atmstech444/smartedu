import blog_data from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogRecentPost = () => {
  return (
    <div className="sidebar__widget-content">
      <div className="rc__post-wrapper">
        {blog_data.slice(9, 12).map((item) => (
          <div key={item.id} className="rc__post d-flex align-items-center">
            <div className="rc__thumb mr-20">
              <Link href={`/blog-details/${item.id}`}>
                <Image
                  src={item.image}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </Link>
            </div>
            <div className="rc__content">
              <div className="rc__meta">
                <span>{item.date}</span>
              </div>
              <h6 className="rc__title">
                <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogRecentPost;
