import React from "react";
import styled from "styled-components";

export default function Course() {
  return (
    <Wrapper>
      <Header>
        <Icon />
        <Title>კურსის სახელი</Title>
      </Header>
      <ProgressText>57%</ProgressText>
      <Progress max={100} value={57} />
      <Button>განაგრძე</Button>
    </Wrapper>
  );
}

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #2b4eff;
  border-radius: 8px;
  color: white;
  margin-top: 16px;
  margin-left: auto;
  display: block;
`;

const Progress = styled.progress`
  width: 100%;
  margin-top: 30px;
`;

const ProgressText = styled.p`
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  top: 50px;
  right: 16px;
  color: #818181;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #f3f5f8;
  padding: 16px;
  position: relative;
  border-radius: 8px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: black;
  margin: 0;
`;

const Icon = styled.div`
  width: 30px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #7e7a7a;
`;
