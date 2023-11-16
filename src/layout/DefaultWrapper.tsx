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
import HeaderTwo from "./header/HeaderTwo";
import FooterTwo from "./footer/footerTwo";
import store, { useAppDispatch } from "@/redux/store";
import { GET_Courses } from "@/api/GET_Courses";
import { setCourses } from "@/redux/slices/coursesSlice";
import { Provider } from "react-redux";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  useEffect(() => {
    GET_Courses().then((res) => {
      if (res) {
        dispatch(setCourses(res));
      }
    });
  }, []);
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
