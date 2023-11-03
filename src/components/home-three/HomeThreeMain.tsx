import React from "react";
import HeroSlider from "../Elements/Slider/HeroSlider";
import dynamic from "next/dynamic";
import CourseSectionThree from "./CourseSectionThree";
import TeacherSection from "./TeacherSection";
import CtaThreeSection from "./CtaThreeSection";
import WhyChoose from "../home-two/WhyChoose";
import BlogSection from "../home-two/BlogSection";
import AboutSection from "../about/AboutSection";
import TestimonialSlider from "../Elements/Slider/TestimonialSlider";
const BrandWithNoSSR = dynamic(() => import("../Elements/Slider/BrandSlider"), {
  ssr: false,
});
const HomeThreeMain = () => {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <BrandWithNoSSR />
      <CourseSectionThree />
      <TeacherSection />
      <CtaThreeSection />
      <TestimonialSlider />
      <WhyChoose />
      <BlogSection />
    </>
  );
};

export default HomeThreeMain;
