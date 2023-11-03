"use client";
import mobile_menu_data from "@/data/menu-data";
import Link from "next/link";
import React, { useState } from "react";

const MenuTwo = () => {
  const [submenuOpen, setSubmenuOpen] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuToggle = (id: number) => {
    setSubmenuOpen(id);
    setOpen(!open);
  };

  return (
    <>
      {mobile_menu_data?.length &&
        mobile_menu_data?.map((item) => (
          <li
            onClick={() => handleMenuToggle(item.id)}
            key={item.id}
            className={`${
              item.hasDropdown && submenuOpen === item.id && open === true
                ? "menu-item-has-children has-droupdown active"
                : `${
                    item.hasDropdown
                      ? "menu-item-has-children has-droupdown"
                      : ""
                  }`
            }`}
          >
            <Link href="#!"> {item.title} </Link>
            {item.hasDropdown === true && (
              <ul
                className={
                  item.submenus && submenuOpen === item.id && open === true
                    ? "submenu active"
                    : "submenu"
                }
                style={{
                  display:
                    item.submenus && submenuOpen === item.id && open === true
                      ? "block"
                      : "none",
                }}
              >
                {item?.submenus?.length &&
                  item?.submenus.map((data, index) => (
                    <li key={index}>
                      <Link href={data.link}> {data.title} </Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
    </>
  );
};

export default MenuTwo;
