import Link from "next/link";
import React, { useRef } from "react";
import FooterLogo from "../../../public/assets/img/logo/logo.png";
import Image from "next/image";
import CopyrightArea from "./copyright-area";
import { POST_Subscribe } from "@/api/POST_Subscribe";
import styled from "styled-components";

const Footer = () => {
  const email = useRef<HTMLInputElement | null>(null);
  const submit = async (event: any) => {
    event.preventDefault();
    if (email.current?.value) {
      try {
        await POST_Subscribe({ email: email.current.value });
        email.current.value = "";
      } catch {}
    }
  };
  return (
    <>
      <FooterContainer>
        <div className="footer__area footer-bg">
          <div className="footer__top pt-190 pb-40">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-6">
                  <div className="footer__widget mb-50" style={{ padding: "24px"}}>
                    <div className="footer__widget-head mb-22" >
                      <div className="footer__logo">
                        <Link href="/">
                          <Image src={FooterLogo} alt="logo" className="img-fluid d-none d-sm-block" />
                        </Link>
                        <Link href="/">
                          <Image src={FooterLogo} alt="logo" className="img-fluid d-block d-sm-none w-50 h-auto" />
                        </Link>
                      </div>
                    </div>
                    <div className="footer__widget-body">
                      <p>არაფორმალური განათლების აკადემია</p>
                      <div className="footer__social">
                        <ul>
                          <li>
                            <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/smarteducation.ge/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/thesmart-education/" className="tw" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li>
                            <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thesmart.education/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" className="pin" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <i className="fa-brands fa-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link target="_blank" rel="noopener noreferrer" href="http://www.tiktok.com/@thesmart.education" className="tiktok" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <i className="fa-brands fa-tiktok" style={{ color: "#000000" }}></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 offset-xxl-2 col-xl-2 offset-xl-2 col-lg-3 offset-lg-1 col-md-2 offset-md-2 col-sm-5 offset-sm-1" style={{ padding: "24px"}}>
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">ნავიგაცია</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__link">
                        <ul>
                          <li>
                            <Link href="/">მთავარი</Link>
                          </li>
                          <li>
                            <Link href="/about">ჩვენ შესახებ</Link>
                          </li>
                          <li>
                            <Link href="/contact">კონტაქტი</Link>
                          </li>
                          <li>
                            <Link href="/terms-conditions">წესები და პირობები</Link>
                          </li>
                          <li>
                            <Link href="/policy-privacy">კონფიდენციალურობა</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 offset-xl-1 col-sm-6" style={{ padding: "24px"}}>
                  <div className="footer__widget footer__pl-70 mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">გამოწერა</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__subscribe">
                        <form onSubmit={submit}>
                          <div className="footer__subscribe-input mb-15">
                            <input ref={email} type="email" placeholder="ელ-ფოსტა" />
                            <button type="submit">
                              <i className="fas fa-arrow-right"></i>
                              <i className="fas fa-arrow-right"></i>
                            </button>
                          </div>
                        </form>
                        <p>მიიღეთ სიახლეები პირდაპირ თქვენს ელ-ფოსტაზე.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CopyrightArea />
        </div>
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled.footer`
   @media (min-width: 365px) and (max-width:1024px) {
    margin-top: 250px;
  }
`
 


export default Footer;
