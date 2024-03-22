import React from "react";
import HeroSectionOne from "./HeroSectionOne";
import CategorySection from "./CategorySection";
import BannerSection from "./BannerSection";
import CourseSectionOne from "../common/Course/CourseSectionOne";
import EventSection from "./EventSection";
import PriceSectionOne from "./PriceSectionOne";
import CtaSection from "./CtaSection";

const HomeMain = () => {
  return (
    <>
      <HeroSectionOne />
      <CategorySection />
      <BannerSection />
      <CourseSectionOne />
      <EventSection />
      <PriceSectionOne />
      <CtaSection />
    </>
  );
};

export default HomeMain;
