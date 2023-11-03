"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const ForgotForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    const form = document.querySelector("#yourFormId");
    if (form) {
      form.addEventListener("submit", handleSubmit);
    }
    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 mt-80 mb-80">
        <div className="sign__wrapper white-bg">
          <div className="sign__header mb-35">
            <div className="sign__in text-center">
              <form onSubmit={handleSubmit}>
                <div className="sign__input-wrapper mb-25">
                  <h5 className="forgot-heading">Forgot Password</h5>
                  <p>Enter your email address to request password reset.</p>
                  <div className="sign__input">
                    <div className="login__input">
                      <input
                        className="forgot-input"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="sing-buttom d-inline-block mx-auto px-5">
                  <button className="e-btn  w-100" type="submit">
                    Send Request
                  </button>
                </div>
                <div className="sign__new text-center mt-20">
                  <p>
                    Remember your password? <Link href="/sign-in">Login</Link>
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
