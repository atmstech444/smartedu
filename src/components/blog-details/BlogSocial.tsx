import Link from "next/link";
import React from "react";

const BlogSocial = () => {
  return (
    <div className="blog__meta-3 d-sm-flex justify-content-between align-items-center mb-80">
      <div className="blog__tag-2">
        <Link href="/blog">Art & Design</Link>
        <Link href="/blog">Education</Link>
        <Link href="/blog">App</Link>
      </div>
      <div className="blog__social d-flex align-items-center">
        <h4>Share:</h4>
        <ul>
          <li>
            <Link href="https://www.facebook.com/" className="fb">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/" className="tw">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link href="https://www.pinterest.com/" className="pin">
              <i className="fab fa-pinterest"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSocial;
