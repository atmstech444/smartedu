import Image, { StaticImageData } from "next/image";
import React from "react";

const AboutSection = ({ children, aboutImage }: { children?: React.ReactNode; aboutImage: StaticImageData }) => {
  return (
    <section className="about__area pt-120 pb-100">
      <div className="container">
        <div className="row">
          <div className="side">
            <Image src={aboutImage} style={{ width: "100%", height: "auto" }} alt="img not found" />
          </div>
          <div className="text" style={{ paddingLeft: 0 }}>
            <div className="about__content  pt-25">
              <div className="section__title-wrapper mb-25">{children && children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
