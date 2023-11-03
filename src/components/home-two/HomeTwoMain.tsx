import React from "react";
import HeroSectionTwo from "./HeroSectionTwo";
import ServiceSection from "./ServiceSection";
import CourseSectionOne from "../common/Course/CourseSectionOne";
import SkillineSection from "./SkillineSection";
import WhyChoose from "./WhyChoose";
import TestimonialSection from "./TestimonialSection";
import BlogSection from "./BlogSection";
import CtaSectionTwo from "./CtaSectionTwo";
import CounterSection from "../about/CounterSection";
import AboutSectionTwo from "../about/AboutSection";

const HomeTwoMain = () => {
  return (
    <>
      <HeroSectionTwo />
      <ServiceSection />
      <AboutSectionTwo />
      <CourseSectionOne />
      <SkillineSection />
      <WhyChoose />
      <CounterSection />
      <TestimonialSection />
      <BlogSection />
      <CtaSectionTwo />
    </>
  );
};

export default HomeTwoMain;
