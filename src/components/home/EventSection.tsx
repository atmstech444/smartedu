import { event_data } from "@/data/event-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import YellowBg from "../../../public/assets/img/shape/yellow-bg.png";
import EventShape from "../../../public/assets/img/events/events-shape.png";

const EventSection = () => {
  return (
    <section className="events__area pt-115 pb-120 p-relative fix">
      <div className="events__shape">
        <Image
          className="events-1-shape"
          src={EventShape}
          style={{ width: "auto", height: "auto" }}
          alt="image not found"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-4 offset-xxl-4">
            <div className="section__title-wrapper mb-60 text-center">
              <h2 className="section__title">
                Current{" "}
                <span className="yellow-bg yellow-bg-big">
                  Events
                  <Image
                    src={YellowBg}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />
                </span>
              </h2>
              <p>We found 13 events available for you.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {event_data.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1"
            >
              <div className="events__item mb-10 hover__active">
                <div className="events__item-inner d-sm-flex align-items-center justify-content-between white-bg">
                  <div className="events__content">
                    <div className="events__meta">
                      <span>{item.date}</span>
                      <span>{item.time}</span>
                      <span>{item.place}</span>
                    </div>
                    <h3 className="events__title">
                      <Link href={`/event-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="events__more">
                    <Link
                      href={`/event-details/${item.id}`}
                      className="link-btn"
                    >
                      View More
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
