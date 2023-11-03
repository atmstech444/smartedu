import React from "react";
import authorImg from "../../../public/assets/img/blog/author/blog-author-1.jpg";
import Image from "next/image";

const BlogAuthor = () => {
  return (
    <div className="blog__author-3 d-sm-flex grey-bg mb-90">
      <div className="blog__author-thumb-3 mr-20">
        <Image
          src={authorImg}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
      </div>
      <div className="blog__author-content">
        <h4>Justin Case</h4>
        <span>Author</span>
        <p>
          So I said blower wellies a blinding shot jolly good argy-bargy he
          nicked it, in my flat {`don't`} get shirty with me tosser.
        </p>
      </div>
    </div>
  );
};

export default BlogAuthor;
