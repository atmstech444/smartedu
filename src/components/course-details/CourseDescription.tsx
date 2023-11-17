import Link from "next/link";
import React from "react";
import AuthorImgOne from "../../../public/assets/img/course/teacher/teacher-3.jpg";
import AuthorImgTwo from "../../../public/assets/img/course/teacher/teacher-2.jpg";
import AuthorImgThree from "../../../public/assets/img/course/teacher/teacher-1.jpg";
import Image from "next/image";

const CourseDescription = () => {
  return (
    <>
      <div className="course__description">
        <h3>Course Overview</h3>
        <p>
          Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor
          blimey guvnor in my flat, up the duff Eaton car boot up the kyver
          pardon you A bit of {`how's`} your father David skive off sloshed,{" "}
          {`don't`}
          get shirty with me chip shop vagabond crikey bugger
          {`Queen's`} English chap. Matie boy nancy boy bite your arm off up the
          kyver old no biggie fantastic boot, David have it show off show off
          pick your nose and blow off lost the plot porkies bits and bobs only a
          quid bugger all mate, absolutely bladdered bamboozled
          {`it's`} your round {`don't`} get shirty with me down the pub well.
          Give us a bell bits and bobs Charles he lost his bottle super my lady
          cras starkers bite your arm off
          {`Queen's`} English, pardon me horse play Elizabeth a blinding shot
          chinwag knees up do one David, blag cup of tea Eaton so I said
          bleeding haggle James Bond cup of char. Gosh William ummm {`I'm`}{" "}
          telling crikey burke I{`don't`} want no agro A bit of {`how's`} your
          father bugger all mate off his nut that, what a plonker cuppa owt to
          do with me nancy boy show off show off pick your nose and blow off
          spiffing good time lavatory me old mucker, chimney pot what a load of
          rubbish boot squiffy lost the plot brolly wellies excuse my french.
        </p>

        <div className="course__tag-2 mb-35 mt-35">
          <i className="fa-solid fa-tag"></i>
          <Link href="#">Big data,</Link>
          <Link href="#">Data analysis,</Link>
          <Link href="#">Data modeling</Link>
        </div>
        <div className="course__description-list mb-45">
          <h4>What is the Target Audience?</h4>
          <ul>
            <li>
              {" "}
              <i className="icon_check"></i> {`Business's`} managers, leaders
            </li>
            <li>
              {" "}
              <i className="icon_check"></i> Downloadable lectures, code and
              design assets for all projects
            </li>
            <li>
              {" "}
              <i className="icon_check"></i> Anyone who is finding a chance to
              get the promotion
            </li>
          </ul>
        </div>
        <div className="course__instructor mb-45">
          <h3>Other Instructors</h3>
          <div className="course__instructor-wrapper d-md-flex align-items-center">
            <div className="course__instructor-item d-flex align-items-center mr-70">
              <div className="course__instructor-thumb mr-20">
                <Image
                  src={AuthorImgOne}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </div>
              <div className="course__instructor-content">
                <h3>Eleanor Fant</h3>
                <p>Instructor</p>
              </div>
            </div>
            <div className="course__instructor-item d-flex align-items-center mr-70">
              <div className="course__instructor-thumb mr-20">
                <Image
                  src={AuthorImgTwo}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </div>
              <div className="course__instructor-content">
                <h3>Lauren Stamps</h3>
                <p>Teacher</p>
              </div>
            </div>
            <div className="course__instructor-item d-flex align-items-center mr-70">
              <div className="course__instructor-thumb mr-20">
                <Image
                  src={AuthorImgThree}
                  style={{ width: "auto", height: "auto" }}
                  alt="image not found"
                />
              </div>
              <div className="course__instructor-content">
                <h3>Jonquil Von</h3>
                <p>Associate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDescription;
