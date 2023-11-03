"use client";
import React from "react";
import BannerSection from "../home/BannerSection";
import dynamic from "next/dynamic";
import WhyChoose from "../home-two/WhyChoose";
import TestimonialSlider from "../Elements/Slider/TestimonialSlider";
import AboutSection from "./AboutSection";
import CounterSection from "./CounterSection";
import BreadcrumbTwo from "../common/BreadcrumbTwo/BreadcrumbTwo";
const BrandWithNoSSR = dynamic(() => import("../Elements/Slider/BrandSlider"), {
  ssr: false,
});
const AboutPageMain = () => {
  return (
    <>
      <BreadcrumbTwo titleTwo="About" subTitleTwo="About" />
      <AboutSection />
      <BrandWithNoSSR />
      <TestimonialSlider />
      <WhyChoose />
      <CounterSection />
      <BannerSection />
    </>
  );
};

export default AboutPageMain;
