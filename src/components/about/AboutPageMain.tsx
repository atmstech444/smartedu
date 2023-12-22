"use client";
import React from "react";
import Image from "next/image";
import AboutSection from "./AboutSection";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import YellowBg from "../../../public/assets/img/shape/yellow-bg-2.png";
import AboutImage1 from "../../../public/assets/img/about/about.jpg";
import AboutImage2 from "../../../public/assets/img/about/about-2.jpg";

const AboutPageMain = () => {
  return (
    <div className="container">
      {/* <Breadcrumb title="ჩვენ შესახებ" /> */}
      <AboutSection aboutImage={AboutImage1}>
        <h2 className="section__title">
          მიაღწიე მიზნებს <br />
          <span className="yellow-bg-big">
            Smart Education-თან <Image src={YellowBg} style={{ width: "auto", height: "auto" }} alt="img not found" />
          </span>{" "}
          ერთად
        </h2>
        <div>
          <p className="mt-25">
            Smart Education-ში ჩვენ გვჯერა, რომ სწავლა უნდა იყოს ხელმისაწვდომი, საინტერესო და სახალისო. სწორედ ამიტომ, ჩვენ გვაქვს მისია, გავხადოთ არაფორმალური განათლება ხელმისაწვდომი ყველასთვის, მიუხედავად მათი ასაკისა, წარმომავლობისა თუ
            მდებარეობისა.
          </p>
          <p className="mt-5">
            {" "}
            ჩვენი კომპანია გთავაზობთ არაფორმალური საგანმანათლებლო რესურსების მთელ რიგს, მათ შორის ონლაინ კურსებს, სემინარებს, ვებინარებს და ელექტრონულ წიგნებს. თუ ხართ დაინტერესებული ახალი უნარ-ჩვევების შეძენით, ახალი თემის შესწავლით ან არსებული
            ცოდნის გაუმჯობესებით, თქვენს გვერდით გვიგულეთ.
          </p>
        </div>
      </AboutSection>
      <AboutSection aboutImage={AboutImage2}>
        <h2 className="section__title">
          მიიღე სასურველი <br />
          <span className="yellow-bg-big">
            შედეგი ჩვენთან <Image src={YellowBg} style={{ width: "auto", height: "auto" }} alt="img not found" />
          </span>{" "}
          ერთად
        </h2>
        <p className="mt-10">
          ჩვენი გუნდი შედგება, როგორც დამწყები, ასევე გამოცდილი პედაგოგებისგან, საგნის ექსპერტებისგან და ტექნიკური ენთუზიასტებისაგან, რომლებიც მზად არიან შექმნან მაღალი ხარისხის, მიმზიდველი საგანმანათლებლო მასალები. ჩვენ ვიყენებთ უახლეს ტექნოლოგიებსა
          და პედაგოგიურ ტექნიკას, რათა სწავლა უფრო ინტერაქტიული, პერსონალიზებული და ეფექტური გავხადოთ.{" "}
        </p>
        <p className="mt-5">
          {" "}
          Smart Education-ში ჩვენ გვჯერა, რომ ყველას აქვს პოტენციალი, ცხოვრების ნებისმიერ ეტაპზე გაიღრმავოს ცოდნა ან სულაც ახალ დარგს დაეუფლოს. სწორედ ამიტომ, ჩვენ მზად ვართ შევქმნათ სასწავლო საზოგადოება, რომელიც იქნება დამხმარე, ინკლუზიური და
          მრავალფეროვანი. შემოგვიერთდით ჩვენს მოგზაურობაში, რათა გავხადოთ განათლება უფრო “ჭკვიანი”, ხელმისაწვდომი და უფრო სახალისო ყველასთვის.
        </p>
      </AboutSection>

      {/* <BrandWithNoSSR /> */}
      {/* <TestimonialSlider /> */}
      {/* <WhyChoose /> */}
      {/* <CounterSection /> */}
      {/* <BannerSection /> */}
    </div>
  );
};

export default AboutPageMain;
