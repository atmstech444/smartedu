import Link from "next/link";
import React from "react";
import circleImgOne from "../../../public/assets/img/shape/hero/hero-1-circle.png";
import circleImgTwo from "../../../public/assets/img/shape/hero/hero-1-circle-2.png";
import heroDotImg from "../../../public/assets/img/shape/hero/hero-1-dot-2.png";
import YellowBg from "../../../public/assets/img/shape/yellow-bg.png";
import HeroImage from "../../../public/assets/img/hero/hero-2/hero.png";
import HeroImageTwo from "../../../public/assets/img/hero/hero-2/hero-sm.jpg";
import HeroShapeImage from "../../../public/assets/img/hero/hero-2/hero-shape-purple.png";
import Image from "next/image";
import HeroPromotionIcon from "@/svg/hero-promotion-icon";
import CountUpContent from "../common/counter/CountUpContent";

const HeroSectionTwo = () => {
  return (
    <section className="hero__area hero__height hero__height-2 d-flex align-items-center blue-bg-3 p-relative fix">
      <div className="hero__shape">
        <Image
          className="hero-1-circle"
          src={circleImgOne}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
        <Image
          className="hero-1-circle-2"
          src={circleImgTwo}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
        <Image
          className="hero-1-dot-2"
          src={heroDotImg}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
      </div>
      <div className="container">
        <div className="hero__content-wrapper mt-90">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="hero__content hero__content-2 p-relative z-index-1">
                <h3 className="hero__title hero__title-2">
                  Launch your <br /> Own
                  <span className="yellow-shape">
                    {" "}
                    online{" "}
                    <Image
                      src={YellowBg}
                      style={{ width: "auto", height: "auto" }}
                      alt="yellow-shape"
                    />{" "}
                  </span>
                  learning Platform
                </h3>
                <h4>Unlimited access to all 60+ instructors.</h4>
                <p>2 passes (with access to all classes) for $240</p>

                <div className="hero__search">
                  <form action="#">
                    <div className="hero__search-input mb-10">
                      <input
                        type="text"
                        placeholder="What do you want to learn?"
                      />
                      <button type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                  <p>
                    You`re guaranteed to find something that`s right for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="hero__thumb-wrapper mb--120">
                <div className="hero__thumb-2 scene">
                  <Image
                    className="hero-big"
                    src={HeroImage}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />
                  <Image
                    className="hero-shape-purple"
                    src={HeroShapeImage}
                    style={{ width: "100%", height: "auto" }}
                    alt="img not found"
                  />

                  <div
                    className="hero__promotion d-flex white-bg layer"
                    data-depth="0.1"
                  >
                    <div className="hero__promotion-icon inspiration mr-10">
                      <span>
                        <HeroPromotionIcon />
                      </span>
                    </div>
                    <div className="hero__promotion-text">
                      <h5>Congratulation</h5>
                      <p>Your admission completed</p>
                    </div>
                  </div>
                  <div
                    className="hero__promotion education d-none d-lg-flex white-bg layer"
                    data-depth="0.2"
                  >
                    <div className="hero__promotion-icon mr-10">
                      <span className="cap">
                        <svg viewBox="0 0 791.8 791.8">
                          <g>
                            <path
                              className="st0"
                              d="M395.9,501l-236.2-72.7v71.5v49.9c0,56.1,105.8,101.6,236.3,101.6s236.3-45.5,236.3-101.6   c0-0.4-0.1-0.9-0.2-1.3V428.3L395.9,501z"
                            />
                            <path
                              className="st0"
                              d="M0,318.7l84.4,30.2l7.2-15.4l31-2.6l4.4,4.6l-26.6,6.3l-3.9,11.5c0,0-60.1,125.6-51.3,187c0,0,37.5,22.4,75,0   l10-168v-14l55.8-12.6l-3.9,9.7L140.5,369l19.2,6.9l236.2,72.7l236.2-72.7l159.7-57.1L395.9,166.4L0,318.7z"
                            />
                          </g>
                        </svg>
                      </span>
                    </div>
                    <div className="hero__promotion-text">
                      <h5>
                        <span className="counter">
                          <CountUpContent
                            number={450}
                            text="K"
                          ></CountUpContent>
                        </span>
                      </h5>
                      <p>Assisted Student</p>
                    </div>
                  </div>
                  <div
                    className="hero__class d-none d-lg-flex layer"
                    data-depth="0.3"
                  >
                    <div className="hero__class-thumb mr-15">
                      <Image
                        src={HeroImageTwo}
                        style={{ width: "auto", height: "auto" }}
                        alt="img not found"
                      />
                    </div>
                    <div className="hero__class-text">
                      <h5>User Experience Class</h5>
                      <p>Tomorrow is our</p>
                      <Link href="/contact">Join Now</Link>
                    </div>
                  </div>
                  <div className="hero__mic">
                    <span>
                      <svg viewBox="0 0 512 512">
                        <g>
                          <g>
                            <path
                              className="st0"
                              d="M435.7,0H126.5C89.6,0,59.6,30,59.6,66.9v378.3c0,36.9,30,66.9,66.9,66.9h309.2c9.2,0,16.7-7.5,16.7-16.7    c0-17.5,0-461.2,0-478.6C452.4,7.5,444.9,0,435.7,0z M338.9,396.2c0,13.7-15.7,21.5-26.6,13.4L244,358.9h-54.2    c-9.2,0-16.7-7.5-16.7-16.7v-72c0-9.2,7.5-16.7,16.7-16.7H244l68.3-50.7c11-8.2,26.6-0.3,26.6,13.4V396.2z M419,100.3H126.5    c-18.5,0-33.5-15-33.5-33.5c0-18.5,15-33.5,33.5-33.5H419V100.3z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="206.5"
                              y="286.8"
                              className="st0"
                              width="26.3"
                              height="38.7"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <polygon
                              className="st0"
                              points="266.2,278.5 266.2,333.8 305.5,363 305.5,249.3   "
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTwo;
