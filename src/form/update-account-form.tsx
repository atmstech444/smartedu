"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { PUT_UpdateUser } from "@/api/PUT_UpdateUser";
import Input from "@/components/form/Input";
import Dropdown from "@/components/form/Dropdown";

const UpdateAccountForm = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const [data, setData] = useState({
    age: user?.age,
    gender: user?.gender,
    phone_number: user?.phone_number,
    city: user?.city,
    education: user?.education,
    faculty: user?.faculty,
    employment_status: user?.employment_status,
    employment_industry: user?.employment_industry,
    employment_position: user?.employment_position,
    name: user?.name,
    surname: user?.surname,
    email: user?.email,
  });

  const editProfile = () => {
    if (user) {
      PUT_UpdateUser({ ...data, token: user.token }, user, dispatch);
    }
  };

  return (
    <>
      <Flexbox>
        <Input
          exportValue={(value: any) => {
            setData({ ...data, name: value });
          }}
          label="სახელი"
          placeholder="სახელი"
          defaultValue={user?.name}
        />
        <Input
          exportValue={(value: any) => {
            setData({ ...data, surname: value });
          }}
          label="გვარი"
          placeholder="გვარი"
          defaultValue={user?.surname}
        />
        <Input
          exportValue={(value: any) => {
            setData({ ...data, email: value });
          }}
          label="ელ. ფოსტა"
          placeholder="ელ. ფოსტა"
          defaultValue={user?.email}
        />
      </Flexbox>

      <Flexbox>
        <Dropdown
          label="ასაკი"
          exportValue={(value: any) => {
            setData({ ...data, age: value });
          }}
          options={[
            { value: "12-18", text: "12-18" },
            { value: "18-23", text: "18-23" },
            { value: "24-29", text: "24-29" },
            { value: "30-40", text: "30-40" },
            { value: "41-50", text: "41-50" },
            { value: "50-60", text: "50-60" },
            { value: "61+", text: "61+" },
          ]}
          defaultValue={user?.age}
        />
        <Dropdown
          label="სქესი"
          options={[
            { value: "მდედრობითი", text: "მდედრობითი" },
            { value: "მამრობითი", text: "მამრობითი" },
          ]}
          exportValue={(value: any) => {
            setData({ ...data, gender: value });
          }}
          defaultValue={user?.gender}
        />
        <Input
          exportValue={(value: any) => {
            setData({ ...data, phone_number: value });
          }}
          label="მობილურის ნომერი"
          placeholder="მობილურის ნომერი"
          defaultValue={user?.phone_number}
        />
      </Flexbox>

      <Flexbox>
        <Input
          exportValue={(value: any) => {
            setData({ ...data, city: value });
          }}
          label="ქალაქი"
          placeholder="ქალაქი"
          defaultValue={user?.city}
        />

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
          exportValue={(value: any) => {
            setData({ ...data, education: value });
          }}
          defaultValue={user?.education}
        />
        <Input
          exportValue={(value: any) => {
            setData({ ...data, faculty: value });
          }}
          label="ფაკულტეტი"
          defaultValue={user?.faculty}
          placeholder="ფაკულტეტი"
        />
      </Flexbox>

      <Flexbox>
        <Dropdown
          label="დასაქმების სტატუსი"
          options={[
            { value: "დასაქმებული", text: "დასაქმებული" },
            { value: "უმუშავარი", text: "უმუშავარი" },
          ]}
          exportValue={(value: any) => {
            setData({ ...data, employment_status: value });
          }}
          defaultValue={user?.employment_status}
        />
        <Input
          exportValue={(value: any) => {
            setData({ ...data, employment_industry: value });
          }}
          label="დასაქმების ინდუსტრია"
          placeholder="დასაქმების ინდუსტრია"
          defaultValue={user?.employment_industry}
        />
        <Input
          exportValue={(value: any) => {
            setData({ ...data, employment_position: value });
          }}
          label="პოზიცია"
          defaultValue={user?.employment_position}
          placeholder="პოზიცია"
        />
      </Flexbox>

      <Flexbox>
        <button onClick={editProfile} style={{ marginTop: "16px", gridColumn: 3 }} className="e-btn w-100">
          {" "}
          <span></span> შენახვა
        </button>
      </Flexbox>
    </>
  );
};

const Flexbox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  margin-bottom: 24px;
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default UpdateAccountForm;
