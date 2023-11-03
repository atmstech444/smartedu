import BlogDetailsMain from "@/components/blog-details/BlogDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const BlogDetailsPage = () => {
  const id = 1;
  return (
    <Wrapper>
      <main>
        <BlogDetailsMain id={id} />
      </main>
    </Wrapper>
  );
};

export default BlogDetailsPage;
