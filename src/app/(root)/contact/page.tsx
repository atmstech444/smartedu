"use client";
import ContactMain from "@/components/contact/ContactMain";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";

const ContactPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Wrapper>
          <main>
            <ContactMain />
          </main>
        </Wrapper>
      )}
    </>
  );
};

export default ContactPage;
