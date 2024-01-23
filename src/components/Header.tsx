import AdminPanelLogo from "@/public/assets/dynamic_icons/AdminPnaleLogo";
import DashboardIcon from "@/public/assets/dynamic_icons/DashboardIcon";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="bg-[#D9EBF4] flex items- justify-between pl-11 pr-12 py-6">
      <Link href="/admin/main" className="flex items-center gap-2">
        <DashboardIcon />
        <h1 className="text-black text-xl font-bold">Dashboard</h1>
      </Link>

      <div className="flex items-center gap-2">
        <h1 className="text-black text-xl font-normal">Admin panel</h1>
        <AdminPanelLogo />
      </div>
    </div>
  );
}

export default Header;
