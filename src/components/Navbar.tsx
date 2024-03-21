"use client";
import CoursesIcon from "@/public/assets/icons/CoursesIcon.png";
import UsersIcon from "@/public/assets/icons/UsersIcon.png";
import NavbarBox from "./NavbarBox";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogOut from "./LogOut";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-56 mt-11 ml-4 border-r-2 border-[#D9EBF4] mb-12 min-h-[calc(100vh-150px)] flex flex-col justify-between">
      <div className="pt-5 flex flex-col gap-4">
        <Link href="/admin/main">
          <NavbarBox src={CoursesIcon} alt="Courses Icon" text="კურსები" isActive={pathname === "/admin/main" || pathname === "/admin/add-course"} />
        </Link>
        <Link href="/admin/add-tutor">
          <NavbarBox src={UsersIcon} alt="Users Icon" text="ტუტორი" isActive={pathname === "/admin/add-tutor"} />
        </Link>
        <Link href="/admin/users">
          <NavbarBox src={UsersIcon} alt="Users Icon" text="მომხმარებლები" isActive={pathname === "/admin/users"} />
        </Link>
        <Link href="/admin/users-certificates">
          <NavbarBox src={UsersIcon} alt="Users Icon" text="გაცემული სერთფიკატები" isActive={pathname === "/admin/users-certificates"} />
        </Link>
      </div>
      <LogOut />
    </div>
  );
};

export default Navbar;
