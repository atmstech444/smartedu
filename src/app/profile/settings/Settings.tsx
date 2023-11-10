import UpdateAccountForm from "@/form/update-account-form";
import UpdatePasswordForm from "@/form/update-password-form";
import styled from "styled-components";

export default function Settings() {
  return (
    <Parent>
      <Wrapper>
        <Title>ინფორმაციის რედაქტირება</Title>
        <UpdateAccountForm />
      </Wrapper>
      <Wrapper>
        <Title>პაროლის განახლება</Title>
        <UpdatePasswordForm />
      </Wrapper>
    </Parent>
  );
}
const Parent = styled.div`
  padding: 24px;
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
  &:last-child {
    margin-top: 60px;
  }
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: black;
`;
