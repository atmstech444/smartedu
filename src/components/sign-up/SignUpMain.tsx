import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../../../public/assets/img/icon/sign/man-3.png";
import img2 from "../../../public/assets/img/icon/sign/man-2.png";
import img3 from "../../../public/assets/img/icon/sign/circle.png";
import img4 from "../../../public/assets/img/icon/sign/zigzag.png";
import img5 from "../../../public/assets/img/icon/sign/dot.png";
import img6 from "../../../public/assets/img/icon/sign/sign-up.png";
import img7 from "../../../public/assets/img/icon/sign/flower.png";
import RegisterForm from "@/form/register-form";

const SignUpMain = () => {
  return (
    <section className="signup__area po-rel-z1 pt-100 pb-145">
      <div className="sign__shape">
        <Image
          className="man-1"
          src={img1}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
        <Image
          className="man-2 man-22"
          src={img2}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
        <Image
          className="circle"
          src={img3}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
        <Image
          className="zigzag"
          src={img4}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
        <Image
          className="dot"
          src={img5}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
        <Image
          className="bg"
          src={img6}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
        <Image
          className="flower"
          src={img7}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
            <div className="section__title-wrapper text-center mb-55">
              <h2 className="section__title">
                Create a free <br /> Account
              </h2>
              <p>{`I'm`} a subhead that goes with a story.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="sign__wrapper white-bg">
              <div className="sign__header mb-35">
                <div className="sign__in text-center">
                  <Link
                    href="#"
                    className="sign__social g-plus text-start mb-15"
                  >
                    <i className="fab fa-google-plus-g"></i>Sign Up with Google
                  </Link>
                  <p>
                    {" "}
                    <span>........</span> Or,{" "}
                    <Link href="/sign-up">sign up</Link> with your email
                    <span> ........</span>{" "}
                  </p>
                </div>
              </div>
              <div className="sign__form">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpMain;
