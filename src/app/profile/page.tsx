"use client";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";
import styled from "styled-components";
import ProfieIcon from "../../../public/assets/img/profile/profile.jpg";
import Image from "next/image";
import Link from "next/link";
const ProfilePage = () => {
  const nameSurname = "ნანუკა როინიშვილი";
  return (
    <Wrapper>
      <Main>
        <Content>
          <ProfileMenu>
            <ProfileInfo>
              <Image style={{ width: "30px", height: "auto" }} src={ProfieIcon} alt="Profile" />
              <P>{nameSurname}</P>
            </ProfileInfo>
            <Navigation>
              <NavItem>
                <I className="fal fa-book"></I>
                <P>ჩემი კურსები</P>
              </NavItem>
              <NavItem>
                <I className="fal fa-gear"></I>
                <P>პარამეტრები</P>
              </NavItem>
              <NavItem>
                <I className="fal fa-arrow-right-from-bracket"></I>
                <P>გასვლა</P>
              </NavItem>
            </Navigation>
          </ProfileMenu>
        </Content>
      </Main>
    </Wrapper>
  );
};

export default ProfilePage;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  border-radius: 4px;
  padding: 8px;
  padding-left: 16px;
  &:hover {
    background-color: #f3f4f8;
  }
`;

const I = styled.i`
  color: black;
`;

const Main = styled.main`
  background-color: #f3f4f8;
  min-height: 100dvh;
  padding-top: 96px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-block: 64px;
  @media (max-width: 1400px) {
    max-width: 1140px;
  }
  @media (max-width: 1200px) {
    max-width: 960px;
  }
  @media (max-width: 996px) {
    max-width: 720px;
  }
`;

const ProfileMenu = styled.div`
  width: 350px;
  background-color: white;
  border-radius: 8px;
  padding: 24px;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const P = styled.div`
  margin: 0;
  color: black;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
  border-top: 1px solid #f3f4f8;
  padding-top: 20px;
`;
