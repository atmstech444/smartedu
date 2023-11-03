import blog_data from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import YellowBg from "../../../public/assets/img/shape/yellow-bg-4.png";

const BlogRecent = () => {
  return (
    <div className="blog__recent mb-65">
      <div className="section__title-wrapper mb-40">
        <h2 className="section__title">
          Related{" "}
          <span className="yellow-bg-sm">
            <Image
              src={YellowBg}
              style={{ width: "auto", height: "auto" }}
              alt="img not found"
            />{" "}
          </span>
        </h2>
        <p>
          You {`don't`} have to struggle alone, {`you've`} got our assistance
          and help.
        </p>
      </div>
      <div className="row">
        {blog_data.slice(12, 14).map((item) => (
          <div key={item.id} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="blog__item white-bg mb-30 transition-3 fix">
              <div className="blog__thumb w-img fix">
                <Link href={`/blog-details/${item.id}`}>
                  <Image
                    src={item.image}
                    style={{ width: "100%", height: "auto" }}
                    alt="image not found"
                  />
                </Link>
              </div>
              <div className="blog__content">
                <div className="blog__tag">
                  <Link
                    href={`/blog-details/${item.id}`}
                    className={
                      item.blogWrapperClass ? `${item.blogWrapperClass}` : ""
                    }
                  >
                    {item.blogTag}
                  </Link>
                </div>
                <h3 className="blog__title">
                  <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                </h3>

                <div className="blog__meta d-flex align-items-center justify-content-between">
                  <div className="blog__author d-flex align-items-center">
                    <div className="blog__author-thumb mr-10">
                      <Image
                        src={item.authorImg}
                        style={{ width: "auto", height: "auto" }}
                        alt="image not found"
                      />
                    </div>
                    <div className="blog__author-info">
                      <h5>{item.author}</h5>
                    </div>
                  </div>
                  <div className="blog__date d-flex align-items-center">
                    <i className="fal fa-clock"></i>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogRecent;
