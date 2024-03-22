import React from "react";
import { useLocation } from "react-use";
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton } from "react-share";
const ShareCourse = () => {
  const location = useLocation();
  const courseLink = location.href as string;
  return (
    <>
      <div className="course__share">
        <h3>გაზიარება:</h3>
        <ul>
          <li>
            <FacebookShareButton url={courseLink} className="Demo__some-network__share-button">
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </li>
          <li>
            <LinkedinShareButton url={courseLink} className="Demo__some-network__share-button">
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShareCourse;
