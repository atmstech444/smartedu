"use client";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import Logo from "../../../public/assets/img/logo/logo.png";
import Image from "next/image";
import useScrollDirection from "@/hooks/sticky-header";
import Menu from "./Menu";
import MobileMenu from "./component/MobileMenu";
import { AppContextType } from "@/interFace/interFace";
import { AppContext } from "@/contextApi/AppProvider";
import ProfieIcon from "../../../public/assets/img/profile/profile.jpg";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { POST_Logout } from "@/api/POST_Logout";
import { useRouter } from "next/navigation";
import { GET_MyCourses } from "@/api/GET_MyCourses";
import { GET_Progress } from "@/api/GET_Progress";

const HeaderTwo = () => {
  const scrollDirection = useScrollDirection(null);
  const { toggleSideMenu, sideMenuOpen } = useContext(AppContext) as AppContextType;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const logout = () => {
    if (user) {
      POST_Logout({ token: user.token }, router, dispatch);
    }
  };

  useEffect(() => {
    if (user) {
      GET_MyCourses({ token: user.token }, dispatch);
      GET_Progress({ token: user.token }, dispatch);
    }
  }, [user]);

  return (
    <>
      <header>
        <div
          id="header-sticky"
          style={{ backdropFilter: "blur(16px)", backgroundColor: scrollDirection === "down" ? "white" : "rgba(256,256,256)" }}
          className={`header__area header__transparent header__padding-2 ${scrollDirection === "down" ? "sticky" : ""}`}
        >
          <p style={{ textAlign: "center", marginBottom: 0, background: "#2b4eff", color: "#fff" }}>საიტი სატესტო რეჟიმშია</p>
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
                  {user ? (
                    <>
                      <Link href="/profile" style={{ margin: "0px", color: "black", fontSize: "18px", display: "flex", gap: "16px", marginLeft: "50px", alignItems: "center" }}>
                        <Image style={{ width: "30px", height: "auto" }} src={ProfieIcon} alt="Profile" />
                        <p style={{ margin: 0 }} className="only-des">
                          {user.name + " " + user.surname}
                        </p>
                      </Link>

                      <i onClick={logout} style={{ cursor: "pointer" }} className="only-des fa-solid fa-arrow-right-from-bracket ml-20"></i>
                    </>
                  ) : (
                    <div style={{ display: "flex", gap: "24px", marginLeft: "50px", alignItems: "center" }}>
                      <div className="header__btn header__btn-2 d-none d-sm-block">
                        <Link href="/sign-in" className="e-btn" style={{ fontSize: "18px" }}>
                          შესვლა
                        </Link>
                      </div>

                      <Link href="/sign-up" className="d-none d-sm-block" style={{ color: "black", fontSize: "18px" }}>
                        რეგისტრაცია
                      </Link>
                    </div>
                  )}

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
