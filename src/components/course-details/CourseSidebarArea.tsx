import Link from "next/link";
import React from "react";
import SidebarVideoArea from "./SidebarVideoArea";
import Image from "next/image";
import CourseDotImg from "../../../public/assets/img/course/course-dot.png";
import courses_data from "@/data/courses-data";

const CourseSidebarArea = ({ course }: any) => {
  const getRating = (ratingsNum: any) => {
    let empty_rating_count = 5 - ratingsNum;
    let ratings = [];
    for (let i = 0; i < ratingsNum; i++) {
      ratings.push(<i className="fas fa-star" key={`l-${i}`}></i>);
    }
    for (let i = 0; i < empty_rating_count; i++) {
      ratings.push(<i className="fal fa-star" key={`p-${i}`}></i>);
    }
    return ratings;
  };

  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4">
      <div className="course__sidebar pl-70 p-relative">
        <div className="course__shape">
          <Image
            className="course-dot"
            style={{ width: "auto", height: "auto" }}
            src={CourseDotImg}
            alt="image not found"
          />
        </div>
        <SidebarVideoArea course={course} />

        <div className="course__sidebar-widget-2 white-bg mb-20">
          <div className="course__sidebar-course">
            <h3 className="course__sidebar-title">Related courses</h3>
            <ul>
              {courses_data.slice(23, 26).map((item) => (
                <li key={item.id}>
                  <div className="course__sm d-flex align-items-center mb-30">
                    <div className="course__sm-thumb mr-20">
                      <Link href={`/course-details/${item.id}`}>
                        <Image
                          src={item.image}
                          style={{ width: "auto", height: "auto" }}
                          alt="image not found"
                        />
                      </Link>
                    </div>
                    <div className="course__sm-content">
                      <div className="course__sm-rating">
                        <ul>
                          <li>
                            <Link href="#"> {getRating(item?.ratings)} </Link>
                          </li>
                        </ul>
                      </div>
                      <h5>
                        <Link href={`/course-details/${item.id}`}>
                          {item.category}
                        </Link>
                      </h5>
                      <div className="course__sm-price">
                        <span>
                          {item.price === 0 ? "FREE" : `$${item.price}.00`}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebarArea;
