import Link from "next/link";
import React from "react";
import shape1 from "../../../public/assets/img/page-title/page-title-shape-1.png";
import shape2 from "../../../public/assets/img/page-title/page-title-shape-6.png";
import shape3 from "../../../public/assets/img/page-title/page-title-shape-3.png";
import shape4 from "../../../public/assets/img/page-title/page-title-shape-4.png";
import shape5 from "../../../public/assets/img/teacher/details/shape/shape-1.png";
import shape6 from "../../../public/assets/img/teacher/details/shape/shape-2.png";
import YellowBg from "../../../public/assets/img/shape/yellow-bg.png";
import Image from "next/image";
import TeacherCourse from "./TeacherCourse";
import CtaSection from "../home/CtaSection";
import { idType } from "@/interFace/interFace";
import instructor_data from "@/data/instructor-data";
import BreadcrumbTwo from "../common/BreadcrumbTwo/BreadcrumbTwo";

const InstructorDetailsMain = ({ id }: idType) => {
  const Instructor = instructor_data.find((item) => item.id == id);
  return (
    <>
      <BreadcrumbTwo
        titleTwo="Instructor Details"
        subTitleTwo="Instructor Details"
      />
      <section className="teacher__area pt-100 pb-110">
        <div className="page__title-shape">
          <Image
            className="page-title-shape-5 d-none d-sm-block"
            src={shape1}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />

          <Image
            className="page-title-shape-6"
            src={shape2}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
          <Image
            className="page-title-shape-3"
            src={shape3}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
          <Image
            className="page-title-shape-7"
            src={shape4}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="teacher__details-thumb p-relative w-img pr-30">
                {Instructor?.image && (
                  <Image
                    src={Instructor?.image}
                    style={{ width: "100%", height: "auto" }}
                    alt="image not found"
                  />
                )}
                <div className="teacher__details-shape">
                  <Image
                    className="teacher-details-shape-1"
                    src={shape5}
                    style={{ width: "auto", height: "auto" }}
                    alt="image not found"
                  />

                  <Image
                    className="teacher-details-shape-2"
                    src={shape6}
                    style={{ width: "auto", height: "auto" }}
                    alt="image not found"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="teacher__wrapper">
                <div className="teacher__top d-md-flex align-items-end justify-content-between">
                  <div className="teacher__info">
                    <h4>{Instructor?.title}</h4>
                    <span>{Instructor?.category}</span>
                  </div>
                  <div className="teacher__rating">
                    <h5>Review:</h5>
                    <div className="teacher__rating-inner d-flex align-items-center">
                      <ul>
                        <li>
                          <Link href="#">
                            {" "}
                            <i className="fa-solid fa-star"></i>{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            {" "}
                            <i className="fa-solid fa-star"></i>{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            {" "}
                            <i className="fa-solid fa-star"></i>{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            {" "}
                            <i className="fa-solid fa-star"></i>{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            {" "}
                            <i className="fa-solid fa-star-half-stroke"></i>{" "}
                          </Link>
                        </li>
                      </ul>
                      <p>4.5</p>
                    </div>
                  </div>
                  <div className="teacher__social-2">
                    <h4>Follow Us:</h4>
                    <ul>
                      <li>
                        <Link href="https://www.facebook.com/">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://twitter.com/">
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://vimeo.com/">
                          <i className="fa-brands fa-vimeo-v"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="teacher__follow mb-5">
                    <Link href="#" className="teacher__follow-btn">
                      follow <i className="fa-solid fa-plus"></i>{" "}
                    </Link>
                  </div>
                </div>
                <div className="teacher__bio">
                  <h3>Short Bio</h3>
                  <p>
                    Only a quid me old mucker squiffy tomfoolery grub cheers
                    ruddy cor blimey guvnor in my flat, up the duff Eaton car
                    boot up the kyver pardon you A bit of {`how's`} your father
                    David skive off sloshed, {`don't`} get shirty with me chip
                    shop vagabond crikey bugger {`Queen's`} English chap. Matie
                    boy nancy boy bite your arm off up the kyver old no biggie
                    fantastic boot, David have it show off show off pick your
                    nose and blow off lost the plot porkies bits and bobs only a
                    quid bugger all mate, absolutely bladdered bamboozled{" "}
                    {`it's`} your round {`don't`} get shirty with me down the
                    pub well.
                  </p>
                </div>
                <div className="teacher__courses pt-55">
                  <div className="section__title-wrapper mb-30">
                    <h2 className="section__title">
                      Teacher{" "}
                      <span className="yellow-bg yellow-bg-big">
                        Course
                        <Image
                          src={YellowBg}
                          style={{ width: "auto", height: "auto" }}
                          alt="image not found"
                        />
                      </span>
                    </h2>
                  </div>
                  <TeacherCourse />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
};

export default InstructorDetailsMain;
