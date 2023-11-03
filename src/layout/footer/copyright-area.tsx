import Link from "next/link";
import React from "react";

const CopyrightArea = ({ wrapperClass, footerClass }: any) => {
  return (
    <div
      className={
        footerClass ? `footer__bottom ${footerClass}` : "footer__bottom"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div
              className={
                wrapperClass
                  ? `footer__copyright text-center ${wrapperClass}`
                  : "footer__copyright text-center"
              }
            >
              <p>
                © 2023 Educal, All Rights Reserved. Design By{" "}
                <Link href="/">Theme Pure</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightArea;
