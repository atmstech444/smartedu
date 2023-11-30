import styled from "styled-components";
import Course from "./Course";
import InfoBox from "./InfoBox";
import { useAppSelector } from "@/redux/store";
import Dropdown from "@/components/form/Dropdown";
import Input from "@/components/form/Input";
import Progress from "@/components/form/Progress";
import { useState } from "react";

export default function Profile() {
  const myCourses = useAppSelector((state) => state.myCourses.courses);
  const nonNullCoursesCount = myCourses.filter((course) => course !== null).length;
  const [percent, setPercent] = useState(20);
  return (
    <Wrapper>
      {percent !== 100 && (
        <>
          <Title>დაასრულე პროფილის შევსება</Title>
          <Subtitle>აღნიშნული დამატებითი ინფორმაციები შემდგომში დაგვეხმარება, შემოგთავაზოთ თქვენზე მორგებული კურსები და გავაუმჯობესოთ ჩვენი პროდუქტები</Subtitle>
          {percent === 20 && (
            <Flexbox>
              <Dropdown
                label="ასაკი"
                options={[
                  { value: "12-18", text: "12-18" },
                  { value: "18-23", text: "18-23" },
                  { value: "24-29", text: "24-29" },
                  { value: "30-40", text: "30-40" },
                  { value: "41-50", text: "41-50" },
                  { value: "50-60", text: "50-60" },
                  { value: "61+", text: "61+" },
                ]}
              />
              <Dropdown
                label="სქესი"
                options={[
                  { value: "მდედრობითი", text: "მდედრობითი" },
                  { value: "მამრობითი", text: "მამრობითი" },
                ]}
              />
              <Input label="მობილურის ნომერი" placeholder="მობილურის ნომერი" />
            </Flexbox>
          )}
          {percent === 50 && (
            <Flexbox>
              <Input label="ქალაქი" placeholder="ქალაქი" />

              <Dropdown
                label="განათლება"
                options={[
                  { value: "სკოლის მოსწავლე", text: "სკოლის მოსწავლე" },
                  { value: "ბაკალავრის სტუდენტი", text: "ბაკალავრის სტუდენტი" },
                  { value: "ბაკალავრი", text: "ბაკალავრი" },
                  { value: "მაგისტრანტი", text: "მაგისტრანტი" },
                  { value: "მაგისტრი", text: "მაგისტრი" },
                  { value: "დოქტორანტი", text: "დოქტორანტი" },
                  { value: "დოქტორი", text: "დოქტორი" },
                ]}
              />
              <Input label="ფაკულტეტი" placeholder="ფაკულტეტი" />
            </Flexbox>
          )}
          {percent === 80 && (
            <Flexbox>
              <Dropdown
                label="დასაქმების სტატუსი"
                options={[
                  { value: "დასაქმებული", text: "დასაქმებული" },
                  { value: "უმუშავარი", text: "უმუშავარი" },
                ]}
              />
              <Input label="დასაქმების ინდუსტრია" placeholder="დასაქმების ინდუსტრია" />
              <Input label="პოზიცია" placeholder="პოზიცია" />
            </Flexbox>
          )}
          <Parent>
            <Progress progress={percent} />
            <Percentage>{percent} %</Percentage>
            <Button
              onClick={() => {
                if (percent === 20) setPercent(50);
                if (percent === 50) setPercent(80);
                if (percent === 80) setPercent(100);
              }}
            >
              {percent !== 80 ? "შემდეგი" : "დასრულება"}
            </Button>
          </Parent>
        </>
      )}

      <Flexbox style={{ marginTop: "36px" }}>
        <InfoBox infoTitle="ჩემი კურსები" infoValue={nonNullCoursesCount.toString()} />
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

const Parent = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  margin-top: 16px;
`;

const Percentage = styled.p`
  margin: 0 !important;
  font-size: 16px;
  margin-bottom: 20px;
  white-space: nowrap;
`;

const Button = styled.button`
  width: 160px;
  height: 40px;
  background-color: #2b4eff;
  border-radius: 8px;
  color: white;
  margin-left: auto;
  display: block;
`;

const Wrapper = styled.div`
  padding: 24px;
  width: 100%;
  padding-top: 0px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: black;
  font-weight: 600;
  margin-top: 30px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: black;
`;

const Flexbox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
