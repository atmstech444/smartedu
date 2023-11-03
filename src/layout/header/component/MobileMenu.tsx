import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import Link from "next/link";
import React, { useContext } from "react";
import Logo from "../../../../public/assets/img/logo/logo.png";
import Image from "next/image";
import MenuTwo from "./MenuTwo";

const MobileMenu = () => {
  const { toggleSideMenu, sideMenuOpen } = useContext(
    AppContext
  ) as AppContextType;
  return (
    <div className={sideMenuOpen ? "sidebar__area open" : "sidebar__area"}>
      <div className="sidebar__wrapper">
        <div className="sidebar__close">
          <button
            className="sidebar__close-btn"
            onClick={toggleSideMenu}
            id="sidebar__close-btn"
          >
            <span>
              <i className="fal fa-times"></i>
            </span>
            <span>close</span>
          </button>
        </div>
        <div className="sidebar__content">
          <div className="logo mb-40">
            <Link href="/">
              <Image
                style={{ width: "auto", height: "auto" }}
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>
          <div className="mm-menu">
            <ul>
              <MenuTwo />
            </ul>
          </div>

          <div className="sidebar__search p-relative mt-40 ">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button type="submit">
                <i className="fa-light fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
