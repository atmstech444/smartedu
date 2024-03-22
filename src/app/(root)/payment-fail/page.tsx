"use client";
import Wrapper from "@/layout/DefaultWrapper";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Error from "@/../public/assets/img/payment/error.png";
import styled from "styled-components";

const Payment = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div>
      {isClient && (
        <Wrapper>
          <Container>
            <Image src={Error} alt="Failed" style={{ width: "70px", height: "70px" }} />
            <Title>გადახდა ვერ განხორციელდა</Title>
          </Container>
        </Wrapper>
      )}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 33px;

  padding-bottom: 100px;
  padding-top: 150px;
`;

const Title = styled.p`
  color: #000;
  font-family: BPG Arial;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default Payment;
