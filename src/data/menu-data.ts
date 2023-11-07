interface MenuItem {
  id: number;
  hasDropdown?: boolean;
  active?: boolean;
  title: string;
  pluseIncon?: boolean;
  link: string;
  submenus?: any[];
  pages?: boolean;
}

const mobile_menu_data: MenuItem[] = [
  {
    id: 1,
    active: true,
    title: "მთავარი",
    pluseIncon: true,
    link: "/",
  },
  {
    id: 2,
    title: "კურსები",
    link: "/course-grid",
    pluseIncon: true,
  },
  {
    id: 3,
    hasDropdown: false,
    title: "ჩვენ შესახებ",
    link: "/about",
  },
  {
    id: 4,
    hasDropdown: false,
    title: "კონტაქტი",
    link: "/contact",
  },
];

export default mobile_menu_data;
