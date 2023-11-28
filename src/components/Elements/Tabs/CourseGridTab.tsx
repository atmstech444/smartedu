"use client";
import { API_STORAGE } from "@/api/API_PATH";
import { I_Course } from "@/api/GET_Courses";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";

const CourseGridTab = () => {
  const courses: I_Course[] = useAppSelector((state) => state.courses.courses);

  return (
    <section className="course__area pt-120 pb-120">
      <div className="container">
        {/* <div className="course__tab-inner grey-bg-2 mb-50">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="course__tab-wrapper d-flex align-items-center">
                <div className="course__tab-btn">
                  <ul className="nav nav-tabs" id="courseTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="grid-tab" data-bs-toggle="tab" data-bs-target="#grid" type="button" role="tab" aria-controls="grid" aria-selected="true">
                        <CourseGridIconOne />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link list" id="list-tab" data-bs-toggle="tab" data-bs-target="#list" type="button" role="tab" aria-controls="list" aria-selected="false">
                        <CourseGridIconTwo />
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="course__view">
                  <h4>Showing 1 - 9 of 84</h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="course__sort d-flex justify-content-sm-end">
                <div className="course__sort-inner">
                  <select>
                    <option>Default</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                    <option>Option 6</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-xxl-12">
            <div className="course__tab-conent">
              <div className="tab-content" id="courseTabContent">
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
                                    {item.average_rating}
                                  </span>
                                ) : (
                                  <span>შეფასება არ არის</span>
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
                                <Link href="/instructor-details">
                                  {item.lecturer.first_name} {item.lecturer.last_name}
                                </Link>
                              </h6>
                            </div>
                          </div>
                          <div className="course__more d-flex justify-content-between align-items-center">
                            <div className="course__status d-flex align-items-center">
                              <span className={item.price ? `${item.price}` : ""}>₾ {item.price}</span>
                              {/* <span className="old-price">{item.oldPrice === 0 ? " " : `$${item.oldPrice}.00`}</span> */}
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
                    ))}
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

export default CourseGridTab;
