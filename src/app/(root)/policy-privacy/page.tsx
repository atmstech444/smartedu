"use client";
import PolicyPrivacyMain from "@/components/policy-privacy/PolicyPrivacyMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <PolicyPrivacyMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default Page;
