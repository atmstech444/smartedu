import Link from "next/link";
import React from "react";
import YellowImg from "../../../public/assets/img/shape/yellow-bg-2.png";
import img1 from "../../../public/assets/img/why/why.jpg";
import img2 from "../../../public/assets/img/why/why-shape-green.png";
import img3 from "../../../public/assets/img/why/why-shape-pink.png";
import img4 from "../../../public/assets/img/why/why-shape-dot.png";
import img5 from "../../../public/assets/img/why/why-shape-line.png";
import Image from "next/image";
import styled from "styled-components";

const WhyChoose = () => {
  return (
    <div className="why_choose_us_container container">
      <section className="why__area ">
        <div className="">
          <div className="row align-items-center">
            <div className="">
              <div className="why__content pr-50 mt-40">
                <div className="section__title-wrapper mb-30">
                  <h2 className="section__title">
                    მიაღწიე შენს მიზნებს <br />
                    <span className="yellow-bg yellow-bg-big">
                      Smart Education-თან
                      <Image src={YellowImg} style={{ width: "auto", height: "auto" }} alt="img not found" />
                    </span>{" "}
                    ერთად
                  </h2>
                  <p>Smart Education-ში ჩვენ გვჯერა, რომ სწავლა უნდა იყოს ხელმისაწვდომი, საინტერესო და სახალისო. სწორედ ამიტომ, ჩვენ გვაქვს მისია, გავხადოთ არაფორმალური განათლება ხელმისაწვდომი.</p>
                </div>
                <div className="why__btn">
                  <Link href="/course-grid" className="e-btn e-btn-3 mr-30" style={{ textTransform: "lowercase" }}>
                    დაიწყე სწავლა
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image src={img1} alt="img not found" className="why_choose_us_image" />
    </div>
  );
};

export default WhyChoose;
