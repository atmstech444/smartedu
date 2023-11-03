import Link from "next/link";
import React from "react";
import YellowBg from "../../../public/assets/img/shape/yellow-bg.png";
import Image from "next/image";

const PriceSectionOne = () => {
  return (
    <section className="price__area pt-60 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xxl-4 offset-xxl-4">
            <div className="section__title-wrapper mb-60 text-center">
              <h2 className="section__title">
                Simple <br /> All Inclusive{" "}
                <span className="yellow-bg yellow-bg-big">
                  Pricing{" "}
                  <Image
                    src={YellowBg}
                    style={{ width: "auto", height: "auto" }}
                    alt="image not found"
                  />
                </span>
              </h2>
              <p>No contracts. No surprise fees.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="price__tab-btn text-center mb-50">
              <nav>
                <div
                  className="nav nav-tabs justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link"
                    id="nav-monthly-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-monthly"
                    type="button"
                    role="tab"
                    aria-controls="nav-monthly"
                    aria-selected="true"
                  >
                    monthly plan
                  </button>
                  <button
                    className="nav-link active"
                    id="nav-annually-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-annually"
                    type="button"
                    role="tab"
                    aria-controls="nav-annually"
                    aria-selected="false"
                  >
                    Annual Plan
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
            <div className="price__tab-content">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade"
                  id="nav-monthly"
                  role="tabpanel"
                  aria-labelledby="nav-monthly-tab"
                >
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="price__item grey-bg mb-30 p-relative">
                        <div className="price__head">
                          <h3>Gold</h3>
                          <p>Perfect for small marketing teams</p>
                        </div>
                        <div className="price__tag mb-25">
                          <h4>
                            $59<span>.99 / annually</span>
                          </h4>
                        </div>
                        <div className="price__features mb-40">
                          <ul>
                            <li>
                              <i className="far fa-check"></i>Course Discussions
                            </li>
                            <li>
                              <i className="far fa-check"></i>Content Library
                            </li>
                            <li>
                              <i className="far fa-check"></i>1-hour Mentorship
                            </li>
                          </ul>
                        </div>
                        <Link href="/contact" className="e-btn e-btn-4">
                          Get Started
                        </Link>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="price__item grey-bg mb-30 p-relative">
                        <div className="price__offer">
                          <span>Best Value</span>
                        </div>
                        <div className="price__head">
                          <h3>Diamond</h3>
                          <p>Perfect for small marketing teams</p>
                        </div>
                        <div className="price__tag mb-25">
                          <h4>
                            $99<span>.99 / annually</span>
                          </h4>
                        </div>
                        <div className="price__features mb-40">
                          <ul>
                            <li>
                              <i className="far fa-check"></i>Course Discussions
                            </li>
                            <li>
                              <i className="far fa-check"></i>Content Library
                            </li>
                            <li>
                              <i className="far fa-check"></i>1-hour Mentorship
                            </li>
                            <li>
                              <i className="far fa-check"></i>Online Course
                            </li>
                          </ul>
                        </div>
                        <Link href="/contact" className="e-btn e-btn-border">
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="nav-annually"
                  role="tabpanel"
                  aria-labelledby="nav-annually-tab"
                >
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="price__item grey-bg mb-30 p-relative">
                        <div className="price__head">
                          <h3>Gold</h3>
                          <p>Perfect for small marketing teams</p>
                        </div>
                        <div className="price__tag mb-25">
                          <h4>
                            $59<span>.99 / annually</span>
                          </h4>
                        </div>
                        <div className="price__features mb-40">
                          <ul>
                            <li>
                              <i className="far fa-check"></i>Course Discussions
                            </li>
                            <li>
                              <i className="far fa-check"></i>Content Library
                            </li>
                            <li>
                              <i className="far fa-check"></i>1-hour Mentorship
                            </li>
                          </ul>
                        </div>
                        <Link href="/contact" className="e-btn e-btn-4">
                          Get Started
                        </Link>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="price__item grey-bg mb-30 p-relative">
                        <div className="price__offer">
                          <span>Best Value</span>
                        </div>
                        <div className="price__head">
                          <h3>Diamond</h3>
                          <p>Perfect for small marketing teams</p>
                        </div>
                        <div className="price__tag mb-25">
                          <h4>
                            $99<span>.99 / annually</span>
                          </h4>
                        </div>
                        <div className="price__features mb-40">
                          <ul>
                            <li>
                              <i className="far fa-check"></i>Course Discussions
                            </li>
                            <li>
                              <i className="far fa-check"></i>Content Library
                            </li>
                            <li>
                              <i className="far fa-check"></i>1-hour Mentorship
                            </li>
                            <li>
                              <i className="far fa-check"></i>Online Course
                            </li>
                          </ul>
                        </div>
                        <Link href="/contact" className="e-btn e-btn-border">
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSectionOne;
