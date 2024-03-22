import React from "react";
import { User } from "./UsersIdContent";
import UserInfoBlock from "./UserInfoBlock";

interface UserInfoGridProps {
  user: User | null;
}

const UserInfoGrid: React.FC<UserInfoGridProps> = ({ user }) => {
  return (
    <div className="grid grid-cols-4 gap-8 border-[#D9EBF4] border-1 border-b border-solid pb-10">
      <div>
        <UserInfoBlock title="სახელი" value={user?.name} />
        <UserInfoBlock title="ასაკი" value={user?.age} />
        <UserInfoBlock title="ქალაქი" value={user?.city} />
        <UserInfoBlock
          title="დასაქმების სტატუსი"
          value={user?.employment_status}
        />
      </div>

      <div>
        <UserInfoBlock title="გვარი" value={user?.surname} />
        <UserInfoBlock title="სქესი" value={user?.gender} />
        <UserInfoBlock title="განათლება" value={user?.education} />
        <UserInfoBlock
          title="დასაქმების ინდუსტრია"
          value={user?.employment_industry}
        />
      </div>

      <div>
        <UserInfoBlock title="ელ.ფოსტა" value={user?.email} />
        <UserInfoBlock title="მობილურის ნომერი" value={user?.phone_number} />
        <UserInfoBlock title="ფაკულტეტი" value={user?.faculty} />
        <UserInfoBlock title="პოზიცია" value={user?.employment_position} />
      </div>

      <div>
        <UserInfoBlock title="თარიღი" value={user?.formatted_created_at} />
      </div>
    </div>
  );
};

export default UserInfoGrid;
