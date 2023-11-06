//@refresh
"use client";
import React, { useEffect } from "react";
import { animationCreate } from "@/utils/utils";
import Footer from "./footer/Footer";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { usePathname } from "next/navigation";
import HeaderOne from "./header/HeaderOne";
import HeaderTwo from "./header/HeaderTwo";
import HeaderThere from "./header/HeaderThere";
import HeaderFour from "./header/HeaderFour";
import HeaderFive from "./header/HeaderFive";
import FooterTwo from "./footer/footerTwo";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const pathName = usePathname();
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 200);
  }, []);

  return (
    <>
      <BacktoTop />
      {(() => {
        switch (pathName) {
          case "/":
            return <HeaderTwo />;
          case "/home-2":
            return <HeaderTwo />;
          case "/home-3":
            return <HeaderTwo />;
          case "/instructor-details":
            return <HeaderTwo />;
          case "/event-details":
            return <HeaderTwo />;
          case "/error":
            return <HeaderTwo />;
          case "/sign-in":
            return <HeaderTwo />;
          case "/sign-up":
            return <HeaderTwo />;
          case "/forgot-password":
            return <HeaderTwo />;
          case "/policy-privacy":
            return <HeaderTwo />;
          default:
            return <HeaderTwo />;
        }
      })()}
      {children}
      {(() => {
        switch (pathName) {
          default:
            return <Footer />;
          case "/home-2":
            return <FooterTwo />;
        }
      })()}
    </>
  );
};

export default Wrapper;
