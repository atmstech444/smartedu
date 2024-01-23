import React, { SetStateAction } from "react";
import styled from "styled-components";
import { HiOutlineUserCircle, HiUserCircle, HiOutlineBookOpen, HiBookOpen, HiOutlineCog, HiCog } from "react-icons/hi";
import { pageType } from "./page";
export default function MobileNavigation({ page, setPage }: { page: pageType; setPage: React.Dispatch<React.SetStateAction<pageType>> }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: adds a smooth scrolling effect
    });
  };

  return (
    <Wrapper>
      <IconWrapper>
        {page === "profile" ? (
          <HiUserCircle />
        ) : (
          <HiOutlineUserCircle
            onClick={() => {
              setPage("profile");
              scrollToTop();
            }}
          />
        )}
      </IconWrapper>
      <IconWrapper>
        {page === "my-courses" ? (
          <HiBookOpen />
        ) : (
          <HiOutlineBookOpen
            onClick={() => {
              setPage("my-courses");
              scrollToTop();
            }}
          />
        )}
      </IconWrapper>
      <IconWrapper>
        {page === "settings" ? (
          <HiCog />
        ) : (
          <HiOutlineCog
            onClick={() => {
              setPage("settings");
              scrollToTop();
            }}
          />
        )}
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 50px;
  background-color: white;

  position: fixed;
  z-index: 1000;

  left: 0px;
  top: calc(100dvh - 50px);

  box-shadow: 0px 8px 10px 2px black;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: 1080px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: black;
`;
