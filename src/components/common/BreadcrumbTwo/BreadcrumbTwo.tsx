import Link from "next/link";
import BreadcrumbImage from "../../../../public/assets/img/page-title/page-title-2.jpg";
import React, { ReactNode } from "react";

interface BreadcrumbTwoProps {
  titleTwo: ReactNode;
  subTitleTwo: string;
}

const BreadcrumbTwo: React.FC<BreadcrumbTwoProps> = ({
  titleTwo,
  subTitleTwo,
}) => {
  return (
    <section
      className="page__title-area page__title-height page__title-overlay d-flex align-items-center"
      style={{ backgroundImage: `url(${BreadcrumbImage.src})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="page__title-wrapper">
              <h3 className="page__title">{titleTwo}</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {subTitleTwo}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbTwo;
