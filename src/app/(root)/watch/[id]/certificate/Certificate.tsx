import React from "react";
import Image from "next/image";
import Arrow from "../../../../../public/assets/icons/arrowLeft.svg";
import { useParams, useRouter } from "next/navigation";

const Certificate = () => {
  const router = useRouter();
  const params = useParams();
  const navigateToQuiz = () => {
    router.push(`/watch/${params.id}/final-quiz`);
  };
  return (
    <>
      <main className="relative w-full bg-white flex items-center justify-center lg:block">
        <div className="mt-[55px] sm:mt-0 flex gap-3 flex-col p-[24px] w-[90%] rounded-md">
          <div className="lg:hidden flex gap-3">
            <Image src={Arrow} width="15" height="15" alt="back" onClick={navigateToQuiz} />
          </div>
          <h1 className="font-bold leading-9 text-2xl">სერთიფიკატი</h1>
          <button className="flex gap-3 text-white bg-[#006CFA] px-3 py-1 w-[170px] rounded-sm">
            სერთიფიკატი
            <svg className="my-auto" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0002 0.300049C10.3868 0.300049 10.7002 0.613449 10.7002 1.00005V11C10.7002 11.3866 10.3868 11.7 10.0002 11.7C9.6136 11.7 9.3002 11.3866 9.3002 11V1.00005C9.3002 0.613449 9.6136 0.300049 10.0002 0.300049Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.57563 12.2425C9.34132 12.0082 9.34132 11.6283 9.57563 11.394L12.7271 8.2425C12.9614 8.00819 13.3413 8.00819 13.5756 8.2425C13.8099 8.47682 13.8099 8.85672 13.5756 9.09103L10.4242 12.2425C10.1898 12.4768 9.80995 12.4768 9.57563 12.2425Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4244 12.2425C10.6587 12.0082 10.6587 11.6283 10.4244 11.394L7.2729 8.2425C7.03858 8.00819 6.65868 8.00819 6.42437 8.2425C6.19005 8.47682 6.19005 8.85672 6.42437 9.09103L9.57584 12.2425C9.81016 12.4768 10.1901 12.4768 10.4244 12.2425Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.999804 8.80005C1.3864 8.80005 1.6998 9.11345 1.6998 9.50005L1.6998 13.6773C1.6998 14.8429 2.566 15.809 3.70764 15.9191C5.59017 16.1006 8.09659 16.3 9.9998 16.3C11.903 16.3 14.4094 16.1006 16.292 15.9191C17.4336 15.809 18.2998 14.8429 18.2998 13.6773V9.50005C18.2998 9.11345 18.6132 8.80005 18.9998 8.80005C19.3864 8.80005 19.6998 9.11345 19.6998 9.50005V13.6773C19.6998 15.5453 18.3042 17.1316 16.4263 17.3126C14.5384 17.4946 11.975 17.7 9.9998 17.7C8.02461 17.7 5.46122 17.4946 3.57328 17.3126C1.69539 17.1316 0.299805 15.5453 0.299805 13.6773L0.299805 9.50005C0.299805 9.11345 0.613205 8.80005 0.999804 8.80005Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </main>
    </>
  );
};

export default Certificate;
