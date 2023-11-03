"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";

import hero_slider_data from "@/data/hero-slider-data";
import Link from "next/link";
import Image from "next/image";

const HeroSlider = () => {
  return (
    <>
      <section className="slider__area p-relative">
        <div className="slider__wrapper">
          <Swiper
            modules={[FreeMode, Navigation, EffectFade]}
            spaceBetween={10}
            navigation={false}
            effect={"fade"}
            loop={true}
            className="mySwiper"
          >
            {hero_slider_data.slice(0, 4).map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="single-slider slider__height slider__overlay d-flex align-items-center"
                  style={{ backgroundImage: `url(${item.image.src})` }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10">
                        <div className="slider__content">
                          <span>{item.info}</span>
                          <h3 className="slider__title">
                            {item.title}{" "}
                            <span className="yellow-bg">
                              {item.titleCategory}
                              {item?.YellowBg && (
                                <Image
                                  src={item.YellowBg}
                                  style={{ width: "auto", height: "auto" }}
                                  alt="img not found"
                                />
                              )}{" "}
                            </span>
                            {item.titleInfo}
                          </h3>
                          <p>{item.desc}</p>
                          <Link href="/about" className="e-btn slider__btn">
                            {item.sliderBtn}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="swipper-featueude edu-mr-0">
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper2"
          >
            {hero_slider_data.slice(4, 8).map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className={item.wrapperClass}
                  style={{ backgroundImage: `url(${item.image.src})` }}
                >
                  <div className="slider__nav-content">
                    <span>{item.info}</span>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
