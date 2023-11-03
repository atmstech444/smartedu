import Link from "next/link";
import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ContactForm from "@/form/contact-form";
import ContactInfo from "./ContactInfo";
import Image from "next/image";
import YellowBg from "../../../public/assets/img/shape/yellow-bg.png";
import ContactShape1 from "../../../public/assets/img/contact/contact-shape-1.png";
import ContactShape2 from "../../../public/assets/img/contact/contact-shape-2.png";
import ContactShape3 from "../../../public/assets/img/contact/contact-shape-3.png";
import ContactContent from "./ContactContent";

const ContactMain = () => {
  return (
    <>
      <Breadcrumb title="Contact" subTitle="Contact" />
      <section className="contact__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="contact__wrapper">
                <div className="section__title-wrapper mb-40">
                  <h2 className="section__title">
                    Get in {" "}
                    <span className="yellow-bg yellow-bg-big">
                       touch
                      <Image
                        src={YellowBg}
                        style={{ width: "auto", height: "auto" }}
                        alt="img not found"
                      />
                    </span>
                  </h2>
                  <p>
                    Have a question or just want to say hi? {`We'd`} love to
                    hear from you.
                  </p>
                </div>
                <div className="contact__form">
                  <ContactForm />
                </div>
              </div>
            </div>
            <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
              <div className="contact__info white-bg p-relative z-index-1">
                <div className="contact__shape">
                  <Image
                    className="contact-shape-1"
                    src={ContactShape1}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />
                  <Image
                    className="contact-shape-2"
                    src={ContactShape2}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />
                  <Image
                    className="contact-shape-3"
                    src={ContactShape3}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />
                </div>
                <div className="contact__info-inner white-bg">
                  <ul>
                    <li>
                      <div className="contact__info-item d-flex align-items-start mb-35">
                        <div className="contact__info-icon mr-15">
                          <svg className="map" viewBox="0 0 24 24">
                            <path
                              className="st0"
                              d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z"
                            />
                            <circle className="st0" cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <div className="contact__info-text">
                          <h4>New York Office</h4>
                          <p>
                            <Link
                              target="_blank"
                              href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                            >
                              Maypole Crescent 70-80 Upper St Norwich NR2 1LT
                            </Link>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact__info-item d-flex align-items-start mb-35">
                        <div className="contact__info-icon mr-15">
                          <svg className="mail" viewBox="0 0 24 24">
                            <path
                              className="st0"
                              d="M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z"
                            />
                            <polyline
                              className="st0"
                              points="22,6 12,13 2,6 "
                            />
                          </svg>
                        </div>
                        <div className="contact__info-text">
                          <h4>Email us directly</h4>
                          <p>
                            <Link href="mailto:support@educal.com">
                              support@educal.com
                            </Link>
                          </p>
                          <p>
                            <Link href="mailto:info@educal.com">
                              {" "}
                              info@educal.com
                            </Link>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <ContactInfo />
                    </li>
                  </ul>
                  <div className="contact__social pl-30">
                    <h4>Follow Us</h4>
                    <ul>
                      <li>
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="fb"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://twitter.com/"
                          target="_blank"
                          className="tw"
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          className="pin"
                        >
                          <i className="fa-brands fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactContent />
    </>
  );
};

export default ContactMain;
