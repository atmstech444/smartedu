import React from "react";
import YellowBg from "../../../public/assets/img/shape/yellow-bg.png";
import Image from "next/image";
import Link from "next/link";
import blog_data from "@/data/blog-data";

const BlogSection = () => {
  return (
    <section className="blog__area pt-115 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 offset-xxl-3">
            <div className="section__title-wrapper text-center mb-60">
              <h2 className="section__title">
                We share <br />
                Our{" "}
                <span className="yellow-bg yellow-bg-big">
                  thoughts{" "}
                  <Image
                    src={YellowBg}
                    style={{ width: "auto", height: "auto" }}
                    alt="yellow-shape"
                  />
                </span>
                on design
              </h2>
              <p>
                You {`don't`} have to struggle alone, {`you've`} got our
                assistance and help.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {blog_data.slice(0, 3).map((item) => (
            <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="blog__item white-bg mb-30 transition-3 fix">
                <div className="blog__thumb w-img fix">
                  <Link href={`/blog-details/${item.id}`}>
                    <Image
                      src={item.image}
                      style={{ width: "100%", height: "auto" }}
                      alt="img not found"
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
                          alt="img not found"
                        />
                      </div>
                      <div className="blog__author-info">
                        <h5>{item.author}</h5>
                      </div>
                    </div>
                    <div className="blog__date d-flex align-items-center">
                      <i className="fa-regular fa-clock"></i>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
