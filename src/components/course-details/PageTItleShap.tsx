import React from "react";
import shape1 from "../../../public/assets/img/page-title/page-title-shape-1.png";
import shape2 from "../../../public/assets/img/page-title/page-title-shape-6.png";
import shape3 from "../../../public/assets/img/page-title/page-title-shape-4.png";
import Image from "next/image";

const PageTItleShape = () => {
  return (
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
    </div>
  );
};

export default PageTItleShape;
