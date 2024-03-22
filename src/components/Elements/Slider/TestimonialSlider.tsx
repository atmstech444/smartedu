"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import Image from "next/image";
import img1 from "../../../../public/assets/img/testimonial/home-3/testi-1.jpg";
import img2 from "../../../../public/assets/img/testimonial/home-3/testi-2.jpg";
import img3 from "../../../../public/assets/img/testimonial/home-3/testi-3.jpg";
import img4 from "../../../../public/assets/img/testimonial/home-3/testi-2.jpg";

const TestimonialSlider = () => {
  return (
    <section
      className="testimonial__area pt-145 pb-150"
      style={{
        backgroundImage: `url(${"assets/img/testimonial/home-3/testimonial-bg-3.jpg"})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
            <div className="testimonial__slider-3">
              <h3 className="testimonial__title">
                Student <br /> Community Feedback
              </h3>
              <div className="testimonial__slider-wrapper testimonial-text mb-35">
                <div>
                  <Swiper
                    // install Swiper modules
                    modules={[Autoplay]}
                    spaceBetween={30}
                    autoplay={true}
                    loop={true}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          “After I started learning design with Quillow, I
                          realized that I had improved to very advanced levels.
                          While I am studying at my university, I design as an
                          additional income and I am sure that I will do this
                          professionally.”
                        </p>

                        <div className="testimonial__info-2 mb-45">
                          <h4>James Lee,</h4>
                          <span>Student @Educal University</span>
                        </div>

                        <div className="testimonial__nav-thumb">
                          <Image
                            src={img1}
                            style={{ width: "auto", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          “After I started learning design with Quillow, I
                          realized that I had improved to very advanced levels.
                          While I am studying at my university, I design as an
                          additional income and I am sure that I will do this
                          professionally.”
                        </p>

                        <div className="testimonial__info-2 mb-45">
                          <h4>James Lee,</h4>
                          <span>Student @Educal University</span>
                        </div>

                        <div className="testimonial__nav-thumb">
                          <Image
                            src={img2}
                            style={{ width: "auto", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          “After I started learning design with Quillow, I
                          realized that I had improved to very advanced levels.
                          While I am studying at my university, I design as an
                          additional income and I am sure that I will do this
                          professionally.”
                        </p>

                        <div className="testimonial__info-2 mb-45">
                          <h4>James Lee,</h4>
                          <span>Student @Educal University</span>
                        </div>

                        <div className="testimonial__nav-thumb">
                          <Image
                            src={img3}
                            style={{ width: "auto", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          “After I started learning design with Quillow, I
                          realized that I had improved to very advanced levels.
                          While I am studying at my university, I design as an
                          additional income and I am sure that I will do this
                          professionally.”
                        </p>

                        <div className="testimonial__info-2 mb-45">
                          <h4>James Lee,</h4>
                          <span>Student @Educal University</span>
                        </div>

                        <div className="testimonial__nav-thumb">
                          <Image
                            src={img4}
                            style={{ width: "auto", height: "auto" }}
                            alt="img not found"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
            <div className="testimonial__video ml-70 fix">
              <div className="testimonial__thumb-3">
                <iframe
                  src="https://www.youtube.com/embed/Rr0uFzAOQus"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <div className="testimonial__video-content d-sm-flex">
                <div className="testimonial__video-icon mr-20 mb-20">
                  <span>
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                </div>
                <div className="testimonial__video-text">
                  <h4>Course Outcome</h4>
                  <p>
                    Faff about A bit of {`how's`} your father getmate cack
                    codswallop crikey argy-bargy cobblers lost his bottle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
