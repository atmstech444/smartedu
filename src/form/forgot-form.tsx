"use client";
import { POST_ForgotPassword } from "@/api/POST_ForgotPassword";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ForgotForm = () => {
  const email = React.useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (email.current?.value !== "") {
      try {
        await POST_ForgotPassword({ email: email.current?.value! }, router);
        if (email.current) {
          email.current.value = "";
        }
      } catch {}
    }
  };

  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 mt-80 mb-80">
        <div className="sign__wrapper white-bg">
          <div className="sign__header mb-35">
            <div className="sign__in text-center">
              <form onSubmit={handleSubmit}>
                <div className="sign__input-wrapper mb-25">
                  <h5 className="forgot-heading">პაროლის აღდგენა</h5>
                  <p>
                    ჩაწერე რეგისტრირებული <br /> ელ. ფოსტა
                  </p>
                  <div className="sign__input">
                    <div className="login__input">
                      <input ref={email} className="forgot-input" type="email" placeholder="ელ. ფოსტა" />
                    </div>
                  </div>
                </div>
                <div className="sing-buttom d-inline-block mx-auto px-5">
                  <button className="e-btn  w-100" type="submit">
                    გაგზავნა
                  </button>
                </div>
                <div className="sign__new text-center mt-20">
                  <p>
                    გახსოვს პაროლი? <Link href="/sign-in">შესვლა</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotForm;
