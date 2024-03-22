"use client"
import BlogMain from "@/components/Blog/BlogMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const BlogPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <BlogMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default BlogPage;
