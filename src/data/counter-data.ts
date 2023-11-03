import { counterType } from "@/interFace/interFace";
import CounterIconFour from "@/svg/counter-icon-four";
import CounterIconOne from "@/svg/counter-icon-one";
import CounterIconThere from "@/svg/counter-icon-there";
import CounterIconTwo from "@/svg/counter-icon-two";

const counter_data: counterType[] = [
  {
    id: 1,
    countIcon: CounterIconOne,
    countNum: 345421,
    countTitle: "Students Enrolled",
    countPlus: "+",
  },
  {
    id: 2,
    countIcon: CounterIconTwo,
    countNum: 2485,
    countTitle: "Total Courses",
    countPlus: "+",
  },
  {
    id: 3,
    countIcon: CounterIconThere,
    countNum: 24085,
    countTitle: "Online Learners",
    countPlus: "+",
  },
  {
    id: 4,
    countIcon: CounterIconFour,
    countNum: 2020,
    countTitle: "Foreign Followers",
    countPlus: "+",
  },
  //about counter data
];

export default counter_data;
