"use client";
import ErrorPageMain from "@/components/404-page/ErrorPageMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const ErrorPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <ErrorPageMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default ErrorPage;
