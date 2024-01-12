"use client";
import mobile_menu_data from "@/data/menu-data";
import Link from "next/link";
import React, { useState } from "react";
import { useAppSelector } from "@/redux/store";
import styled from "styled-components";

const Username = styled.p`
  display: block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 14px;
  color: #101a23;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
`;

const MenuTwo = ({ close }: { close: any }) => {
  const [submenuOpen, setSubmenuOpen] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuToggle = (id: number) => {
    setSubmenuOpen(id);
    setOpen(!open);
  };
  const user = useAppSelector((state) => state.user.user);

  return (
    <>
      {mobile_menu_data?.length && (
        <>
          <Username>{user && `${user.name} ${user.surname}`}</Username>
          {mobile_menu_data?.map((item) => (
            <li
              onClick={() => handleMenuToggle(item.id)}
              key={item.id}
              className={`${item.hasDropdown && submenuOpen === item.id && open === true ? "menu-item-has-children has-droupdown active" : `${item.hasDropdown ? "menu-item-has-children has-droupdown" : ""}`}`}
            >
              <Link onClick={close} href={item.link}>
                {" "}
                {item.title}{" "}
              </Link>

              {item.hasDropdown === true && (
                <ul
                  className={item.submenus && submenuOpen === item.id && open === true ? "submenu active" : "submenu"}
                  style={{
                    display: item.submenus && submenuOpen === item.id && open === true ? "block" : "none",
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
      )}
    </>
  );
};

export default MenuTwo;
