import React from "react";
import bgImg from "../../../public/assets/img/page-title/page-title-3.jpg";
import Shape1 from "../../../public/assets/img/page-title/page-title-shape-1.png";
import Shape2 from "../../../public/assets/img/page-title/page-title-shape-2.png";
import Shape3 from "../../../public/assets/img/page-title/page-title-shape-3.png";
import Shape4 from "../../../public/assets/img/page-title/page-title-shape-4.png";
import Image, { StaticImageData } from "next/image";

interface Blog {
  id: number;
  authorImg: StaticImageData;
  title: string;
  blogTag: string;
  date: string;
  author: string;
}

const PageTitle: React.FC<{ blog: Blog }> = ({ blog }: any) => {
  return (
    <section
      className="page__title-area page__title-height-2 page__title-overlay d-flex align-items-center"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="page__title-shape">
        <Image
          className="page-title-shape-1"
          src={Shape1}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
        <Image
          className="page-title-shape-2"
          src={Shape2}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
        <Image
          className="page-title-shape-3"
          src={Shape3}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
        <Image
          className="page-title-shape-4"
          src={Shape4}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-10 col-xl-10 col-lg-10 ">
            <div className="page__title-wrapper mt-110">
              <span className="page__title-pre">{blog?.blogTag}</span>
              <h3 className="page__title-2">{blog?.title}</h3>
              <div className="blog__meta d-flex align-items-center">
                <div className="blog__author d-flex align-items-center mr-40">
                  <div className="blog__author-thumb mr-10">
                    <Image
                      src={blog?.authorImg}
                      style={{ width: "auto", height: "auto" }}
                      alt="image not found"
                    />
                  </div>
                  <div className="blog__author-info blog__author-info-2">
                    <h5>{blog?.author}</h5>
                  </div>
                </div>
                <div className="blog__date blog__date-2 d-flex align-items-center">
                  <i className="fal fa-clock"></i>
                  <span>{blog?.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
