"use client";
import Link from "next/link";
import React from "react";

const ContactForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-md-6">
          <div className="contact__form-input">
            <input type="text" placeholder="სახელი" name="name" />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-md-6">
          <div className="contact__form-input">
            <input type="email" placeholder="ელ. ფოსტა" name="email" />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="contact__form-input">
            <input type="text" placeholder="სათაური" name="subject" />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="contact__form-input">
            <textarea placeholder="შეტყობინება" name="message"></textarea>
          </div>
        </div>

        <div className="col-xxl-12">
          <div className="contact__btn">
            <button type="submit" className="e-btn">
              გაგზავნა
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
