import React from "react";
import YellowBg from "../../../public/assets/img/shape/yellow-bg.png";
import Image from "next/image";
import { counterType } from "@/interFace/interFace";
import CounterIconOne from "@/svg/counter-icon-one";
import CounterIconTwo from "@/svg/counter-icon-two";
import CounterIconThere from "@/svg/counter-icon-there";
import CounterIconFour from "@/svg/counter-icon-four";
import CountUpContent from "../common/counter/CountUpContent";

const CounterSection = () => {
  const counter_data: counterType[] = [
    {
      id: 1,
      countIcon: CounterIconOne,
      wrapperClass:
        "col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 col-md-3 offset-md-0 col-sm-5 offset-sm-2",
      counterItemClass: "counter__item mb-30",
      counterIconClass: "counter__icon user mb-15",
      countNum: 345421,
      countTitle: "Students Enrolled",
      countPlus: "+",
    },
    {
      id: 2,
      countIcon: CounterIconTwo,
      wrapperClass: "col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-5",
      counterItemClass: "counter__item counter__pl-80 mb-30",
      counterIconClass: "counter__icon book mb-15",
      countNum: 2485,
      countTitle: "Total Courses",
      countPlus: "+",
    },
    {
      id: 3,
      countIcon: CounterIconThere,
      wrapperClass:
        "col-xxl-2 offset-xxl-0 col-xl-3 offset-xl-0 col-lg-3 offset-lg-0 col-md-3 offset-md-0 col-sm-5 offset-sm-2",
      counterItemClass: "counter__item counter__pl-34 mb-30",
      counterIconClass: "counter__icon graduate mb-15",
      countNum: 24085,
      countTitle: "Online Learners",
      countPlus: "+",
    },
    {
      id: 4,
      countIcon: CounterIconFour,
      wrapperClass:
        "col-xxl-2 offset-xxl-1 col-xl-3 col-lg-3 col-md-3 col-sm-5",
      counterItemClass: "counter__item mb-30",
      counterIconClass: "counter__icon globe mb-15",
      countNum: 2020,
      countTitle: "Foreign Followers",
      countPlus: "+",
    },
  ];
  return (
    <section className="counter__area pt-145 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 offset-xl-3 col-xl-6 offset-xl-3">
            <div className="section__title-wrapper text-center mb-60">
              <h2 className="section__title">
                We are{" "}
                <span className="yellow-bg yellow-bg-big">
                  Proud
                  <Image
                    src={YellowBg}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />
                </span>
              </h2>
              <p>
                You {`don't`} have to struggle alone, {`you've`} got our
                assistance and help.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {counter_data.map((item) => (
            <div key={item.id} className={item.wrapperClass}>
              <div className={item.counterItemClass}>
                <div className={item.counterIconClass}>
                  {item.countIcon && <item.countIcon />}
                </div>
                <div className="counter__content">
                  <h4>
                    <span className="counter">
                      <CountUpContent number={item.countNum}></CountUpContent>{" "}
                    </span>
                  </h4>
                  <p>Students Enrolled</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
