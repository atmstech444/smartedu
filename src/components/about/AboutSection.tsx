import Image from "next/image";
import React from "react";
import AboutImage from "../../../public/assets/img/about/about.jpg";

const AboutSection = ({ children }: { children?: React.ReactNode }) => {
  return (
    <section className="about__area pt-120 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
            <div className="about__thumb-wrapper">
              <div className="edu__thumb ml-100">
                <Image src={AboutImage} style={{ width: "100%", height: "auto" }} alt="img not found" />
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about__content pl-70 pr-60 pt-25">
              <div className="section__title-wrapper mb-25">{children && children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
