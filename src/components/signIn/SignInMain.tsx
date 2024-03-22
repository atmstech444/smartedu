import LoginForm from "@/form/login-form";
import Link from "next/link";
import React from "react";
import img1 from "../../../public/assets/img/icon/sign/man-1.png";
import img2 from "../../../public/assets/img/icon/sign/man-2.png";
import img3 from "../../../public/assets/img/icon/sign/circle.png";
import img4 from "../../../public/assets/img/icon/sign/zigzag.png";
import img5 from "../../../public/assets/img/icon/sign/dot.png";
import img6 from "../../../public/assets/img/icon/sign/sign-up.png";
import Image from "next/image";

const SignInMain = () => {
  return (
    <section className="signup__area po-rel-z1 pt-150 pb-145">
      <div className="sign__shape">
        <Image className="man-1" src={img1} style={{ width: "auto", height: "auto" }} alt="image not found" />
        <Image className="man-2" src={img2} style={{ width: "auto", height: "auto" }} alt="image not found" />
        <Image className="circle" src={img3} style={{ width: "auto", height: "auto" }} alt="image not found" />
        <Image className="zigzag" src={img4} style={{ width: "auto", height: "auto" }} alt="image not found" />
        <Image className="dot" src={img5} style={{ width: "auto", height: "auto" }} alt="image not found" />
        <Image className="bg" src={img6} style={{ width: "auto", height: "auto" }} alt="image not found" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="sign__wrapper white-bg">
              <div className="sign__form">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInMain;
