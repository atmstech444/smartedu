import Link from "next/link";
import React from "react";
import shape1 from "../../../public/assets/img/page-title/page-title-shape-1.png";
import shape2 from "../../../public/assets/img/page-title/page-title-shape-2.png";
import shape3 from "../../../public/assets/img/page-title/page-title-shape-4.png";
import shape4 from "../../../public/assets/img/page-title/page-title-shape-5.png";
import TeacherImage from "../../../public/assets/img/course/teacher/teacher-1.jpg";
import Image from "next/image";
import EventAreaSection from "./EventAreaSection";
import CtaSection from "../home/CtaSection";
import { idType } from "@/interFace/interFace";
import { event_data } from "@/data/event-data";

const EventDetailsMain = ({ id }: idType) => {
  const event: any = event_data.find((item) => item.id == id);
  return (
    <>
      <section className="page__title-area pt-120">
        <div className="page__title-shape">
          <Image
            className="page-title-shape-5 d-none d-sm-block"
            src={shape1}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />

          <Image
            className="page-title-shape-6"
            src={shape2}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
          <Image
            className="page-title-shape-7"
            src={shape3}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
          <Image
            className="page-title-shape-8"
            src={shape4}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-8">
              <div className="page__title-content mb-25 pr-40">
                <span className="page__title-pre purple-bg">Art & Design</span>
                <h5 className="page__title-3">{event?.title}</h5>
              </div>
              <div className="course__meta-2 d-sm-flex mb-30">
                <div className="course__teacher-3 d-flex align-items-center mr-70 mb-30">
                  <div className="course__teacher-thumb-3 mr-15">
                    <Image
                      src={TeacherImage}
                      style={{ width: "auto", height: "auto" }}
                      alt="image not found"
                    />
                  </div>
                  <div className="course__teacher-info-3">
                    <h5>Teacher</h5>
                    <p>
                      <Link href="#">Elon Gated</Link>
                    </p>
                  </div>
                </div>
                <div className="course__update mr-80 mb-30">
                  <h5>Last Update:</h5>
                  <p>{event?.date}</p>
                </div>
                <div className="course__update mb-30">
                  <h5>Location:</h5>
                  <p>{event?.place}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EventAreaSection />
      <CtaSection />
    </>
  );
};

export default EventDetailsMain;
