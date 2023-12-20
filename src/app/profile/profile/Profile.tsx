import styled from "styled-components";
import Course from "./Course";
import InfoBox from "./InfoBox";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Dropdown from "@/components/form/Dropdown";
import Progress from "@/components/form/Progress";
import { useEffect, useState } from "react";
import courses from "../../../../public/assets/img/luka/courses.svg";
import done from "../../../../public/assets/img/luka/done.svg";
import time from "../../../../public/assets/img/luka/time.svg";
import { PUT_UpdateUser } from "@/api/PUT_UpdateUser";
import RateCourse from "./RateCourse";
import Input from "@/components/form/Input";

export default function Profile() {
  const myCourses = useAppSelector((state) => state.myCourses.courses);
  const user = useAppSelector((state) => state.user.user);
  const [percent, setPercent] = useState<number>(20);
  const [request, setRequest] = useState(0);
  const dispatch = useAppDispatch();
  const progress = useAppSelector((state) => state.progress.progressInfo);
  const [errors, setErrors] = useState<string[]>([]);
  const [validationsStarted, setValidationsStarted] = useState(false);
  const addError = (error: string) => {
    if (!errors.includes(error)) setErrors([...errors, error]);
  };
  const removeError = (error: string) => {
    const errorArray = errors;
    const index = errorArray.indexOf(error);
    if (index > -1) {
      errorArray.splice(index, 1);
    }
    setErrors([...errorArray]);
  };

  const [data, setData] = useState({
    age: null,
    gender: null,
    phone_number: null,
    city: null,
    education: null,
    faculty: null,
    employment_status: null,
    employment_industry: null,
    employment_position: null,
  });

  const rateCourses = myCourses.filter((course) => course.completion_percentage === 100);
  const firstThreeCourses = myCourses.filter((course) => course.completion_percentage !== 100).slice(0, 3);

  useEffect(() => {
    if (user && request) {
      if (errors.length === 0) {
        try {
          if (percent === 20) {
            let { age, phone_number, gender } = data;
            if (age && phone_number && gender) {
              setPercent(50);
              setValidationsStarted(false);
              PUT_UpdateUser({ ...data, token: user.token }, user, dispatch);
            }
          }
          if (percent === 50) {
            let { city, education, faculty } = data;
            if (city && education && faculty) {
              setPercent(80);
              setValidationsStarted(false);
              PUT_UpdateUser({ ...data, token: user.token }, user, dispatch);
            }
          }
          if (percent === 80) {
            let { employment_industry, employment_position, employment_status } = data;
            if (employment_industry && employment_position && employment_status) {
              setPercent(100);
              setValidationsStarted(false);
              PUT_UpdateUser({ ...data, token: user.token }, user, dispatch);
            }
          }
        } catch {}
      }
    }
  }, [request]);

  useEffect(() => {
    if (user) {
      if (user.age) setPercent(50);
      if (user.city) setPercent(80);
      if (user.employment_status) setPercent(100);
    }
  }, [user]);

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
                exportValue={(value: any) => {
                  setData({ ...data, age: value });
                }}
                options={[
                  { value: null, text: "აირჩიე ასაკი" },
                  { value: "12-18", text: "12-18" },
                  { value: "18-23", text: "18-23" },
                  { value: "24-29", text: "24-29" },
                  { value: "30-40", text: "30-40" },
                  { value: "41-50", text: "41-50" },
                  { value: "50-60", text: "50-60" },
                  { value: "61+", text: "61+" },
                ]}
                id="age"
                valStarted={validationsStarted}
                startVal={setValidationsStarted}
                addError={addError}
                removeError={removeError}
              />
              <Dropdown
                label="სქესი"
                id="gender"
                valStarted={validationsStarted}
                startVal={setValidationsStarted}
                addError={addError}
                removeError={removeError}
                options={[
                  { value: null, text: "აირჩიე სქესი" },
                  { value: "მდედრობითი", text: "მდედრობითი" },
                  { value: "მამრობითი", text: "მამრობითი" },
                ]}
                exportValue={(value: any) => {
                  setData({ ...data, gender: value });
                }}
              />

              <Input
                id="phone"
                label="მობილურის ნომერი"
                setValue={(value: any) => {
                  setData({ ...data, phone_number: value });
                }}
                custType="phone"
                valStarted={validationsStarted}
                startVal={setValidationsStarted}
                addError={addError}
                removeError={removeError}
              />
            </Flexbox>
          )}
          {percent === 50 && (
            <Flexbox>
              <Input
                id="city"
                setValue={(value: any) => {
                  setData({ ...data, city: value });
                }}
                label="ქალაქი"
                placeholder="ქალაქი"
                custType="city"
                valStarted={validationsStarted}
                startVal={setValidationsStarted}
                addError={addError}
                removeError={removeError}
              />

              <Dropdown
                label="განათლება"
                options={[
                  { value: null, text: "აირჩიე განათლება" },
                  { value: "სკოლის მოსწავლე", text: "სკოლის მოსწავლე" },
                  { value: "ბაკალავრის სტუდენტი", text: "ბაკალავრის სტუდენტი" },
                  { value: "ბაკალავრი", text: "ბაკალავრი" },
                  { value: "მაგისტრანტი", text: "მაგისტრანტი" },
                  { value: "მაგისტრი", text: "მაგისტრი" },
                  { value: "დოქტორანტი", text: "დოქტორანტი" },
                  { value: "დოქტორი", text: "დოქტორი" },
                ]}
                exportValue={(value: any) => {
                  setData({ ...data, education: value });
                }}
                valStarted={validationsStarted}
                startVal={setValidationsStarted}
                addError={addError}
                removeError={removeError}
              />
              <Input
                id="faculty"
                setValue={(value: any) => {
                  setData({ ...data, faculty: value });
                }}
                custType="faculty"
                label="ფაკულტეტი"
                placeholder="ფაკულტეტი"
                valStarted={validationsStarted}
                startVal={setValidationsStarted}
                addError={addError}
                removeError={removeError}
              />
            </Flexbox>
          )}
          {percent === 80 && (
            <Flexbox>
              <Dropdown
                label="დასაქმების სტატუსი"
                options={[
                  { value: null, text: "აირჩიე სტატუსი" },
                  { value: "დასაქმებული", text: "დასაქმებული" },
                  { value: "უმუშავარი", text: "უმუშავარი" },
                ]}
                exportValue={(value: any) => {
                  setData({ ...data, employment_status: value });
                }}
                valStarted={validationsStarted}
                startVal={setValidationsStarted}
                addError={addError}
                removeError={removeError}
              />
              <Input
                setValue={(value: any) => {
                  setData({ ...data, employment_industry: value });
                }}
                label="დასაქმების ინდუსტრია"
                placeholder="დასაქმების ინდუსტრია"
                id="industry"
                custType="industry"
                valStarted={validationsStarted}
                startVal={setValidationsStarted}
                addError={addError}
                removeError={removeError}
              />
              <Input
                setValue={(value: any) => {
                  setData({ ...data, employment_position: value });
                }}
                custType="position"
                label="პოზიცია"
                id="position"
                placeholder="პოზიცია"
                valStarted={validationsStarted}
                startVal={setValidationsStarted}
                addError={addError}
                removeError={removeError}
              />
            </Flexbox>
          )}
          <Parent>
            <Progress progress={percent} />
            <Percentage>{percent} %</Percentage>
            <Button
              onClick={() => {
                setValidationsStarted(true);
                setRequest(request + 1);
              }}
            >
              {percent !== 80 ? "შემდეგი" : "დასრულება"}
            </Button>
          </Parent>
          <Devider />
        </>
      )}

      <Flexbox style={{ marginTop: "36px" }}>
        <InfoBox img={courses} infoTitle="ჩემი კურსები" infoValue={myCourses.length} />
        <InfoBox img={time} infoTitle="ნანახი საათები" infoValue={secondsToHours(progress.total_watched_time, 1)} />
        <InfoBox img={done} infoTitle="გავლილი კურსები" infoValue={progress.completed_courses_count} />
      </Flexbox>

      {firstThreeCourses.length > 0 && (
        <>
          <Devider />

          <Title>განაგრძე ყურება</Title>
          <Flexbox>
            {firstThreeCourses.map((course) => {
              return <Course course={course} key={course.id + "sokf"} />;
            })}
          </Flexbox>
        </>
      )}
      {rateCourses.length > 0 && (
        <>
          <Devider />
          <Title>შეაფასე გავლილი კურსები</Title>
          <Flexbox>
            {rateCourses.map((course) => {
              return <RateCourse course={course} key={course.id + "sokf"} />;
            })}
          </Flexbox>
        </>
      )}
    </Wrapper>
  );
}

function secondsToHours(seconds: number, decimalPlaces: number) {
  const hours = seconds / 3600; // Convert seconds to hours
  const roundedHours = +hours.toFixed(decimalPlaces); // Round to the specified decimal places
  return roundedHours;
}

const Error = styled.p`
  position: absolute;
  color: red;
  font-size: 14px;
  top: 260px;
`;

const Devider = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 8px;
  background-color: #e4e3e3;
  margin-top: 32px;
  margin-bottom: 32px;
`;

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
  position: relative;
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
`;

const Flexbox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
