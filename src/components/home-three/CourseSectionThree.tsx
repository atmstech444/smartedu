import Link from "next/link";
import React from "react";
import YellowBg from "../../../public/assets/img/shape/yellow-bg-2.png";
import Image from "next/image";
import courses_data from "@/data/courses-data";

const CourseSectionThree = () => {
  return (
    <section className="course__area grey-bg pt-115 pb-120">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
            <div className="section__title-wrapper mb-60">
              <h2 className="section__title">
                Online
                <span className="yellow-bg">
                  {" "}
                  Courses{" "}
                  <Image
                    src={YellowBg}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />
                </span>{" "}
                <br /> For anyone, anywhere
              </h2>
              <p>
                You {`don't`} have to struggle alone, {`you've`} got our
                assistance and help.
              </p>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
            <div className="category__more mb-60 float-md-end fix">
              <Link href="/course-grid" className="link-btn">
                View All Courses
                <i className="fas fa-arrow-right"></i>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {courses_data.slice(6, 8).map((item) => (
            <div key={item.id} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="course__item course__item-2 white-bg mb-30 transition-3">
                <div className="course__thumb fix w-img">
                  <Link href={`/course-details/${item.id}`}>
                    <Image
                      src={item.image}
                      style={{ width: "100%", height: "auto" }}
                      alt="img not found"
                    />
                  </Link>
                </div>
                <div className="course__content-2">
                  <h3 className="course__title-2">
                    <Link href={`/course-details/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <p>{item.desc}</p>
                  <div className="course__bottom d-sm-flex justify-content-between align-items-center">
                    <div className="course__teacher-2 d-flex align-items-center">
                      <div className="course__teacher-thumb-2 mr-20">
                        <Image
                          src={item.tutorImg}
                          style={{ width: "auto", height: "auto" }}
                          alt="img not found"
                        />
                        <div className="course__teacher-rating">
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                      <div className="course__teacher-info">
                        <h6>
                          <Link href="/instructor-details">{item.author}</Link>
                        </h6>
                        <span>{item.category}</span>
                      </div>
                    </div>
                    <div className="course__meta">
                      <div className="course__lesson">
                        <span>
                          <i className="fas fa-book"></i>
                          {item.lesson} Lesson
                        </span>
                      </div>
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

export default CourseSectionThree;
