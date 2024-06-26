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
  // const getColorFromName = (name: string) => {
  //   // Use a hash function to generate a numeric value from the category name
  //   const hashCode = name.split("").reduce((acc, char) => {
  //     return char.charCodeAt(0) + ((acc << 5) - acc);
  //   }, 0);
  //   // Convert the numeric value to a hexadecimal color code
  //   const color = `#${((hashCode & 0x00ffffff) | 0x800000).toString(16).slice(1)}`;
  //   return color;
  // };
  const getCategoryColor = (title: string) => {
    switch (title) {
      case "დიზაინი":
        return "#F0722D";
      case "მონაცემთა ანალიზი":
        return "#b128ff";
      case "პროგრამირება":
        return "#2DD3F0";
      case "ბიზნესი":
        return "#2DF051";
      case "ქსელები და კიბერუსაფრთხოება":
        return "#0B090A";
      default:
        return "#b128ff";
    }
  };
  return (
    <section className="course__area pt-115 pb-120 grey-bg">
      <div className="container">
        <Div2 className="row">
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="section__title-wrapper">
              <h2 className="section__title">
                ჩვენი <br />
                <span className="yellow-bg yellow-bg-big">
                  კურსები
                  {/* <Image src={YellowBg} style={{ width: "auto", height: "auto" }} alt="image not found" /> */}
                </span>
              </h2>
            </div>
          </div>
          {/* <div className="col-xxl-5 col-xl-6 col-lg-6">
            <Div className="category__more float-md-end fix">
              <Link href="/course-grid" className="link-btn">
                ყველა კურსი
                <i className="fas fa-arrow-right"></i>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </Div>
          </div> */}
        </Div2>
        <div className="row mt-10">
          {courses.slice(0, 6).map((item) => (
            <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 flex justify-center items-center">
              <div className="course__item white-bg mb-30 fix w-[360px]">
                <div className="course__thumb p-relative fix flex justify-center items-center">
                  <Link href={`/course-details/${item.id}`}>
                    <img src={API_STORAGE + item?.cover_image} alt="image not found" className="w-[356px] h-[210px]" />
                  </Link>
                  <div className="absolute top-[20px] left-[20px] rounded-sm" style={{ backgroundColor: getCategoryColor(item.category.title) }}>
                    <Link href={`/course-details/${item.id}`} className="h-[24px] text-sm text-white font-medium px-3">
                      {item.category.title}
                    </Link>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>
                        {item.lectures_count} გაკვეთილი
                      </span>
                    </div>
                    {/* <div className="course__rating">
                      <span>
                        <i className="fas fa-star"></i>
                        Rating
                      </span>
                    </div> */}
                  </div>
                  <h3 className="course__title" style={{ height: "48px" }}>
                    <Link href={`/course-details/${item.id}`}>{item.title}</Link>
                  </h3>
                  <div className=" text-center flex">
                    <img className="course__teacher-thumb mr-15 rounded-full" src={API_STORAGE + item?.lecturer?.image} style={{ width: "50px", height: "50px" }} alt="image not found" />{" "}
                    <p className="flex my-auto">
                      {item?.lecturer?.first_name} {item?.lecturer?.last_name}
                    </p>
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
                      გაიგე მეტი
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
