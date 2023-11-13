import styled from "styled-components";
import Course from "./Course";

export default function Profile() {
  return (
    <Wrapper>
      <Title>განაგრძე ყურება</Title>
      <Flexbox>
        <Course />
        <Course />
        <Course />
      </Flexbox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px;
  width: 100%;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: black;
  font-weight: 600;
`;

const Flexbox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;
