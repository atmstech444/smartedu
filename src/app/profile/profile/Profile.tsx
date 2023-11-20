import styled from "styled-components";
import Course from "./Course";
import InfoBox from "./InfoBox";

export default function Profile() {
  return (
    <Wrapper>
      <Flexbox>
        <InfoBox infoTitle="ჩემი კურსები" infoValue="20" />
        <InfoBox infoTitle="ნანახი საათები" infoValue="340" />
        <InfoBox infoTitle="გავლილი კურსები" infoValue="5" />
      </Flexbox>
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
  margin-top: 30px;
`;

const Flexbox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
