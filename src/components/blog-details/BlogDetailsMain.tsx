import React from "react";
import PageTitle from "./PageTitle";
import BlogAreaContent from "./BlogAreaContent";
import { idType } from "@/interFace/interFace";
import blog_data from "@/data/blog-data";

const BlogDetailsMain = ({ id }: idType) => {
  const blog: any = blog_data.find((item) => item.id == id);
  return (
    <>
      <PageTitle blog={blog} />
      <BlogAreaContent blog={blog} />
    </>
  );
};

export default BlogDetailsMain;
