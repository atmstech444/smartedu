import Image from "next/image";
import React from "react";
import preloaderImg from "../../../public/assets/img/logo/logo-icon.png";
import preloaderImgTwo from "../../../public/assets/img/logo/logo-text-2.png";

const Preloader = () => {
  return (
    <>
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div className="loading-content-2 text-center">
              <Image
                className="loading-logo-icon-2"
                style={{ width: "auto", height: "auto" }}
                src={preloaderImg}
                alt="image not found"
                loading="eager" // Use the 'loading' attribute to control image loading behavior
              />
              <Image
                className="loading-logo-text-2"
                style={{ width: "auto", height: "auto" }}
                src={preloaderImgTwo}
                alt="image not found"
                loading="eager" // Use the 'loading' attribute to control image loading behavior
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
