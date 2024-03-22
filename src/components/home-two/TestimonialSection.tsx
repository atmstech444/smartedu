"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
import Image from "next/image";
import TestimonialImg from "../../../public/assets/img/testimonial/testi-1.jpg";
import TestimonialImg1 from "../../../public/assets/img/testimonial/testi-1.jpg";
import TestimonialImgBg from "../../../public/assets/img/testimonial/testimonial-bg.jpg";

const TestimonialSection = () => {
  return (
    <section
      className="testimonial__area testimonial__overlay pt-175 pb-170"
      style={{ backgroundImage: `url(${TestimonialImgBg.src})` }}
    >
      <div className="container">
        <div className="col-xxl-12">
          <div className="testimonial__slider p-relative">
            <div className="testimonial__slider-inner">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={true}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                <SwiperSlide>
                  <div className="testimonial__item text-center">
                    <div className="testimonial__thumb">
                      <Image
                        src={TestimonialImg}
                        style={{ width: "80px", height: "80px" }}
                        alt="image not found"
                      />
                    </div>
                    <div className="testimonial__content">
                      <p>
                        “ Barmy loo sloshed porkiesdo with me down the pub say
                        bubble and squeak. ”
                      </p>

                      <div className="testimonial__info">
                        <h4>Jason Response</h4>
                        <span>UX Designer</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial__item text-center">
                    <div className="testimonial__thumb">
                      <Image
                        src={TestimonialImg1}
                        style={{ width: "80px", height: "80px" }}
                        alt="img not found"
                      />
                    </div>
                    <div className="testimonial__content">
                      <p>
                        “ Zany restroom tipsy fibbers will join me at the tavern
                        and utter mashed potatoes and cabbage .”
                      </p>

                      <div className="testimonial__info">
                        <h4>Lillian Walsh</h4>
                        <span>CO Founder</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial__item text-center">
                    <div className="testimonial__thumb">
                      <Image
                        src={TestimonialImg}
                        style={{ width: "80px", height: "80px" }}
                        alt="img not found"
                      />
                    </div>
                    <div className="testimonial__content">
                      <p>
                        “ Kooky lavatory intoxicated storytellers shall
                        accompany me to the bar and exclaim rice and beans.”
                      </p>

                      <div className="testimonial__info">
                        <h4>Nicola Tesla</h4>
                        <span>Engineer</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="swiper-button-next swiper-nav">
              <i className="far fa-arrow-right"></i>
            </div>
            <div className="swiper-button-prev swiper-nav">
              <i className="far fa-arrow-left"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
