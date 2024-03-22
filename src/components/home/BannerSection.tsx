import Link from "next/link";
import React from "react";
import BannerImage from "../../../public/assets/img/banner/banner-img-1.png";
import BannerImageTwo from "../../../public/assets/img/banner/banner-img-2.png";
import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="banner__area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div
              className="banner__item p-relative mb-40"
              style={{
                backgroundImage: `url(${"assets/img/banner/banner-bg-1.jpg"})`,
              }}
            >
              <div className="banner__content">
                <span>Free</span>
                <h3 className="banner__title">
                  <Link href="/course-grid">
                    Germany Foundation <br /> Document
                  </Link>
                </h3>
                <Link href="/course-grid" className="e-btn e-btn-2">
                  View Courses
                </Link>
              </div>
              <div className="banner__thumb d-none d-sm-block d-md-none d-lg-block">
                <Image
                  src={BannerImage}
                  style={{ width: "100%", height: "auto" }}
                  alt="image not found"
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div
              className="banner__item p-relative mb-40"
              style={{
                backgroundImage: `url(${"assets/img/banner/banner-bg-2.jpg"})`,
              }}
            >
              <div className="banner__content">
                <span className="orange">new</span>
                <h3 className="banner__title">
                  <Link href="/course-grid">
                    Online Courses <br />
                    From Eduka University
                  </Link>
                </h3>
                <Link href="/course-grid" className="e-btn e-btn-2">
                  Find Out More
                </Link>
              </div>
              <div className="banner__thumb banner__thumb-2 d-none d-sm-block d-md-none d-lg-block">
                <Image
                  src={BannerImageTwo}
                  style={{ width: "100%", height: "auto" }}
                  alt="image not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
