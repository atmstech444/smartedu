import Link from "next/link";
import React, { useContext } from "react";
import LogoWhite from "../../../public/assets/img/logo/logo-2.png";
import LogoBlack from "../../../public/assets/img//logo/logo.png";
import Image from "next/image";
import useScrollDirection from "@/hooks/sticky-header";
import Menu from "./Menu";
import { AppContextType } from "@/interFace/interFace";
import { AppContext } from "@/contextApi/AppProvider";
import MobileMenu from "./component/MobileMenu";
import SearchField from "./component/SearchField";

const HeaderThere = () => {
  const scrollDirection = useScrollDirection(null);
  const { toggleSideMenu, sideMenuOpen, toggleHeaderSerach, headerSerachOpen } = useContext(
    AppContext
  ) as AppContextType;
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`header__area header__transparent header__padding-2 ${
            scrollDirection === "down" ? "sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        className="logo-white"
                        src={LogoWhite}
                        style={{ width: "100%", height: "auto" }}
                        alt="logo"
                      />
                      <Image
                        className="logo-black"
                        src={LogoBlack}
                        style={{ width: "100%", height: "auto" }}
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 d-none d-xl-block">
                <div className="main-menu main-menu-3 d-none d-xl-block">
                  <nav id="mobile-menu">
                    <ul>
                      <Menu />
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="header__right d-flex justify-content-end align-items-center">
                  <div className="header__search-2" onClick={toggleHeaderSerach}>
                    <svg className="search-toggle" viewBox="0 0 584.4 584.4">
                      <g>
                        <g>
                          <path
                            className="st0"
                            d="M565.7,474.9l-61.1-61.1c-3.8-3.8-8.8-5.9-13.9-5.9c-6.3,0-12.1,3-15.9,8.3c-16.3,22.4-36,42.1-58.4,58.4    c-4.8,3.5-7.8,8.8-8.3,14.5c-0.4,5.6,1.7,11.3,5.8,15.4l61.1,61.1c12.1,12.1,28.2,18.8,45.4,18.8c17.1,0,33.3-6.7,45.4-18.8    C590.7,540.6,590.7,499.9,565.7,474.9z"
                          />
                          <path
                            className="st1"
                            d="M254.6,509.1c140.4,0,254.5-114.2,254.5-254.5C509.1,114.2,394.9,0,254.6,0C114.2,0,0,114.2,0,254.5    C0,394.9,114.2,509.1,254.6,509.1z M254.6,76.4c98.2,0,178.1,79.9,178.1,178.1s-79.9,178.1-178.1,178.1S76.4,352.8,76.4,254.5    S156.3,76.4,254.6,76.4z"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="header__btn header__btn-2 ml-30 d-none d-sm-block">
                    <Link href="/sign-up" className="e-btn">
                      Sign Up
                    </Link>
                  </div>
                  <div className="sidebar__menu d-xl-none">
                    <div
                      onClick={toggleSideMenu}
                      className="sidebar-toggle-btn sidebar-toggle-btn-white ml-30"
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
      <SearchField />
      <div
        onClick={toggleSideMenu}
        className={sideMenuOpen ? "body-overlay opened" : "body-overlay"}
      ></div>
      <div onClick={toggleHeaderSerach} className={headerSerachOpen ? "body-overlay opened" : "body-overlay"}></div>
    </>
  );
};

export default HeaderThere;
