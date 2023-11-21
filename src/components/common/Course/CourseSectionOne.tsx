"use client";
import React from "react";
import YellowBg from "../../../../public/assets/img/shape/yellow-bg.png";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useAppSelector } from "@/redux/store";
import { API_STORAGE } from "@/api/API_PATH";

const CourseSectionOne = () => {
  const courses = useAppSelector((state) => state.courses.courses);
  console.log(courses);
  return (
    <section className="course__area pt-115 pb-120 grey-bg">
      <div className="container">
        <Div2 className="row">
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="section__title-wrapper mb-60">
              <h2 className="section__title">
                ჩვენი <br />
                <span className="yellow-bg yellow-bg-big">
                  კურსები
                  <Image src={YellowBg} style={{ width: "auto", height: "auto" }} alt="image not found" />
                </span>
              </h2>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <Div className="category__more float-md-end fix">
              <Link href="/course-grid" className="link-btn">
                ყველა კურსი
                <i className="fas fa-arrow-right"></i>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </Div>
          </div>
        </Div2>
        <div className="row">
          {courses.slice(0, 6).map((item) => (
            <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <Link href={`/course-details/${item.id}`}>
                    <img src={API_STORAGE + item.cover_image} style={{ width: "100%", height: "200px" }} alt="image not found" />
                  </Link>
                  <div className="course__tag">
                    <Link href={`/course-details/${item.id}`} className={item.category.title ? `${item.category.title}` : ""}>
                      {item.category.title}
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>
                        {item.lectures_count} Lesson
                      </span>
                    </div>
                    <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>
                        Rating
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    <Link href={`/course-details/${item.id}`}>{item.title}</Link>
                  </h3>
                  <div className="course__teacher d-flex align-items-center">
                    <div className="course__teacher-thumb mr-15">
                      <img src={API_STORAGE + item.lecturer.image} style={{ width: "50px", height: "50px" }} alt="image not found" />
                    </div>
                    <h6>
                      <Link href="/instructor-details">
                        {item.lecturer.first_name} {item.lecturer.last_name}
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status">
                    {/* <span className={item.priceClass ? item.priceClass : ""}>{item.price === 0 ? "Free" : `$${item.price}.00`}</span>
                    <span className="old-price">{item.oldPrice === 0 ? " " : `$${item.oldPrice}`}</span> */}
                    <span>{item.price}</span>
                  </div>
                  <div className="course__btn">
                    <Link href={`/course-details/${item.id}`} className="link-btn">
                      დეტალები
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
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

const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    margin-bottom: 50px;
  }
`;

const Div = styled.div`
  @media (min-width: 1064px) {
    margin-top: 90px;
  }
`;

export default CourseSectionOne;
