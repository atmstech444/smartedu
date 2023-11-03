import mobile_menu_data from "@/data/menu-data";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <>
      {mobile_menu_data?.length &&
        mobile_menu_data?.map((item) => (
          <li
            key={item.id}
            className={item.hasDropdown ? "menu-item-has-children mr-15" : ""}
          >
            <Link href={item.link}> {item.title} </Link>
            {item.hasDropdown === true && (
              <ul className="submenu">
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

export default Menu;
