"use client";
import TermsConditionMain from "@/components/terms-conditions/TermsConditionMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const TermsConditionPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <TermsConditionMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default TermsConditionPage;
