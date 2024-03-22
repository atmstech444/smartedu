import Image from "next/image";
import Link from "next/link";
import React from "react";
import circleImgOne from "../../../public/assets/img/shape/hero/hero-1-circle.png";
import circleImgTwo from "../../../public/assets/img/shape/hero/hero-1-circle-2.png";
import circleImgThree from "../../../public/assets/img/shape/hero/hero-1-circle-3.png";
import circleImgFour from "../../../public/assets/img/shape/hero/hero-1-circle-4.png";
import heroDotImg from "../../../public/assets/img/shape/hero/hero-1-dot-2.png";
import heroDotImgTwo from "../../../public/assets/img/shape/hero/hero-1-dot.png";
import YellowBg from "../../../public/assets/img/shape/yellow-bg.png";
import HeroOne from "../../../public/assets/img/hero/hero-1.jpg";
import HeroTwo from "../../../public/assets/img/hero/hero-sm-1.jpg";

const HeroSectionOne = () => {
  return (
    <section className="hero__area hero__height d-flex align-items-center grey-bg-2 p-relative">
      <div className="hero__shape">
        <Image
          className="hero-1-circle"
          src={circleImgOne}
          style={{ width: "auto", height: "auto" }}
          alt="img not found"
        />

        <Image
          className="hero-1-circle-2"
          src={circleImgTwo}
          style={{ width: "auto", height: "auto" }}
          alt="img not found"
        />

        <Image
          className="hero-1-dot-2"
          src={heroDotImg}
          style={{ width: "auto", height: "auto" }}
          alt="img not found"
        />
      </div>
      <div className="container">
        <div className="hero__content-wrapper mt-90">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="hero__content p-relative z-index-1">
                <h3 className="hero__title">
                  <span>Access 2700+</span>
                  <span className="yellow-shape">
                    Online{" "}
                    <Image
                      src={YellowBg}
                      style={{ width: "auto", height: "auto" }}
                      alt="yellow-shape"
                    />{" "}
                  </span>
                  Tutorial From Top Instructor.
                </h3>
                <p>
                  Meet university,and cultural institutions, {`who'll`} share
                  their experience.
                </p>
                <Link href="/course-grid" className="e-btn">
                  view all course
                </Link>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="hero__thumb d-flex p-relative">
                <div className="hero__thumb-shape">
                  <Image
                    className="hero-1-dot"
                    src={heroDotImgTwo}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />

                  <Image
                    className="hero-1-circle-3"
                    src={circleImgThree}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />

                  <Image
                    className="hero-1-circle-4"
                    src={circleImgFour}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />
                </div>
                <div className="hero__thumb-big mr-30">
                  <Image
                    src={HeroOne}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                  <div className="hero__quote hero__quote-animation">
                    <span>Tomorrow is our</span>
                    <h4>“When I Grow Up” Spirit Day!</h4>
                  </div>
                </div>
                <div className="hero__thumb-sm mt-50 d-none d-lg-block">
                  <Image
                    src={HeroTwo}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionOne;
