import styled from "styled-components";

interface Props {
  infoTitle: string;
  infoValue: string;
}

export default function InfoBox({ infoTitle, infoValue }: Props) {
  return (
    <Box>
      <InfoTitle>{infoTitle}</InfoTitle>
      <InfoValue>{infoValue}</InfoValue>
    </Box>
  );
}
const InfoTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
`;

const InfoValue = styled.p`
  font-size: 64px;
  font-weight: 500;
  color: white;
  margin-top: 32px;
`;

const Box = styled.div`
  width: 100%;
  height: 150px;
  background-color: #d90429;
  border-radius: 8px;
  color: white;
  padding: 16px;

  &:nth-child(2) {
    background-color: #ffb703;
  }
  &:nth-child(3) {
    background-color: #588157;
  }
`;
