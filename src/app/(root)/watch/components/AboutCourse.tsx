"use client";
import { I_Course_Details } from "@/api/GET_CourseDetails";
// import Wrapper from "@/layout/DefaultWrapper";
import { Get_Course_Detail } from "@/services/AllCourses";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Arrow from "../../../../public/assets/icons/arrowLeft.svg";
import { API_STORAGE } from "@/api/API_PATH";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { toggleNavbar } from "@/redux/slices/mobileMenuSlice";
import { Navigation } from "./Navigation";
import UserMobileMenu from "./UserMobileMenu";
import LoadingSpinner from "@/components/LoadingSpinner";

const AboutCourse = () => {
  const id = useParams();
  const [course, setCourse] = useState<I_Course_Details | null>(null);
  const [showDescriptions, setShowDescriptions] = useState(Array(course?.syllabus.length).fill(false));
  const [rotationAngles, setRotationAngles] = useState(Array(course?.syllabus.length).fill(0));

  const handleSvgClick = (index: number) => {
    const newShowDescriptions = [...showDescriptions];
    newShowDescriptions[index] = !newShowDescriptions[index];
    const newRotationAngles = [...rotationAngles];
    newRotationAngles[index] = newShowDescriptions[index] ? 180 : 0;
    setShowDescriptions(newShowDescriptions);
    setRotationAngles(newRotationAngles);
  };
  const isMenuOpened = useAppSelector((state) => state.navbar.isOpen);
  const dispatch = useAppDispatch();
  const toggleMenuVisibility = () => {
    dispatch(toggleNavbar());
  };
  const fetchData = async () => {
    try {
      const courseDetail = await Get_Course_Detail(id.id);
      setCourse(courseDetail.course);
    } catch (error) {
      console.error("Error fetching course detail:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="relative w-full flex items-center justify-center lg:block">
      {isMenuOpened && (
        <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
          <Navigation id={id.id} />
        </UserMobileMenu>
      )}
      {course ? (
        <div className="flex gap-[24px] flex-col p-[24px] w-[90%]  bg-white rounded-md">
          <Image onClick={toggleMenuVisibility} src={Arrow} width={24} height={24} alt="Back" className="lg:hidden mb-4" />
          <Course>{course?.title}</Course>
          <Course>კურსის აღწერა</Course>
          <AboutCourseText>{course?.description}</AboutCourseText>
          <Course>ლექტორი</Course>
          <LecturerContainer>
            <LecturerImage src={`${API_STORAGE}${course && course.lecturer?.image ? course.lecturer.image : null}`} alt="Lecturer Image" />
            <div className=" my-auto ml-4">
              <Lecturer>{`${course?.lecturer?.first_name} ${course?.lecturer?.last_name}`}</Lecturer>
              <LecturerDesc>{course?.lecturer?.description}</LecturerDesc>
            </div>
          </LecturerContainer>
          <Course>სილაბუსი</Course>
          {course &&
            course.syllabus.map((item, index) => (
              <div key={index}>
                <Div>
                  <Lecture>{item.title}</Lecture>
                  <svg className=" my-auto cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 6" fill="none" onClick={() => handleSvgClick(index)} style={{ transform: `rotate(${rotationAngles[index]}deg)` }}>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.00483 0.505037C0.731463 0.778404 0.731463 1.22162 1.00483 1.49499L1.43826 1.06156C1.00483 1.49499 1.00479 1.49494 1.00483 1.49499L1.0509 1.54094L1.17989 1.66906C1.29106 1.77925 1.45025 1.93647 1.64277 2.12506C2.02753 2.50197 2.54674 3.00546 3.08255 3.50975C3.61657 4.01236 4.17458 4.52285 4.63485 4.91045C4.86348 5.10298 5.0798 5.27522 5.26315 5.40277C5.35381 5.46584 5.45058 5.52797 5.54582 5.57712C5.61104 5.61079 5.7866 5.70001 5.9998 5.70001C6.21301 5.70001 6.38856 5.61079 6.45379 5.57712C6.54903 5.52797 6.6458 5.46584 6.73646 5.40277C6.91981 5.27522 7.13613 5.10299 7.36476 4.91045C7.82503 4.52285 8.38304 4.01236 8.91706 3.50975C9.45287 3.00546 9.97208 2.50197 10.3568 2.12506C10.5494 1.93647 10.7085 1.77925 10.8197 1.66906L10.9487 1.54094L10.9939 1.49584L10.9947 1.49506C10.9947 1.49502 10.9948 1.49499 10.4998 1.00001C10.0048 0.505036 10.0048 0.505036 10.0048 0.505052L9.96082 0.54893L9.83418 0.674716C9.72465 0.783276 9.56744 0.938554 9.37715 1.12496C8.99628 1.49805 8.48424 1.99457 7.95755 2.49027C7.42907 2.98766 6.89333 3.47717 6.46297 3.83957C6.27914 3.99438 6.12298 4.11881 5.9998 4.20867C5.87662 4.11881 5.72047 3.99438 5.53664 3.83957C5.10628 3.47717 4.57054 2.98766 4.04206 2.49027C3.51537 1.99457 3.00333 1.49806 2.62246 1.12496C2.43217 0.938554 2.27496 0.783276 2.16543 0.674717L2.03879 0.548931L1.99539 0.505644C1.99537 0.505631 1.99478 0.505037 1.72477 0.775043L1.99539 0.505644C1.72202 0.232277 1.2782 0.23167 1.00483 0.505037ZM6.18792 4.33306C6.20593 4.34025 6.20682 4.34281 6.18792 4.33306C6.18768 4.33293 6.18817 4.33318 6.18792 4.33306ZM10.9948 0.505036C10.7214 0.231669 10.2782 0.231685 10.0048 0.505052L10.4998 1.00001L10.9947 1.49506C11.2681 1.22169 11.2681 0.778403 10.9948 0.505036Z"
                      fill="#222628"
                    />
                  </svg>
                </Div>
                {showDescriptions[index] && (
                  <LectureDesc>
                    <ul>
                      {item.descriptions.map((desc, i) => (
                        <li style={{ listStyle: "disc", marginTop: "5px" }} key={i}>
                          {desc.description}
                        </li>
                      ))}
                    </ul>
                  </LectureDesc>
                )}
              </div>
            ))}
        </div>
      ) : (
        <div className="flex gap-[24px] flex-col p-[24px] w-[90%]  bg-white rounded-md">
          <h1 className="text-xl font-normal">იტვირთება...</h1>
        </div>
      )}
    </main>
  );
};

export default AboutCourse;

// Styled components
const Div = styled.div`
  padding: 15px;
  border-radius: 4px;
  background: #f3f4f8;
  display: flex;
  justify-content: space-between;
`;
const Course = styled.h3`
  color: #000;
  font-family: FiraGO;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const AboutCourseText = styled.p`
  color: #000;
  font-family: FiraGO;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const LecturerContainer = styled.div`
  display: flex;
  gap: 3px;
`;

const LecturerImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Lecturer = styled.p`
  color: #000;
  font-family: FiraGO;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin: 0;
`;

const LecturerDesc = styled.p`
  color: #000;
  font-family: FiraGO;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
`;

const Lecture = styled.p`
  color: #5a5454;
  font-family: FiraGO;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
  width: 90%;
`;

const LectureDesc = styled.div`
  color: #000;
  font-family: FiraGO;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding-left: 60px;
  margin-top: 10px;
`;
