import { instructorType } from "@/interFace/interFace";
import imageOne from "../../public/assets/img/teacher/teacger-1.jpg";
import imageTwo from "../../public/assets/img/teacher/teacher-2.jpg";
import imageThree from "../../public/assets/img/teacher/teacher-3.jpg";
import imageFour from "../../public/assets/img/teacher/teacher-5.jpg";
import imageFive from "../../public/assets/img/teacher/teacher-4.jpg";
import imageSix from "../../public/assets/img/teacher/teacher-6.jpg";

const instructor_data: instructorType[] = [
  {
    id: 1,
    image: imageOne,
    title: "Lillian Walsh",
    category: "CO Founder",
    socialIcon: [
      { id: 1, link: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
      { id: 2, link: "https://twitter.com/", icon: "fab fa-twitter" },
      { id: 3, link: "https://vimeo.com/", icon: "fab fa-vimeo-v" },
    ],
  },
  {
    id: 2,
    image: imageTwo,
    title: "Kelly Franklin",
    category: "Desginer",
    socialIcon: [
      { id: 1, link: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
      { id: 2, link: "https://twitter.com/", icon: "fab fa-twitter" },
      { id: 3, link: "https://vimeo.com/", icon: "fab fa-vimeo-v" },
    ],
  },
  {
    id: 3,
    image: imageThree,
    title: "Hilary Ouse",
    category: "Markater",
    socialIcon: [
      { id: 1, link: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
      { id: 2, link: "https://twitter.com/", icon: "fab fa-twitter" },
      { id: 3, link: "https://vimeo.com/", icon: "fab fa-vimeo-v" },
    ],
  },
  {
    id: 4,
    image: imageFour,
    title: "Lillian Walsh",
    category: "CO Founder",
    socialIcon: [
      { id: 1, link: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
      { id: 2, link: "https://twitter.com/", icon: "fab fa-twitter" },
      { id: 3, link: "https://vimeo.com/", icon: "fab fa-vimeo-v" },
    ],
  },
  {
    id: 5,
    image: imageFive,
    title: "Shahnewaz",
    category: "Web Developer",
    socialIcon: [
      { id: 1, link: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
      { id: 2, link: "https://twitter.com/", icon: "fab fa-twitter" },
      { id: 3, link: "https://vimeo.com/", icon: "fab fa-vimeo-v" },
    ],
  },
  {
    id: 6,
    image: imageSix,
    title: "Nicola Tesla",
    category: "Engineer",
    socialIcon: [
      { id: 1, link: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
      { id: 2, link: "https://twitter.com/", icon: "fab fa-twitter" },
      { id: 3, link: "https://vimeo.com/", icon: "fab fa-vimeo-v" },
    ],
  },
];

export default instructor_data;
