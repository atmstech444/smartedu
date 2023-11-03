import Image from "next/image";
import Link from "next/link";
import React from "react";
import YellowBg from "../../../public/assets/img/shape/yellow-bg-2.png";
import AboutImage from "../../../public/assets/img/about/about.jpg";
import AboutBanner from "../../../public/assets/img/about/about-banner.jpg";
import studentImgOne from "../../../public/assets/img/about/student-4.jpg";
import studentImgTwo from "../../../public/assets/img/about/student-3.jpg";
import studentImgThree from "../../../public/assets/img/about/student-2.jpg";
import studentImgFour from "../../../public/assets/img/about/student-1.jpg";

const AboutSection = () => {
  return (
    <section className="about__area pt-120 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
            <div className="about__thumb-wrapper">
              <div className="edu-about">
                <h5>
                  {" "}
                  <span>8,200+</span> five ster reviews
                </h5>
              </div>
              <div className="edu__thumb ml-100">
                <Image
                  src={AboutImage}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
              <div className="about__banner educal_banner mt--210">
                <Image
                  src={AboutBanner}
                  style={{ width: "100%", height: "auto" }}
                  alt="img not found"
                />
              </div>
              <div className="about__student ml-270 mt--80">
                <Link href="/course-details">
                  <Image
                    src={studentImgOne}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />
                  <Image
                    src={studentImgTwo}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />
                  <Image
                    src={studentImgThree}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />
                  <Image
                    src={studentImgFour}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />
                </Link>
                <p>
                  Join over <span>4,000+</span> students
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about__content pl-70 pr-60 pt-25">
              <div className="section__title-wrapper mb-25">
                <h2 className="section__title">
                  Achieve your <br />
                  <span className="yellow-bg-big">
                    Goals{" "}
                    <Image
                      src={YellowBg}
                      style={{ width: "auto", height: "auto" }}
                      alt="img not found"
                    />
                  </span>{" "}
                  with Educal{" "}
                </h2>
                <p>
                  Lost the plot bobby such a fibber bleeding bits and bobs{" "}
                  {`don't`} get shirty with me bugger all mate chinwag super
                  pukka william barney, horse play buggered.
                </p>
              </div>
              <div className="about__list mb-35">
                <ul>
                  <li className="d-flex align-items-center">
                    {" "}
                    <i className="fas fa-check"></i> Upskill your organization.
                  </li>
                  <li className="d-flex align-items-center">
                    {" "}
                    <i className="fas fa-check"></i> Access more then 100K
                    online courses
                  </li>
                  <li className="d-flex align-items-center">
                    {" "}
                    <i className="fas fa-check"></i> Learn the latest skills
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="e-btn e-btn-border">
                apply now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
