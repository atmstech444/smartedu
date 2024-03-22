import BlogImg from "../../public/assets/img/blog/blog-1.jpg";
import BlogImgTwo from "../../public/assets/img/blog/blog-2.jpg";
import BlogImgThree from "../../public/assets/img/blog/blog-3.jpg";
import BlogImgFour from "../../public/assets/img/blog/blog-4.jpg";
import BlogImgFive from "../../public/assets/img/blog/blog-5.jpg";
import BlogImgSix from "../../public/assets/img/blog/blog-6.jpg";
import authorImg from "../../public/assets/img/blog/author/author-1.jpg";
import authorImgTwo from "../../public/assets/img/blog/author/author-2.jpg";
import authorImgThree from "../../public/assets/img/blog/author/author-3.jpg";
import { blogType } from "@/interFace/interFace";

const blog_data: blogType[] = [
  {
    id: 1,
    image: BlogImg,
    blogTag: "Art & Design",
    title: "The Challenge Of Global Learning In Public Education",
    authorImg: authorImg,
    author: "Jim Séchen",
    date: "April 02, 2023",
  },
  {
    id: 2,
    image: BlogImgTwo,
    blogTag: "Marketing",
    blogWrapperClass: "purple",
    title: "Exactly How Technology Can Make Reading Better",
    authorImg: authorImgTwo,
    author: "Barry Tone",
    date: "July 02, 2023",
  },
  {
    id: 3,
    image: BlogImgThree,
    blogTag: "UX Design",
    blogWrapperClass: "pink",
    title: "New Chicago school budget relies on state pension",
    authorImg: authorImgThree,
    author: "Barry Tone",
    date: "April 02, 2023",
  },
  //blog data
  {
    id: 4,
    image: BlogImg,
    blogTag: "Art & Design",
    title: "The Challenge Of Global Learning In Public Education",
    authorImg: authorImg,
    author: "Jim Séchen",
    date: "April 02, 2023",
  },
  {
    id: 5,
    image: BlogImgTwo,
    blogTag: "Developer",
    blogWrapperClass: "purple",
    title: "Exactly How Technology Can Make Reading Better",
    authorImg: authorImgTwo,
    author: "Barry Tone",
    date: "May 05, 2023",
  },
  {
    id: 6,
    image: BlogImgThree,
    blogTag: "Business",
    blogWrapperClass: "pink",
    title: "New Chicago school budget relies on state pension",
    authorImg: authorImgThree,
    author: "Jim Séchen",
    date: "Jun 01, 2023",
  },
  {
    id: 7,
    image: BlogImgFour,
    blogTag: "UX Design",
    blogWrapperClass: "green",
    title: "Google Ads certifications: Are they worth it?",
    authorImg: authorImg,
    author: "Barry Tone",
    date: "July 06, 2023",
  },
  {
    id: 8,
    image: BlogImgFive,
    blogTag: "UX Design",
    blogWrapperClass: "orange",
    title: "14 Facebook Ad Examples for Ad Creative Inspiration",
    authorImg: authorImgTwo,
    author: "Jim Séchen",
    date: "July 06, 2023",
  },
  {
    id: 9,
    image: BlogImgSix,
    blogTag: "Marketing",
    blogWrapperClass: "blue",
    title: "How to manage Facebook ads for clients the right way",
    authorImg: authorImgThree,
    author: "Barry Tone",
    date: "July 06, 2023",
  },
  //blog recent post data
  {
    id: 10,
    image: BlogImgFour,
    blogTag: "Marketing",
    blogWrapperClass: "blue",
    title: "The Importance Intrinsic Motivation.",
    authorImg: authorImgThree,
    author: "Barry Tone",
    date: "October 15, 2021",
  },
  {
    id: 11,
    image: BlogImgFive,
    blogTag: "Art & Design",
    title: "A Better Alternative To Grading Student.",
    authorImg: authorImg,
    author: "Jim Séchen",
    date: "May 05, 2023",
  },
  {
    id: 12,
    image: BlogImgSix,
    blogTag: "Developer",
    blogWrapperClass: "purple",
    title: "Strategic Social Media & Evolution of Visual",
    authorImg: authorImgTwo,
    author: "Barry Tone",
    date: "October 15, 2021",
  },
  //blog details related course data
  {
    id: 13,
    image: BlogImg,
    blogTag: "Art & Design",
    title: "The Challenge Of Global Learning In Public Education",
    authorImg: authorImg,
    author: "Jim Séchen",
    date: "April 02, 2023",
  },
  {
    id: 14,
    image: BlogImgTwo,
    blogTag: "Developer",
    blogWrapperClass: "purple",
    title: "Exactly How Technology Can Make Reading Better",
    authorImg: authorImgTwo,
    author: "Barry Tone",
    date: "May 05, 2023",
  },
];
export default blog_data;
