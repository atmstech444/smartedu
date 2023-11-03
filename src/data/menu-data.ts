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
    hasDropdown: true,
    active: true,
    title: "Home",
    pluseIncon: true,
    link: "/",
    submenus: [
      { title: "Home Style 1", link: "/" },
      { title: "Home Style 2", link: "/home-2" },
      { title: "Home Style 3", link: "/home-3" },
    ],
  },
  {
    id: 2,
    hasDropdown: true,
    title: "Courses",
    link: "/course-grid",
    pluseIncon: true,
    submenus: [
      { title: "Courses", link: "/course-grid" },
      { title: "Courses List", link: "/course-list" },
      { title: "Course-Sidebar", link: "/course-sidebar" },
      { title: "Course details", link: "/course-details" },
    ],
  },

  {
    id: 3,
    hasDropdown: true,
    title: "Blog",
    link: "/blog",
    pluseIncon: true,
    submenus: [
      { title: "Blog", link: "/blog" },
      { title: "Blog Details", link: "/blog-details" },
    ],
  },

  {
    id: 4,
    hasDropdown: true,
    title: "pages",
    link: "/about",
    submenus: [
      { title: "About", link: "/about" },
      { title: "Instructor", link: "/instructor" },
      { title: "Instructor Details", link: "/instructor-details" },
      { title: "Event Details", link: "/event-details" },
      { title: "Shop", link: "/shop" },
      { title: "Shop Details", link: "/shop-details" },
      { title: "My Cart", link: "/cart" },
      { title: "My Wishlist", link: "/wishlist" },
      { title: "Checkout", link: "/checkout" },
      { title: "Sign In", link: "/sign-in" },
      { title: "Sign Up", link: "/sign-up" },
      { title: " Terms & Conditions", link: "/terms-conditions" },
      { title: "Privacy & Policy", link: "/policy-privacy" },
      { title: "Error", link: "/error" },
    ],
  },
  {
    id: 5,
    hasDropdown: false,
    title: "Contact",
    link: "/contact",
  },
];

export default mobile_menu_data;
