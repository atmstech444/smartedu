import React from "react";
import Link from "next/link";
import blog_data from "@/data/blog-data";
import Image from "next/image";
import BlogSidebar from "./BlogSidebar";
import BreadcrumbTwo from "../common/BreadcrumbTwo/BreadcrumbTwo";

const BlogMain = () => {
  return (
    <>
      <BreadcrumbTwo titleTwo="Blog Grid" subTitleTwo="Blog Grid" />
      <section className="blog__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="row">
                {blog_data.slice(3, 9).map((item) => (
                  <div
                    key={item.id}
                    className="col-xxl-6 col-xl-6 col-lg-6 col-md-6"
                  >
                    <div className="blog__wrapper">
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
                                item.blogWrapperClass
                                  ? `${item.blogWrapperClass}`
                                  : ""
                              }
                            >
                              {item.blogTag}
                            </Link>
                          </div>
                          <h3 className="blog__title">
                            <Link href={`/blog-details/${item.id}`}>
                              {item.title}
                            </Link>
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
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-xxl-12">
                  <div
                    className="basic-pagination wow fadeInUp mt-30"
                    data-wow-delay=".2s"
                  >
                    <ul className="d-flex align-items-center">
                      <li className="prev">
                        <Link href="/blog" className="link-btn link-prev">
                          Prev
                          <i className="arrow_left"></i>
                          <i className="arrow_left"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span>1</span>
                        </Link>
                      </li>
                      <li className="active">
                        <Link href="/blog">
                          <span>2</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <span>3</span>
                        </Link>
                      </li>
                      <li className="next">
                        <Link href="/blog" className="link-btn">
                          Next
                          <i className="arrow_right"></i>
                          <i className="arrow_right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogMain;
