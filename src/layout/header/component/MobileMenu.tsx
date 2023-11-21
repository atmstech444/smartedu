import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/interFace/interFace";
import Link from "next/link";
import React, { useContext } from "react";
import Logo from "../../../../public/assets/img/logo/logo.png";
import Image from "next/image";
import MenuTwo from "./MenuTwo";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { POST_Logout } from "@/api/POST_Logout";

const MobileMenu = () => {
  const { toggleSideMenu, sideMenuOpen } = useContext(AppContext) as AppContextType;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const logout = () => {
    if (user) {
      POST_Logout({ token: user.token }, router, dispatch);
    }
  };
  return (
    <div className={sideMenuOpen ? "sidebar__area open" : "sidebar__area"}>
      <div className="sidebar__wrapper">
        <div className="sidebar__close">
          <button className="sidebar__close-btn" onClick={toggleSideMenu} id="sidebar__close-btn">
            <span>
              <i className="fal fa-times"></i>
            </span>
            <span>close</span>
          </button>
        </div>
        <div className="sidebar__content">
          <div className="logo mb-40">
            <Link href="/">
              <Image style={{ width: "120px", height: "auto" }} src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="mm-menu">
            <ul>
              <MenuTwo close={toggleSideMenu} />
            </ul>
            {user ? (
              <i onClick={logout} style={{ cursor: "pointer", fontSize: "24px" }} className="only-mob fa-solid fa-arrow-right-from-bracket mt-20"></i>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "50px", alignItems: "center" }}>
                <div className="header__btn header__btn-2 ">
                  <Link onClick={toggleSideMenu} href="/sign-in" className="e-btn" style={{ fontSize: "18px" }}>
                    შესვლა
                  </Link>
                </div>
                <Link onClick={toggleSideMenu} href="/sign-up" style={{ color: "black", fontSize: "18px" }}>
                  რეგისტრაცია
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
