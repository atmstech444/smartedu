import review_data from "@/data/review-data";
import CommentForm from "@/form/comment-form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductInfo = () => {
  //for rating handle
  const getRating = (ratingsNum: any) => {
    let empty_rating_count = 5 - ratingsNum;
    let ratings = [];
    for (let i = 0; i < ratingsNum; i++) {
      ratings.push(<i className="fas fa-star" key={`l-${i}`}></i>);
    }
    for (let i = 0; i < empty_rating_count; i++) {
      ratings.push(<i className="fal fa-star" key={`p-${i}`}></i>);
    }
    return ratings;
  };
  //for rating handle
  return (
    <div className="product_info-faq-area pb-95">
      <div className="container">
        <nav className="product-details-nav">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <Link
              className="nav-item nav-link show active"
              id="nav-general-tab"
              data-bs-toggle="tab"
              href="#nav-general"
              role="tab"
              aria-selected="true"
            >
              Description
            </Link>
            <Link
              className="nav-item nav-link"
              id="nav-seller-tab"
              data-bs-toggle="tab"
              href="#nav-seller"
              role="tab"
              aria-selected="false"
            >
              Reviews
            </Link>
          </div>
        </nav>
        <div
          className="tab-content product-details-content"
          id="nav-tabContent"
        >
          <div
            className="tab-pane fade active show"
            id="nav-general"
            role="tabpanel"
          >
            <div className="tabs-wrapper mt-35">
              <div className="product__details-des">
                <p>
                  Very clean and organized with easy to follow tutorials,
                  Exercises, and solutions. This course does start from the
                  beginning with very little knowledge and gives a great
                  overview of common tools used for data science and progresses
                  into more complex concepts and ideas. This course is
                  amazing..! I started this course as a beginner and learnt a
                  lot. Instructors are great. Query handling can be
                  improved.Overall very happy with the course.
                </p>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="nav-seller" role="tabpanel">
            <div className="tabs-wrapper mt-35">
              {review_data.slice(0, 3).map((item: any) => (
                <div key={item.id} className="course-review-item mb-30">
                  <div className="course-reviews-img">
                    <Link href="#">
                      {item.image && (
                        <Image
                          src={item.image}
                          style={{ width: "100%", height: "auto" }}
                          alt="image not found"
                        />
                      )}
                    </Link>
                  </div>
                  <div className="course-review-list">
                    <h5>{item.title}</h5>
                    <div className="course-start-icon">
                      {getRating(item.ratings)}
                      <span>{item.duration}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}

              <div className="product__details-comment ">
                <div className="comment-title mb-20">
                  <h3>Add a review</h3>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <div className="comment-rating mb-20">
                  <span>Overall ratings</span>
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fal fa-star"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="comment-input-box mb-15">
                  <CommentForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
