import Link from "next/link";
import React, { useContext } from "react";
import logo from "../../../public/assets/img/logo/logo.png";
import Image from "next/image";
import useScrollDirection from "@/hooks/sticky-header";
import Menu from "./Menu";
import HeaderCategory from "./component/HeaderCategory";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import MobileMenu from "./component/MobileMenu";

const HeaderFour = () => {
  const scrollDirection = useScrollDirection(null);
  const { toggleSideMenu, sideMenuOpen } = useContext(
    AppContext
  ) as AppContextType;
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`header__area header__padding-2 header__shadow ${
            scrollDirection === "down" ? "sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        src={logo}
                        style={{ width: "auto", height: "auto" }}
                        alt="img not found"
                      />
                    </Link>
                  </div>
                  <HeaderCategory />
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                <div className="header__right d-flex justify-content-end align-items-center">
                  <div className="main-menu main-menu-2 d-none d-xl-block">
                    <nav id="mobile-menu">
                      <ul>
                        <Menu />
                      </ul>
                    </nav>
                  </div>
                  <div className="header__btn header__btn-2 ml-50 d-none d-sm-block">
                    <Link href="/sign-up" className="e-btn">
                      Sign Up
                    </Link>
                  </div>
                  <div className="sidebar__menu d-xl-none">
                    <div
                      onClick={toggleSideMenu}
                      className="sidebar-toggle-btn ml-30"
                      id="sidebar-toggle"
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu />
      <div
        onClick={toggleSideMenu}
        className={sideMenuOpen ? "body-overlay opened" : "body-overlay"}
      ></div>
    </>
  );
};

export default HeaderFour;
