import { categoryType } from "@/interFace/interFace";
import CategoryIconOne from "@/svg/CategoryIconOne";
import CategoryIconEight from "@/svg/category-icon-eight";
import CategoryIconFive from "@/svg/category-icon-five";
import CategoryIconFour from "@/svg/category-icon-four";
import CategoryIconNine from "@/svg/category-icon-nine";
import CategoryIconSeven from "@/svg/category-icon-seven";
import CategoryIconSix from "@/svg/category-icon-six";
import CategotyIconThere from "@/svg/category-icon-there";
import CategoryIconTwo from "@/svg/category-icon-two";

const category_data: categoryType[] = [
  {
    id: 1,
    icon: CategoryIconOne,
    title: "Data Science",
    desc: "Data is Everything",
  },
  {
    id: 2,
    icon: CategoryIconTwo,
    title: "Business",
    desc: "Improve your business",
  },
  {
    id: 3,
    icon: CategotyIconThere,
    title: "Art & Design",
    desc: "Fun & Challenging",
  },
  {
    id: 4,
    icon: CategoryIconFour,
    title: "Lifestyle",
    desc: "New Skills, New You",
  },
  {
    id: 5,
    icon: CategoryIconFive,
    title: "Marketing",
    desc: "Improve your business",
  },
  {
    id: 6,
    icon: CategoryIconSix,
    title: "Finance",
    desc: "Fun & Challenging",
  },
  {
    id: 7,
    icon: CategoryIconSeven,
    title: "Health & Fitness",
    desc: "Invest to Your Body",
  },
  {
    id: 8,
    icon: CategoryIconEight,
    title: "Music",
    desc: "Major or Minor",
  },
  {
    id: 9,
    icon: CategoryIconNine,
    title: "Academics",
    desc: "High Education Level",
  },
];
export default category_data;
