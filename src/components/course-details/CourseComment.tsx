import Link from "next/link";
import React from "react";
import CommentImg from "../../../public/assets/img/course/comment/course-comment-1.jpg";
import CommentImgTwo from "../../../public/assets/img/course/comment/course-comment-2.jpg";
import Image from "next/image";

const CourseComment = () => {
  return (
    <>
      <ul>
        <li>
          <div className="course__comment-box ">
            <div className="course__comment-thumb float-start">
              <Image
                src={CommentImg}
                style={{ width: "100%", height: "auto" }}
                alt="image not found"
              />
            </div>
            <div className="course__comment-content">
              <div className="course__comment-wrapper ml-70 fix">
                <div className="course__comment-info float-start">
                  <h4>Eleanor Fant</h4>
                  <span>July 14, 2023</span>
                </div>
                <div className="course__comment-rating float-start float-sm-end">
                  <ul>
                    <li>
                      <Link href="#">
                        {" "}
                        <i className="fas fa-star"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {" "}
                        <i className="fas fa-star"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {" "}
                        <i className="fas fa-star"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {" "}
                        <i className="fas fa-star"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {" "}
                        <i className="fas fa-star"></i>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="course__comment-text ml-70">
                <p>
                  So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh
                  David blatant have it, standard A bit of {`how's`} your father
                  my lady absolutely.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="course__comment-box ">
            <div className="course__comment-thumb float-start">
              <Image
                src={CommentImgTwo}
                style={{ width: "100%", height: "auto" }}
                alt="image not found"
              />
            </div>
            <div className="course__comment-content">
              <div className="course__comment-wrapper ml-70 fix">
                <div className="course__comment-info float-start">
                  <h4>Shahnewaz Sakil</h4>
                  <span>July 17, 2023</span>
                </div>
                <div className="course__comment-rating float-start float-sm-end">
                  <ul>
                    <li>
                      <Link href="#">
                        {" "}
                        <i className="fas fa-star"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {" "}
                        <i className="fas fa-star"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {" "}
                        <i className="fas fa-star"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        {" "}
                        <i className="fas fa-star"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="no-rating">
                        {" "}
                        <i className="fas fa-star"></i>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="course__comment-text ml-70">
                <p>
                  David blatant have it, standard A bit of {`how's`} your father
                  my lady absolutely.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default CourseComment;
