import category_data from "@/data/category-data";
import Link from "next/link";
import React from "react";
import YellowBg from "../../../public/assets/img/shape/yellow-bg-2.png";
import Image from "next/image";

const CategorySection = () => {
  return (
    <section className="category__area pt-120 pb-70">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
            <div className="section__title-wrapper mb-45">
              <h2 className="section__title">
                ჩვენი <br />
                <span className="yellow-bg">
                  მიმართულებები
                  <Image src={YellowBg} style={{ width: "auto", height: "auto" }} alt="img not found" /> <br />
                </span>
              </h2>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
            <div className="category__more mb-50 float-md-end fix">
              <Link href="/course-grid" className="link-btn">
                ყველა მიმართულება
                <i className="fas fa-arrow-right"></i>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {category_data.slice(0, 9).map((item) => (
            <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="category__item mb-30 transition-3 d-flex align-items-center">
                <div className="category__icon mr-30">{item.icon && <item.icon />}</div>
                <div className="category__content">
                  <h4 className="category__title">
                    <Link href={`/course-details/${item.id}`}>{item.title}</Link>
                  </h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
