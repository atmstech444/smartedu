import Link from "next/link";
import React from "react";
import YellowImg from "../../../public/assets/img/shape/yellow-bg-2.png";
import WhatThumb1 from "../../../public/assets/img/what/what-1.jpg";
import WhatThumb2 from "../../../public/assets/img/what/what-2.jpg";
import Image from "next/image";

const SkillineSection = () => {
  return (
    <section className="what__area pt-200 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="section__title-wrapper mb-60 text-center">
              <h2 className="section__title">
                რა არის{" "}
                <span className="yellow-bg-big">
                  Smart Education? <Image src={YellowImg} style={{ width: "auto", height: "auto" }} alt="img not found" />
                </span>
              </h2>
              <p>Smart Education არის საგანმანათლებლო პლატფორმა, რომელიც საზოგადოების დაინტერესებულ ჯგუფებს სთავაზობს აქტუალურ კურსებს, როგორც ფიზიკურ აუდიტორიაში, ასევე ონლაინ.</p>
            </div>
          </div>
        </div>
        <div className="row" style={{ display: "flex", justifyContent: "center" }}>
          <div className="col-xxl-5 col-xl-5 col-lg-6">
            <div className="what__item transition-3 mb-30 p-relative fix">
              <div className="what__thumb w-img">
                <Image src={WhatThumb1} style={{ width: "100%", height: "auto" }} alt="img not found" />
              </div>
              <div className="what__content p-absolute text-center">
                <h3 className="what__title white-color">
                  გახდი <br /> ჩვენი გუნდის
                </h3>
                <Link href="/contact" className="e-btn e-btn-border-2">
                  პარტნიორი
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillineSection;
