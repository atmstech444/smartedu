import React from "react";
import info from "@/public/assets/icons/Info.svg";
import Image from "next/image";
import { UserProps } from "../page";
interface Props {
  user: UserProps;
  onClick: any;
}
const UserCard = ({ user, onClick }: Props) => {
  return (
    <>
      <main className="grid gap-4 mb-6 place-items-start grid-cols-5">
        <div className="text-lg relative">{user.name}</div>
        <div className="text-lg relative">{user.surname}</div>
        <div className="col-span-2 text-lg relative">{user.email}</div>
        <div className="flex items-center justify-center gap-4 self-center text-lg">
          <p>{user.formatted_created_at}</p>
          <Image src={info} alt="info" onClick={onClick} className="cursor-pointer" />
        </div>
      </main>
    </>
  );
};

export default UserCard;
