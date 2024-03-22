"use client";
import AboutPageMain from "@/components/about/AboutPageMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const AboutPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <AboutPageMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default AboutPage;
