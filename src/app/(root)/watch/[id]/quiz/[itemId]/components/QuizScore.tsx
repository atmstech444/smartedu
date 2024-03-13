import React, { useEffect } from "react";
import UserMobileMenu from "../../../../components/UserMobileMenu";
import SecondaryNav from "../../../../components/SecondaryNav";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { toggleNavbar } from "@/redux/slices/mobileMenuSlice";
import BackToCourse from "@/app/(root)/watch/components/BackToCourse";
import MobileNavOpener from "@/app/(root)/watch/components/MobileNavOpener";
import { Get_Lecture_Detail } from "@/services/AllCourses";
import { setLecture } from "@/redux/slices/lectureDetail";

const QuizScore = () => {
  const isMenuOpened = useAppSelector((state) => state.navbar.isOpen);
  const dispatch = useAppDispatch();
  const params = useParams();
  const router = useRouter();
  const token = useAppSelector((state) => state.user.user?.token);

  const toggleMenuVisibility = () => {
    dispatch(toggleNavbar());
  };
  const lectureDetail = useAppSelector((state) => state.lecture.lecture);

  const navigateToQuiz = () => {
    router.push(`/watch/${params.id}/quiz/${lectureDetail?.id}/start`);
  };
  const navigateToCourse = () => {
    router.push(`/watch/${params.id}/course/${lectureDetail.id}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const lectureDetail = await Get_Lecture_Detail(params.itemId, token);
        dispatch(setLecture(lectureDetail.lecture[0]));
      } catch (error) {
        console.error("Error fetching lecture detail:", error);
      }
    };
    fetchData();
  }, []);

  const percentArray = lectureDetail.mideterm_quiz_answer_percents;
  return (
    <>
      <main className="relative w-full bg-white flex items-center justify-center lg:block">
        {isMenuOpened && (
          <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
            <SecondaryNav />
          </UserMobileMenu>
        )}
        <div className="mt-[55px] sm:mt-0 flex gap-3 flex-col p-[24px] w-[90%]   rounded-md">
          <BackToCourse lecture_name={lectureDetail.lecture_name} onClick={navigateToCourse} />
          <MobileNavOpener lecture_name={lectureDetail.lecture_name} onArrowClick={navigateToCourse} onNavClick={toggleMenuVisibility} />
          <h1 className="text-xl m-0">ქვიზი</h1>
          <p className="text-base	m-0 text-black mt-5">პროგრამირების საწყისები</p>
          {percentArray?.length > 0 && (
            <>
              <div>
                <p className=" m-0 font-bold text-black">შენი ქულა</p>
                <p className={`${percentArray[0].percent < 80 ? "text-[#D30001]" : "text-[#1F8354]"} m-0 mt-1 font-bold`}>{percentArray[0].percent} %</p>
              </div>
              {percentArray[0].percent < 80 ? (
                <>
                  <div className=" flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#D30001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.16992 14.83L14.8299 9.16998" stroke="#D30001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14.8299 14.83L9.16992 9.16998" stroke="#D30001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className=" m-0">მიღებული შედეგი</p>
                  </div>
                </>
              ) : (
                <div className=" flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#1F8354" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.75 12L10.58 14.83L16.25 9.16998" stroke="#1F8354" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p>შენ წარმატებით გაიარე გამოცდა</p>
                </div>
              )}
            </>
          )}

          <button className={`text-base bg-[#006CFA] ${lectureDetail.mideterm_quiz_check_answers?.length > 0 ? "w-[150px]" : " w-[100px]"}  h-[35px] text-white rounded-sm`} onClick={navigateToQuiz}>
            {lectureDetail.mideterm_quiz_check_answers?.length > 0 ? "შედეგების ნახვა" : " დაწყება "}
          </button>
        </div>
      </main>
    </>
  );
};

export default QuizScore;
