import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Arrow from "../../../../../../public/assets/icons/arrowLeft.svg";
import { Get_Lecture } from "@/services/AllCourses";
import { useAppSelector } from "@/redux/store";

const FinalQuiz = () => {
  const router = useRouter();
  const params = useParams();
  const [percent, setPercent] = useState(null);
  const token = useAppSelector((state) => state.user.user?.token);
  const [submitedTime, setSubmitedTime] = useState<string>("");
  const [remainingTime, setRemainingTime] = useState<any>(null);

  useEffect(() => {
    if ((percent ?? 0) < 50) {
      const calculateRemainingTime = () => {
        const currentTime = new Date();
        const submittedTimeArray = submitedTime.split(":");
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
  }, [percent, submitedTime]);

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
      setSubmitedTime(lecture.time);
      setPercent(lecture.final_quiz_percent);
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
        <div className="mt-[55px] sm:mt-0 flex gap-3 flex-col p-[24px] w-[90%]   rounded-md">
          <div className="flex gap-3">
            <Image src={Arrow} width="15" height="15" alt="back" onClick={navigateToQuizStart} />
          </div>
          <h1 className="text-xl m-0">ქვიზი</h1>
          <p className="text-base	m-0 text-black mt-5">პროგრამირების საწყისები</p>
          {percent !== null && percent < 50 && (
            <div className=" flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.7 7.7C12.7 8.0866 12.3866 8.4 12 8.4C11.6134 8.4 11.3 8.0866 11.3 7.7C11.3 7.3134 11.6134 7 12 7C12.3866 7 12.7 7.3134 12.7 7.7ZM12.7 11C12.7 10.6134 12.3866 10.3 12 10.3C11.6134 10.3 11.3 10.6134 11.3 11V17C11.3 17.3866 11.6134 17.7 12 17.7C12.3866 17.7 12.7 17.3866 12.7 17V11Z"
                  fill="#E6AC3A"
                />
              </svg>
              <p className="m-0 text-[#E6AC3A]">მეორე და საბოლოო ცდა , თავიდან დაწყებას შეძლებ {formatTime(remainingTime)}</p>
            </div>
          )}
          {percent !== null ? (
            <button className={`text-base bg-[#006CFA] w-[200px] h-[35px] text-white rounded-sm`} onClick={navigateToQuiz}>
              თავიდან დაწყება
            </button>
          ) : (
            <button className={`text-base bg-[#006CFA] w-[200px] h-[35px] text-white rounded-sm`} onClick={navigateToQuiz}>
              დაწყება
            </button>
          )}

          {percent !== null && percent < 50 && (
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
                <p className=" text-red font-bold">{percent + "%"}</p>
              </div>
            </div>
          )}

          {percent !== null && percent > 49 && (
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
                <p className=" text-[#1F8354] font-bold">{percent + "%"}</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default FinalQuiz;
