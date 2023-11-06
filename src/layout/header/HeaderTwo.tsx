import Link from "next/link";
import React, { useContext } from "react";
import Logo from "../../../public/assets/img/logo/logo.png";
import Image from "next/image";
import useScrollDirection from "@/hooks/sticky-header";
import Menu from "./Menu";
import HeaderCatDotIcon from "@/svg/header-cat-dot-icon";
import MobileMenu from "./component/MobileMenu";
import { AppContextType } from "@/interFace/interFace";
import { AppContext } from "@/contextApi/AppProvider";

const HeaderTwo = () => {
  const scrollDirection = useScrollDirection(null);
  const { toggleSideMenu, sideMenuOpen } = useContext(AppContext) as AppContextType;
  return (
    <>
      <header>
        <div id="header-sticky" className={`header__area header__transparent header__padding-2 ${scrollDirection === "down" ? "sticky" : ""}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <Link href="/">
                      <Image src={Logo} style={{ width: "100%", height: "auto" }} alt="logo" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                <div className="header__right d-flex justify-content-end align-items-center">
                  <div className="main-menu main-menu-2 d-none d-xl-block">
                    <nav id="mobile-menu ">
                      <ul>
                        <Menu />
                      </ul>
                    </nav>
                  </div>
                  <div style={{ display: "flex", gap: "24px", marginLeft: "50px", alignItems: "center" }}>
                    <div className="header__btn header__btn-2 d-none d-sm-block">
                      <Link href="/sign-in" className="e-btn" style={{ fontSize: "18px" }}>
                        შესვლა
                      </Link>
                    </div>
                    <Link href="/sign-up" style={{ color: "black", fontSize: "18px" }}>
                      რეგისტრაცია
                    </Link>
                  </div>

                  <div className="sidebar__menu d-xl-none">
                    <div onClick={toggleSideMenu} className="sidebar-toggle-btn ml-30" id="sidebar-toggle">
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
      <div onClick={toggleSideMenu} className={sideMenuOpen ? "body-overlay opened" : "body-overlay"}></div>
    </>
  );
};

export default HeaderTwo;
