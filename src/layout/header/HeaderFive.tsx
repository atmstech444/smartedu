import Link from "next/link";
import React, { useState, useContext } from "react";
import logoWhite from "../../../public/assets/img/logo/logo-2.png";
import logoBlack from "../../../public/assets/img/logo/logo.png";
import Image from "next/image";
import useScrollDirection from "@/hooks/sticky-header";
import { AppContextType } from "@/interFace/interFace";
import { AppContext } from "@/contextApi/AppProvider";
import { useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import HeaderCart from "./HeaderCart";
import Menu from "./Menu";
import HeaderCategory from "./component/HeaderCategory";
import HeaderCartIcon from "@/svg/HeaderCartIcon";
import MobileMenu from "./component/MobileMenu";

const HeaderFive = () => {
  const scrollDirection = useScrollDirection(null);
  const { toggleSideMenu, sideMenuOpen } = useContext(AppContext) as AppContextType;
  const [cartOpen, setCartOpen] = useState(false);
  // redux import
  const dispatch = useDispatch();
  // const cartProducts = useSelector(
  //   (state: RootState) => state.cart.cartProducts
  // );
  const uniqueProductIds = new Set();
  // cartProducts.forEach((product) => uniqueProductIds.add(product.id));
  const quantityProduct = uniqueProductIds.size;

  return (
    <>
      <header>
        <div id="header-sticky" className={`header-five header__area header__transparent header__padding header__white ${scrollDirection === "down" ? "sticky" : ""}`}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <Link href="/">
                      <Image className="logo-white" src={logoWhite} style={{ width: "auto", height: "auto" }} alt="img not found" />
                      <Image className="logo-black" src={logoBlack} style={{ width: "auto", height: "auto" }} alt="img not found" />
                    </Link>
                  </div>
                  <HeaderCategory />
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                <div className="header__right d-flex justify-content-end align-items-center">
                  <div className="main-menu main-menu-3 d-none d-xl-block">
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
                        <HeaderCartIcon />
                        <span className="cart-item">{quantityProduct}</span>
                      </span>
                    </div>
                  </div>
                  <div className="header__cart header__cart--responsive header__cart--responsive__white">
                    <span
                      className="cart-toggle-btn"
                      onClick={() => {
                        setCartOpen(!cartOpen);
                      }}
                    >
                      <HeaderCartIcon />
                      <span className="cart-item">{quantityProduct}</span>
                    </span>
                  </div>
                  <div className="header__btn ml-20 d-none d-sm-block">
                    <Link href="/contact" className="e-btn">
                      Try for free
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
      <HeaderCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <div onClick={() => setCartOpen(false)} className={cartOpen ? "body-overlay opened" : "body-overlay"}></div>
      <MobileMenu />
      <div onClick={toggleSideMenu} className={sideMenuOpen ? "body-overlay opened" : "body-overlay"}></div>
    </>
  );
};

export default HeaderFive;
