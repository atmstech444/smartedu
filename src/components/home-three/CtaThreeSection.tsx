import Image from "next/image";
import React from "react";
import CtaImage from "../../../public/assets/img/cta/cta-shape-1.png";
import ShapeImage from "../../../public/assets/img/cta/cta-shape-2.png";
import Link from "next/link";

const CtaThreeSection = () => {
  return (
    <section className="cta__area pb-150">
      <div className="container">
        <div className="cta__inner-3 p-relative grey-bg-2 pt-75 pb-75 fix">
          <div className="cta__shape-3">
            <Image
              className="cta-2"
              src={CtaImage}
              style={{ width: "auto", height: "auto" }}
              alt="img not found"
            />
            <Image
              className="cta-3"
              src={ShapeImage}
              style={{ width: "auto", height: "auto" }}
              alt="img not found"
            />
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__content text-center p-relative">
                <span>Coming June</span>
                <h3 className="cta__title-2">Built to stand out.</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="cta__form grey-bg-2">
                <div className="cta__form-inner">
                  <form action="#">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <button type="submit" className="e-btn e-btn-6">
                      Take A Free Course
                    </button>
                  </form>
                </div>
                <div className="cta__agree d-flex align-items-center">
                  <input
                    className="e-check-input"
                    type="checkbox"
                    id="e-agree"
                  />
                  <label className="e-check-label" htmlFor="e-agree">
                    By signing up you agree to our{" "}
                    <Link href="#"> Terms & Conditions</Link>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaThreeSection;
