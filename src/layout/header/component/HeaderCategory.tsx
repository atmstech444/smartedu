import HeaderCatDotIcon from "@/svg/header-cat-dot-icon";
import Link from "next/link";
import React from "react";

const HeaderCategory = () => {
  return (
    <div className="header__category d-none d-lg-block">
      <nav>
        <ul>
          <li>
            <Link
              href="/course-grid"
              className="cat-menu d-flex align-items-center"
            >
              <div className="cat-dot-icon d-inline-block">
                <HeaderCatDotIcon />
              </div>
              <span>Category</span>
            </Link>
            <ul className="cat-submenu">
              <li>
                <Link href="/course-grid">English Learning</Link>
              </li>
              <li>
                <Link href="/course-grid">Web Development</Link>
              </li>
              <li>
                <Link href="/course-grid">Logo Design</Link>
              </li>
              <li>
                <Link href="/course-grid">Motion Graphics</Link>
              </li>
              <li>
                <Link href="/course-grid">Video Edition</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderCategory;
