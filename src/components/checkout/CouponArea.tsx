"use client";
import Link from "next/link";
import React, { useState } from "react";

const CouponArea = () => {
  const [isActive, setActive] = useState(false);
  const [isActiveA, setActiveA] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleToggleA = () => {
    setActiveA(!isActiveA);
  };

  return (
    <section className="coupon-area pt-100 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="coupon-accordion">
              <h3>
                Returning customer?{" "}
                <span id="showlogin" onClick={handleToggle}>
                  Click here to login
                </span>
              </h3>
              <div
                id="checkout-login"
                className={`coupon-content ${isActive ? "d-block" : "d-none"}`}
              >
                <div className="coupon-info">
                  <p className="coupon-text">
                    Quisque gravida turpis sit amet nulla posuere lacinia. Cras
                    sed est sit amet ipsum luctus.
                  </p>
                  <form action="#">
                    <p className="form-row-first">
                      <label>
                        Username or email <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="edu-input-fill"
                        placeholder="Username or email"
                      />
                    </p>
                    <p className="form-row-last">
                      <label>
                        Password <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="edu-input-fill"
                        placeholder="Password"
                      />
                    </p>
                    <p className="form-row">
                      <button className="e-btn e-btn-border" type="submit">
                        Login
                      </button>
                      <label>
                        <input type="checkbox" />
                        Remember me
                      </label>
                    </p>
                    <p className="lost-password">
                      <Link href="#">Lost your password?</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="coupon-accordion">
              <h3>
                Have a coupon?{" "}
                <span id="showcoupon" onClick={handleToggleA}>
                  Click here to enter your code
                </span>
              </h3>
              <div
                id="checkout_coupon"
                className={`coupon-checkout-content ${
                  isActiveA ? "d-block" : "d-none"
                }`}
              >
                <div className="coupon-info">
                  <form action="#">
                    <p className="checkout-coupon">
                      <input
                        type="text"
                        className="edu-input-fill"
                        placeholder="Coupon Code"
                      />
                      <button className="e-btn e-btn-border" type="submit">
                        Apply Coupon
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouponArea;
