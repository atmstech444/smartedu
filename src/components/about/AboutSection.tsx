import Image, { StaticImageData } from "next/image";
import React from "react";

const AboutSection = ({ children, aboutImage }: { children?: React.ReactNode; aboutImage: StaticImageData }) => {
  return (
    <section className="about__area pt-120 pb-150">
      <div className="container">
        <div className="row">
          <div className="side">
            <Image src={aboutImage} style={{ width: "100%", height: "auto" }} alt="img not found" />
          </div>
          <div className="text">
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
