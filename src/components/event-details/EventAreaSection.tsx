import Link from "next/link";
import React from "react";
import EventSidebar from "./EventSidebar";
import EventImage from "../../../public/assets/img/events/event-1.jpg";
import Image from "next/image";

const EventAreaSection = () => {
  return (
    <section className="event__area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="events__wrapper">
              <div className="events__thumb mb-35 w-img">
                <Image
                  src={EventImage}
                  style={{ width: "100%", height: "auto" }}
                  alt="image not found"
                />
              </div>
              <div className="events__details mb-35">
                <h3>Description</h3>
                <p>
                  He legged it up the kyver have it mush super me old mucker
                  cheeky naff that are you taking the piss, blow off down the
                  pub bite your arm off the wireless boot cor blimey guvnor
                  happy days bender what a load of rubbish, say pardon me horse
                  play spiffing Why car boot gosh bubble and squeak. Cheers
                  Richard bugger show off show off pick your nose and blow off
                  get stuffed mate chancer in my flat loo, bevvy amongst
                  hunky-dory bender bubble and squeak me old mucker vagabond,
                  barmy spend a penny chimney pot young delinquent bum bag the
                  {`bee's`} knees chap, gosh nice one knees up the wireless
                  Charles such a fibber. Mush barmy bleeding Jeffrey pardon me
                  barney grub loo cup of tea bubble and squeak bugger all mate
                  say, I bloke matie boy tickety-boo give us a bell up the duff
                  bugger lurgy wind up I {`don't`} want no agro.
                </p>
              </div>
              <div className="events__allow mb-40">
                <h3>This event will allow participants to:</h3>
                <ul>
                  <li>
                    <i className="fal fa-check"></i> {`Business's`} managers,
                    leaders
                  </li>
                  <li>
                    <i className="fal fa-check"></i> Downloadable lectures, code
                    and design assets for all projects
                  </li>
                  <li>
                    <i className="fal fa-check"></i> Anyone who is finding a
                    chance to get the promotion
                  </li>
                </ul>
              </div>
              <div className="events__tag">
                <span>
                  <i className="fal fa-tag"></i>
                </span>
                <Link href="#">Big data, </Link>
                <Link href="#">Data analysis,</Link>
                <Link href="#">Data modeling</Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <EventSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAreaSection;
