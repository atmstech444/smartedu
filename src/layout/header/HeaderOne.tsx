"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import HeaderLogo from "../../../public/assets/img/logo/logo.png";
import Image from "next/image";
import useScrollDirection from "@/hooks/sticky-header";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import HeaderCart from "./HeaderCart";
import Menu from "./Menu";
import MobileMenu from "./component/MobileMenu";
import HeaderCategory from "./component/HeaderCategory";

const HeaderOne = () => {
  const scrollDirection = useScrollDirection(null);

  const { toggleSideMenu, sideMenuOpen } = useContext(
    AppContext
  ) as AppContextType;

  const [cartOpen, setCartOpen] = useState(false);

  // redux import
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const uniqueProductIds = new Set();
  cartProducts.forEach((product) => uniqueProductIds.add(product.id));

  const quantityProduct = uniqueProductIds.size;

  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`header__area header__transparent header__padding ${
            scrollDirection === "down" ? "sticky" : ""
          }`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        src={HeaderLogo}
                        style={{ width: "100%", height: "auto" }}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <HeaderCategory />
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                <div className="header__right d-flex justify-content-end align-items-center">
                  <div className="main-menu d-none d-xl-block">
                    <nav id="mobile-menu">
                      <ul>
                        <Menu />
                      </ul>
                    </nav>
                  </div>
                  <div className="header__search p-relative ml-50 d-none d-md-block">
                    <form action="#">
                      <input type="text" placeholder="Search..." />
                      <button type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                    <div className="header__cart">
                      <span
                        className="cart-toggle-btn"
                        onClick={() => {
                          setCartOpen(!cartOpen);
                        }}
                      >
                        <div className="header__cart-icon">
                          <svg viewBox="0 0 24 24">
                            <circle className="st0" cx="9" cy="21" r="1" />
                            <circle className="st0" cx="20" cy="21" r="1" />
                            <path
                              className="st0"
                              d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6"
                            />
                          </svg>
                        </div>
                        <span className="cart-item">{quantityProduct}</span>
                      </span>
                    </div>
                  </div>
                  <div className="header__cart header__cart--responsive">
                    <span
                      className="cart-toggle-btn"
                      onClick={() => {
                        setCartOpen(!cartOpen);
                      }}
                    >
                      <div className="header__cart-icon">
                        <svg viewBox="0 0 24 24">
                          <circle className="st0" cx="9" cy="21" r="1" />
                          <circle className="st0" cx="20" cy="21" r="1" />
                          <path
                            className="st0"
                            d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6"
                          />
                        </svg>
                      </div>
                      <span className="cart-item">{quantityProduct}</span>
                    </span>
                  </div>
                  <div className="header__btn ml-20 d-none d-sm-block">
                    <Link href="/contact" className="e-btn">
                      Try for free
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
      <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <div
        onClick={() => setCartOpen(false)}
        className={cartOpen ? "body-overlay opened" : "body-overlay"}
      ></div>
      <MobileMenu />
      <div
        onClick={toggleSideMenu}
        className={sideMenuOpen ? "body-overlay opened" : "body-overlay"}
      ></div>
    </>
  );
};

export default HeaderOne;
