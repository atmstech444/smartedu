import React from "react";
import HeroSectionTwo from "./HeroSectionTwo";
import CourseSectionOne from "../common/Course/CourseSectionOne";
import SkillineSection from "./SkillineSection";
import WhyChoose from "./WhyChoose";
import CategorySection from "../home/CategorySection";

const HomeTwoMain = () => {
  return (
    <>
      <HeroSectionTwo />
      <CategorySection />
      <CourseSectionOne />
      <WhyChoose />
      <SkillineSection />
    </>
  );
};

export default HomeTwoMain;
