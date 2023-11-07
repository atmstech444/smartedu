import Link from "next/link";
import React from "react";
import YellowImg from "../../../public/assets/img/shape/yellow-bg-2.png";
import img1 from "../../../public/assets/img/why/why.jpg";
import img2 from "../../../public/assets/img/why/why-shape-green.png";
import img3 from "../../../public/assets/img/why/why-shape-pink.png";
import img4 from "../../../public/assets/img/why/why-shape-dot.png";
import img5 from "../../../public/assets/img/why/why-shape-line.png";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <section className="why__area pt-125">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
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
                <p>Smart Education-ში ჩვენ გვჯერა, რომ სწავლა უნდა იყოს ხელმისაწვდომი, საინტერესო და სახალისო. სწორედ ამიტომ, ჩვენ გვაქვს მისია, გავხადოთ არაფორმალური განათლება ხელმისაწვდო.</p>
              </div>
              <div className="why__btn">
                <Link href="/course-grid" className="e-btn e-btn-3 mr-30">
                  დაიწყე სწავლა
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8">
            <div className="why__thumb">
              <Image src={img1} style={{ width: "370px", height: "auto", display: "block", marginLeft: "auto" }} alt="img not found" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
