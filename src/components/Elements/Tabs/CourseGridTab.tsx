"use client";
import { API_STORAGE } from "@/api/API_PATH";
import { I_Course } from "@/api/GET_Courses";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import Logo from "@/../public/assets/img/logo/logo.png";
import Image from "next/image";

const CourseGridTab = () => {
  const courses: I_Course[] = useAppSelector((state) => state.courses.courses);

  return (
    <section className="course__area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="course__tab-conent">
              <div className="tab-content" id="courseTabContent">
                {courses.length === 0 ? (
                  <div className="text-center" style={{ paddingTop: "30px" }}>
                    <Image src={Logo} alt="Logo" style={{ width: "150px", height: "40px" }} />
                  </div>
                ) : (
                  <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                    <div className="row">
                      {courses.map((item) => (
                        <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                          <div className="course__item white-bg mb-30 fix">
                            <div className="course__thumb w-img p-relative fix">
                              <Link href="/course-details/[id]" as={`/course-details/${item.id}`}>
                                <img src={API_STORAGE + item.cover_image} style={{ width: "100%", height: "200px" }} alt="image not found" />
                              </Link>
                              <div className="course__tag">
                                <Link href={`/course-details/${item.id}`} className={item.category.title ? `${item.category.title}` : ""}>
                                  {item.category.title}
                                </Link>
                              </div>
                            </div>
                            <div className="course__content">
                              <div className="course__meta d-flex align-items-center justify-content-between">
                                <div className="course__lesson">
                                  <span>
                                    <i className="far fa-book-alt"></i>
                                    {item.lectures_count} გაკვეთილი
                                  </span>
                                </div>
                                <div className="course__rating">
                                  {item.average_rating !== 0 ? (
                                    <span>
                                      <i className="fas fa-star"></i>
                                      {item.average_rating.toFixed(1)}
                                    </span>
                                  ) : (
                                    <span></span>
                                  )}
                                </div>
                              </div>
                              <h3 className="course__title" style={{ height: "48px" }}>
                                <Link href={`/course-details/${item.id}`}>{item.title}</Link>
                              </h3>
                              <div className="course__teacher d-flex align-items-center">
                                <div className="course__teacher-thumb mr-15">
                                  <img src={API_STORAGE + item.lecturer.image} style={{ width: "50px", height: "50px" }} alt="image not found" />
                                </div>
                                <h6>
                                  <p>
                                    {item.lecturer.first_name} {item.lecturer.last_name}
                                  </p>
                                </h6>
                              </div>
                              <div className="course__more d-flex justify-content-between align-items-center">
                                <div className="course__status d-flex align-items-center">
                                  <span className={item.price ? `${item.price}` : ""}>₾ {item.price}</span>
                                </div>
                                <div className="course__btn">
                                  <Link href={`/course-details/${item.id}`} className="link-btn">
                                    გაიგე მეტი
                                    <i className="far fa-arrow-right"></i>
                                    <i className="far fa-arrow-right"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseGridTab;
