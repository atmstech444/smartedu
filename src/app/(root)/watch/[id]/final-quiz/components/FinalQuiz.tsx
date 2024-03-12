import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Arrow from "../../../../../../public/assets/icons/arrowLeft.svg";
import { Get_Lecture } from "@/services/AllCourses";
import { useAppSelector } from "@/redux/store";

const FinalQuiz = () => {
  const router = useRouter();
  const params = useParams();
  const token = useAppSelector((state) => state.user.user?.token);
  const [remainingTime, setRemainingTime] = useState<any>(null);
  const [lecture, setLecture] = useState<any>();

  useEffect(() => {
    if (lecture?.final_quiz_percent !== null && lecture?.final_quiz_percent < 49) {
      const calculateRemainingTime = () => {
        const currentTime = new Date();
        const submittedTimeArray = lecture.time.split(":");
        if (submittedTimeArray.length !== 3) {
          console.error("Invalid time format");
          return;
        }
        const submissionTimestamp = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), parseInt(submittedTimeArray[0], 10), parseInt(submittedTimeArray[1], 10), parseInt(submittedTimeArray[2], 10));
        const differenceInMillis = currentTime.getTime() - submissionTimestamp.getTime();
        const remainingTimeInSeconds = Math.max(24 * 60 * 60 - Math.floor(differenceInMillis / 1000), 0);
        setRemainingTime(remainingTimeInSeconds);
      };

      calculateRemainingTime();
      const intervalId = setInterval(calculateRemainingTime, 1000);
      return () => clearInterval(intervalId);
    }
  }, [lecture?.final_quiz_percent, lecture?.time]);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    return formattedTime;
  };

  const navigateToQuiz = () => {
    router.push(`/watch/${params.id}/final-quiz/start`);
  };

  const navigateToQuizStart = () => {
    router.push(`/watch/${params.id}`);
  };
  const fetchData = async () => {
    try {
      const lecture = await Get_Lecture(params.id, token);
      setLecture(lecture);
    } catch (error) {
      console.error("Error fetching lecture:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main className="relative w-full bg-white flex items-center justify-center lg:block">
        <div className="mt-[55px] sm:mt-0 flex gap-3 flex-col p-[24px] w-[90%] rounded-md">
          <div className="lg:hidden flex gap-3">
            <Image src={Arrow} width="15" height="15" alt="back" onClick={navigateToQuizStart} />
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl m-0">ქვიზი</h1>
              <p className="text-base	m-0 text-black mt-5">პროგრამირების საწყისები</p>
            </div>
            {lecture?.final_quiz_percent > 49 ? (
              <button className="flex gap-2 my-auto text-[#006CFA] font-medium">
                მიიღე სერთიფიკატი
                <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.504823 1.00507C0.77819 0.731707 1.22141 0.731707 1.49477 1.00507L1.06134 1.4385C1.49478 1.00508 1.49473 1.00503 1.49477 1.00507L1.54072 1.05115L1.66884 1.18013C1.77903 1.2913 1.93625 1.45049 2.12485 1.64302C2.50175 2.02777 3.00524 2.54698 3.50954 3.08279C4.01215 3.61681 4.52264 4.17482 4.91024 4.63509C5.10277 4.86373 5.27501 5.08004 5.40256 5.26339C5.46563 5.35406 5.52776 5.45082 5.57691 5.54606C5.61058 5.61129 5.6998 5.78684 5.6998 6.00005C5.6998 6.21325 5.61058 6.38881 5.57691 6.45403C5.52776 6.54927 5.46563 6.64604 5.40256 6.73671C5.27501 6.92006 5.10277 7.13637 4.91024 7.36501C4.52264 7.82528 4.01215 8.38328 3.50954 8.9173C3.00524 9.45312 2.50175 9.97232 2.12485 10.3571C1.93625 10.5496 1.77903 10.7088 1.66884 10.82L1.54072 10.9489L1.49562 10.9942L1.49485 10.9949C1.4948 10.995 1.49477 10.995 0.999798 10.5L0.504839 10.0051L0.548717 9.96106L0.674503 9.83443C0.783063 9.7249 0.938341 9.56768 1.12475 9.37739C1.49784 8.99652 1.99435 8.48448 2.49006 7.95779C2.98745 7.42931 3.47696 6.89357 3.83936 6.46322C3.99417 6.27938 4.1186 6.12323 4.20846 6.00005C4.1186 5.87687 3.99417 5.72072 3.83936 5.53688C3.47696 5.10653 2.98745 4.57078 2.49006 4.0423C1.99435 3.51562 1.49784 3.00357 1.12475 2.62271C0.938341 2.43242 0.783063 2.2752 0.674503 2.16567L0.548717 2.03904L0.50543 1.99563C0.232063 1.72226 0.231456 1.27844 0.504823 1.00507ZM4.33284 6.18816C4.34004 6.20618 4.3426 6.20707 4.33284 6.18816C4.33272 6.18792 4.33297 6.18841 4.33284 6.18816ZM0.504823 10.995C0.231456 10.7217 0.231472 10.2784 0.504839 10.0051L0.999798 10.5L1.49485 10.9949C1.22148 11.2683 0.77819 11.2684 0.504823 10.995Z"
                    fill="#006CFA"
                  />
                </svg>
              </button>
            ) : null}
          </div>
          {lecture?.final_quiz !== "final quiz unavailable" && lecture?.final_quiz_percent !== null && lecture?.final_quiz_percent < 50 && (
            <div className=" flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.7 7.7C12.7 8.0866 12.3866 8.4 12 8.4C11.6134 8.4 11.3 8.0866 11.3 7.7C11.3 7.3134 11.6134 7 12 7C12.3866 7 12.7 7.3134 12.7 7.7ZM12.7 11C12.7 10.6134 12.3866 10.3 12 10.3C11.6134 10.3 11.3 10.6134 11.3 11V17C11.3 17.3866 11.6134 17.7 12 17.7C12.3866 17.7 12.7 17.3866 12.7 17V11Z"
                  fill="#E6AC3A"
                />
                s
              </svg>
              <p className="m-0 text-[#E6AC3A]">მეორე და საბოლოო ცდა , თავიდან დაწყებას შეძლებ {formatTime(remainingTime)}</p>
            </div>
          )}
          {/* {quiz === "final quiz unavailable" || (percent && percent > 49 && <hr />)} */}
          <hr />

          {lecture?.final_quiz === "final quiz unavailable" || lecture?.final_quiz_percent > 49 ? null : (
            <button
              className={`text-base bg-[#006CFA] w-[200px] h-[35px] text-white rounded-sm ${(remainingTime == null ? false : remainingTime === 0 ? false : true) && "bg-[#8DB1E0]"}`}
              onClick={navigateToQuiz}
              disabled={remainingTime == null ? false : remainingTime === 0 ? false : true}
            >
              {lecture?.final_quiz_percent !== null ? "თავიდან დაწყება" : "დაწყება"}
            </button>
          )}

          {lecture?.final_quiz_percent !== null && lecture?.final_quiz_percent < 50 && (
            <div className="md:flex justify-between ">
              <div>
                <div className=" flex gap-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#D30001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.16992 14.83L14.8299 9.16998" stroke="#D30001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.8299 14.83L9.16992 9.16998" stroke="#D30001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className=" m-0">მიღებული შედეგი</p>
                </div>
                <p className=" m-0 mt-2">ჩაბარებისთვის საჭიროა 50% ან მეტის მიღება</p>
              </div>
              <div>
                <p className=" font-bold m-0">შენი ქულა</p>
                <p className=" text-red font-bold">{lecture?.final_quiz_percent + "%"}</p>
              </div>
            </div>
          )}

          {lecture?.final_quiz_percent !== null && lecture?.final_quiz_percent > 49 && (
            <div className="md:flex justify-between ">
              <div>
                <div className=" flex gap-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#1F8354" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.75 12L10.58 14.83L16.25 9.16998" stroke="#1F8354" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className=" m-0">შენ წარმატებით გაიარე გამოცდა</p>
                </div>
              </div>
              <div className="mt-3">
                <p className=" font-bold m-0">შენი ქულა</p>
                <p className=" text-[#1F8354] font-bold">{lecture?.final_quiz_percent + "%"}</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default FinalQuiz;
