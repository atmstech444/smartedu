"use client";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SecondaryNav from "../../../components/SecondaryNav";
import Reading from "../components/Reading";

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const params = useParams();
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Wrapper>
          <div className="md:pt-[24px] bg-[#F3F4F8] max-w-screen-xl mx-auto">
            <div className="lg:hidden mt-[20%] flex flex-col gap-[24px]">
              <Reading id={params.id} />
            </div>
            <div className="hidden lg:flex mt-[150px]  md:gap-[24px] lg:gap-[50px] px-[72px]">
              <SecondaryNav id={params.id} />
              <Reading id={params.id} />
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Page;
