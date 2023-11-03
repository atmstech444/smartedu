import thum1 from "../../public/assets/img/slider/slider-4.jpg";
import thum2 from "../../public/assets/img/slider/slider-1.jpg";
import thum3 from "../../public/assets/img/slider/slider-2.jpg";
import thum4 from "../../public/assets/img/slider/slider-3.jpg";
import thum5 from "../../public/assets/img/slider/nav/slider-nav-4.jpg";
import thum6 from "../../public/assets/img/slider/nav/slider-nav-1.jpg";
import thum7 from "../../public/assets/img/slider/nav/slider-nav-2.jpg";
import thum8 from "../../public/assets/img/slider/nav/slider-nav-3.jpg";
import YellowBg from "../../public/assets/img/shape/yellow-bg.png";
import { heroSliderType } from "@/interFace/interFace";

const hero_slider_data: heroSliderType[] = [
  {
    id: 1,
    image: thum1,
    title: "Find the right Online",
    wrapperClass: "yellow-bg",
    YellowBg: YellowBg,
    info: "Learn & Achieve",
    titleCategory: "tutor",
    titleInfo: "for you.",
    desc: "Meet university,and cultural institutions, who'll share their experience.",
    sliderBtn: "Ready to get Started?",
  },
  {
    id: 2,
    image: thum2,
    title: "Fundamentals of music",
    wrapperClass: "yellow-bg",
    YellowBg: YellowBg,
    info: "Learn & Achieve",
    titleCategory: "theory",
    titleInfo: "Learn",
    desc: "Meet university,and cultural institutions, who'll share their experience.",
    sliderBtn: "Ready to get Started?",
  },
  {
    id: 3,
    image: thum3,
    title: "Become a product",
    wrapperClass: "yellow-bg",
    YellowBg: YellowBg,
    info: "Learn & Achieve",
    titleCategory: "Manager",
    titleInfo: "& learn.",
    desc: "Meet university,and cultural institutions, who'll share their experience.",
    sliderBtn: "Ready to get Started?",
  },
  {
    id: 4,
    image: thum4,
    title: "Launch your",
    wrapperClass: "yellow-bg",
    YellowBg: YellowBg,
    info: "Learn & Achieve",
    titleCategory: "online",
    titleInfo: "learning Platform.",
    desc: "Meet university,and cultural institutions, who'll share their experience.",
    sliderBtn: "Ready to get Started?",
  },
  //slider two data
  {
    id: 5,
    image: thum5,
    title: "Programming Languages",
    info: "6 Courses",
    wrapperClass: "slider__nav-item orange-bg",
  },
  {
    id: 6,
    image: thum6,
    title: "Idea Discussion",
    info: "4 Courses",
    wrapperClass: "slider__nav-item blue-bg",
  },
  {
    id: 7,
    image: thum7,
    title: "Web Development",
    info: "8 Courses",
    wrapperClass: "slider__nav-item pink-bg",
  },
  {
    id: 8,
    image: thum8,
    title: "System Administration",
    info: "5 Courses",
    wrapperClass: "slider__nav-item green-bg",
  },
];

export default hero_slider_data;
