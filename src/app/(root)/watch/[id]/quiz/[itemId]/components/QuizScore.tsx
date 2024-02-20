import React, { useState } from "react";
import { LectureTypes } from "../../../course/Lecture";
import UserMobileMenu from "../../../../components/UserMobileMenu";
import SecondaryNav from "../../../../components/SecondaryNav";
import Image from "next/image";
import Arrow from "../../../../../../../public/assets/icons/arrowLeft.svg";
import { useParams, useRouter } from "next/navigation";

interface Props {
  lectureDetail?: LectureTypes | undefined;
  id: any;
}
const QuizScore = ({ id, lectureDetail }: Props) => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const router = useRouter();

  const toggleMenuVisibility = () => {
    setIsMenuOpened((prev) => !prev);
  };
  const params = useParams();
  const navigateToQuiz = () => {
    router.push(`/watch/${params.id}/quiz/${lectureDetail?.id}/start`);
  };
  return (
    <>
      <main className="relative w-full bg-white">
        {isMenuOpened && (
          <UserMobileMenu isOpen={isMenuOpened} onClose={toggleMenuVisibility}>
            <SecondaryNav id={id} lectureDetail={lectureDetail} />
          </UserMobileMenu>
        )}
        <div className="mt-[55px] sm:mt-0 flex gap-[24px] flex-col p-[24px] md:w-[80%] lg:w-[90%]   rounded-md">
          <Image src={Arrow} width="15" height="15" alt="back" className="md:hidden" onClick={toggleMenuVisibility} />
          <h1 className="text-xl m-0">ქვიზი</h1>
          <p className="text-base	m-0 text-black">პროგრამირების საწყისები</p>
          <button className="text-base bg-[#006CFA] w-[100px] h-[35px] text-white rounded-sm" onClick={navigateToQuiz}>
            დაწყება
          </button>
        </div>
      </main>
    </>
  );
};

export default QuizScore;
