"use client";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";
import { Navigation } from "../../Navigation";
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  const params = useParams();
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();
  const currentPath = window.location.pathname;

  const updateIsDesktop = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);
    return () => {
      window.removeEventListener("resize", updateIsDesktop);
    };
  }, []);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isDesktop) {
    router.push(currentPath + "/1");
  }
  return <div>{isClient && <Navigation id={params.id} />}</div>;
};

export default Page;
