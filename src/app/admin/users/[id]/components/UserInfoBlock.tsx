import React from "react";

interface UserInfoBlockProps {
  title: string;
  value: string | number | null | undefined;
}

const UserInfoBlock: React.FC<UserInfoBlockProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col gap-8 border-[#D9EBF4] border-1 border-r border-solid pb-8">
      <p className="font-medium text-xl text-[#0FA4EF]">{title}</p>
      <p>{value}</p>
    </div>
  );
};

export default UserInfoBlock;
