import Link from "next/link";
import React from "react";

const ShareCourse = () => {
  return (
    <>
      <div className="course__share">
        <h3>Share :</h3>
        <ul>
          <li>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              className="fb"
            >
              <i className="fab fa-facebook-f fa-lg"></i>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/" target="_blank" className="tw">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link href="https://vimeo.com/" target="_blank" className="pin">
              <i className="fab fa-pinterest-square fa-lg"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShareCourse;
