import UpdateAccountForm from "@/form/update-account-form";
import UpdatePasswordForm from "@/form/update-password-form";
import { useState } from "react";
import styled from "styled-components";

type Page_Type = "პროფილის რედაქტირება" | "პაროლის ცვლილება";

export default function Settings() {
  const [page, setPage] = useState<Page_Type>("პროფილის რედაქტირება");
  return (
    <Parent>
      <Header>
        {/* prettier-ignore */}
        <Title isActive={page==='პროფილის რედაქტირება'} onClick={()=>{setPage("პროფილის რედაქტირება")}}>პროფილის რედაქტირება</Title>
        {/* prettier-ignore */}
        <Title isActive={page==='პაროლის ცვლილება'} onClick={()=>{setPage("პაროლის ცვლილება")}}>პაროლის განახლება</Title>
      </Header>
      {page === "პროფილის რედაქტირება" && (
        <Wrapper>
          <UpdateAccountForm />
        </Wrapper>
      )}
      {page === "პაროლის ცვლილება" && (
        <Wrapper>
          <UpdatePasswordForm />
        </Wrapper>
      )}
    </Parent>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 10px;
    left: 0px;
    background-color: #f3f5f8;
    z-index: 5;
  }
`;

const Parent = styled.div`
  padding: 24px;
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
  margin-top: 20px;
`;

const Title = styled.p<{ isActive: boolean }>`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  color: ${(props) => (props.isActive ? "black" : "gray")};
  cursor: pointer;
  font-family: "BPG Arial";

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -10px;
    z-index: 10;
    left: 0px;
    background-color: ${(props) => (props.isActive ? "black" : "transparent")};
    visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  }
`;
