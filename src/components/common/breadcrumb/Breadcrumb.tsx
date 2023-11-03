import React from "react";
import Link from "next/link";
import bgImage from "../../../../public/assets/img/page-title/page-title.jpg";

interface PropsData {
  title: string | undefined;
  subTitle: string | undefined;
}

const Breadcrumb = ({ title, subTitle }: PropsData) => {
  return (
    <>
      <section
        className="page__title-area page__title-height page__title-overlay d-flex align-items-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="page__title-wrapper mt-110">
                <h3 className="page__title">{title}</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {subTitle}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
