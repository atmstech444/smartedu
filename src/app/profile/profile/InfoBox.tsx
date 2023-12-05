import { StaticImageData } from "next/image";
import styled from "styled-components";
import Image from "next/image";
interface Props {
  infoTitle: string;
  infoValue: number;
  img: StaticImageData;
}

export default function InfoBox({ infoTitle, infoValue, img }: Props) {
  return (
    <Box>
      <InfoTitle>{infoTitle}</InfoTitle>
      <InfoValue>{infoValue}</InfoValue>
      <Image style={{ position: "absolute", top: "40%", right: "16px", transform: "translateX(-50%)" }} width={50} src={img} alt="" />
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
  position: relative;
  &:nth-child(2) {
    background-color: #ffb703;
  }
  &:nth-child(3) {
    background-color: #588157;
  }
`;
