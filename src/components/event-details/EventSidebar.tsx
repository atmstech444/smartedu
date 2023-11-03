import EventInfoIcon from "@/svg/event-info-icon";
import Link from "next/link";
import React from "react";
import shape1 from "../../../public/assets/img/events/event-shape-2.png";
import shape2 from "../../../public/assets/img/events/event-shape-3.png";
import sponsorLogo from "../../../public/assets/img/events/sponsor-logo.png";
import Image from "next/image";

const EventSidebar = () => {
  return (
    <div className="events__sidebar pl-70">
      <div className="events__sidebar-widget white-bg mb-20">
        <div className="events__sidebar-shape">
          <Image
            className="events-sidebar-img-2"
            src={shape1}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
          <Image
            className="events-sidebar-img-3"
            src={shape2}
            style={{ width: "auto", height: "auto" }}
            alt="image not found"
          />
        </div>
        <div className="events__info">
          <div className="events__info-meta mb-25 d-flex align-items-center justify-content-between">
            <div className="events__info-price">
              <h5>
                $76.<span>00</span>{" "}
              </h5>
              <h5 className="old-price">$142.00</h5>
            </div>
            <div className="events__info-discount">
              <span>68% OFF</span>
            </div>
          </div>
          <div className="events__info-content mb-35">
            <ul>
              <li className="d-flex align-items-center">
                <div className="events__info-icon">
                  <EventInfoIcon />
                </div>
                <div className="events__info-item">
                  <h5>
                    <span>End: </span> July 26, 2023 12:30 am
                  </h5>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="events__info-icon">
                  <EventInfoIcon />
                </div>
                <div className="events__info-item">
                  <h5>
                    <span>Time:</span> 10:45 AM-01:30 PM
                  </h5>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="events__info-icon">
                  <EventInfoIcon />
                </div>
                <div className="events__info-item">
                  <h5>
                    <span>Venue: </span> New York, TX 82760, US
                  </h5>
                </div>
              </li>
            </ul>
          </div>
          <div className="events__join-btn">
            <Link href="/contact" className="e-btn e-btn-7 w-100">
              Enroll <i className="far fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="events__sidebar-widget white-bg">
        <div className="events__sponsor">
          <h3 className="events__sponsor-title">Sponsors</h3>
          <div className="events__sponsor-thumb mb-35">
            <Image
              src={sponsorLogo}
              style={{ width: "auto", height: "auto" }}
              alt="image not found"
            />
          </div>
          <div className="events__sponsor-info">
            <h3>Thomas R. Toe</h3>
            <h4>
              Email: <span>support@educal.com</span>
            </h4>
            <div className="events__social d-xl-flex align-items-center">
              <h4>Share:</h4>
              <ul>
                <li>
                  <Link href="https://www.facebook.com/" className="fb">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/" className="tw">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.pinterest.com/" className="pin">
                    <i className="fab fa-pinterest"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSidebar;
