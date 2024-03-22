import React from "react";
import { User } from "./UsersIdContent";
import PurchaseHistory from "./PurchaseHistory";
import UserInfoGrid from "./UserInfoGrid";
import { exportToExcel } from "./exportToExcel";
import PageHeader from "./Header";

interface PageContentProps {
  user: User | null;
  handleGoBack: () => void;
}

const PageContent: React.FC<PageContentProps> = ({ user, handleGoBack }) => {
  const handleExportToExcel = () => {
    exportToExcel(user);
  };
  return (
    <div className="flex flex-col gap-10 w-[85%] mb-24">
      <PageHeader
        onGoBack={handleGoBack}
        onExportToExcel={handleExportToExcel}
      />

      <UserInfoGrid user={user} />

      <PurchaseHistory purchases={user?.purchases} />
    </div>
  );
};

export default PageContent;
