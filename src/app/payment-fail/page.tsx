"use client";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";
import Image from "next/image";
import Error from "@/../public/assets/img/payment/error.png";
// import styled from "styled-components";

const Payment = () => {
  return (
    <div>
      <Wrapper>
        <h1>გადახდა ვერ განხორციელდა</h1>
        {/* <Container>
          <Image src={Error} alt="Failed" />
          <Title>გადახდა ვერ განხორციელდა</Title>
        </Container> */}
      </Wrapper>
    </div>
  );
};

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 33px;

//   padding-bottom: 100px;
//   padding-top: 300px;
// `;

// const Title = styled.p`
//   color: #000;
//   font-family: BPG Arial;
//   font-size: 40px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
// `;

export default Payment;
