"use client";

import courses_data from "@/data/courses-data";
import Link from "next/link";
import React from "react";
import YellowBg from "../../../../public/assets/img/shape/yellow-bg.png";
import Image from "next/image";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const CourseRelated = () => {
  return (
    <div className="course__related">
      <div className="row">
        <div className="col-xxl-12">
          <div className="section__title-wrapper mb-40">
            <h2 className="section__title">
              Related{" "}
              <span className="yellow-bg yellow-bg-big">
                Course
                <Image
                  src={YellowBg}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </span>
            </h2>
            <p>
              You {`don't`} have to struggle alone, {`you've`} got our
              assistance and help.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-12">
          <div className="course__slider pb-60">
            <div>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={true}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                }}
                pagination={{ clickable: true }}
              >
                {courses_data.slice(8, 12).map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="course__item course__item-3 white-bg mb-80 fix">
                      <div className="course__thumb w-img p-relative fix">
                        <Link href={`/course-details/${item.id}`}>
                          <Image
                            src={item.image}
                            style={{ width: "100%", height: "auto" }}
                            alt="img not found"
                          />
                        </Link>
                        <div className="course__tag">
                          <Link
                            href={`/course-details/${item.id}`}
                            className={
                              item.categoryClass ? `${item.categoryClass}` : ""
                            }
                          >
                            {item.category}
                          </Link>
                        </div>
                      </div>
                      <div className="course__content">
                        <div className="course__meta d-flex align-items-center justify-content-between">
                          <div className="course__lesson">
                            <span>
                              <i className="far fa-book-alt"></i>
                              {item.lesson} Lesson
                            </span>
                          </div>
                          <div className="course__rating">
                            <span>
                              <i className="fas fa-star"></i>
                              {item.ratingAve} ({item.ratingCount})
                            </span>
                          </div>
                        </div>
                        <h3 className="course__title">
                          <Link href={`/course-details/${item.id}`}>
                            {item.title}
                          </Link>
                        </h3>
                        <div className="course__teacher d-flex align-items-center">
                          <div className="course__teacher-thumb mr-15">
                            <Image
                              src={item.tutorImg}
                              style={{ width: "auto", height: "auto" }}
                              alt="img not found"
                            />
                          </div>
                          <h6>
                            <Link href="/instructor-details">
                              {item.author}
                            </Link>
                          </h6>
                        </div>
                      </div>
                      <div className="course__more d-flex justify-content-between align-items-center">
                        <div className="course__status">
                          <span
                            className={
                              item.priceClass ? `${item.priceClass}` : ""
                            }
                          >
                            {item.price === 0 ? "FREE" : `$${item.price}.00`}
                          </span>
                          <span className="old-price">
                            {item.oldPrice === 0 ? " " : `$${item.oldPrice}.00`}
                          </span>
                        </div>
                        <div className="course__btn">
                          <Link
                            href={`/course-details/${item.id}`}
                            className="link-btn"
                          >
                            Know Details
                            <i className="far fa-arrow-right"></i>
                            <i className="far fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRelated;
