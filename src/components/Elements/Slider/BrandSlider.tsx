"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";
import Link from "next/link";
import Image from "next/image";
import ImageOne from "../../../../public/assets/img/brand/brand-1.png";
import ImageTwo from "../../../../public/assets/img/brand/brand-2.png";
import ImageThree from "../../../../public/assets/img/brand/brand-3.png";
import ImageFour from "../../../../public/assets/img/brand/brand-4.png";
import ImageFive from "../../../../public/assets/img/brand/brand-5.png";
import ImageSix from "../../../../public/assets/img/brand/brand-6.png";

const BrandSlider = () => {
  return (
    <section className="brand__area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="brand__content text-center">
              <h3 className="brand__title">
                Trusted by 100 {`world's`} best companies
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="brand__slider">
              <div className=" text-center">
                <Swiper
                  spaceBetween={30}
                  loop={true}
                  breakpoints={{
                    450: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 6,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="brand__item">
                      <Image
                        src={ImageOne}
                        style={{ width: "70px", height: "auto" }}
                        alt="img not found"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="brand__item">
                      <Image
                        src={ImageTwo}
                        style={{ width: "70px", height: "auto" }}
                        alt="img not found"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="brand__item">
                      <Image
                        src={ImageThree}
                        style={{ width: "70px", height: "auto" }}
                        alt="img not found"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="brand__item">
                      <Image
                        src={ImageFour}
                        style={{ width: "70px", height: "auto" }}
                        alt="img not found"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="brand__item">
                      <Image
                        src={ImageFive}
                        style={{ width: "70px", height: "auto" }}
                        alt="img not found"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="brand__item">
                      <Image
                        src={ImageFive}
                        style={{ width: "70px", height: "auto" }}
                        alt="img not found"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="brand__item">
                      <Image
                        src={ImageSix}
                        style={{ width: "70px", height: "auto" }}
                        alt="img not found"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="brand__more text-center">
              <Link href="/about" className="link-btn">
                View all partners
                <i className="fas fa-arrow-right"></i>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;
