import Link from "next/link";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="contact__info-item d-flex align-items-start mb-35">
      <div className="contact__info-icon mr-15">
        <svg className="call" viewBox="0 0 24 24">
          <path
            className="st0"
            d="M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z"
          />
        </svg>
      </div>
      <div className="contact__info-text">
        <h4>Phone</h4>
        <p>
          <Link href="tel:+(426)-742-26-44">+(426) 742 26 44</Link>
        </p>
        <p>
          <Link href="tel:+(224)-762-442-32">+(224) 762 442 32</Link>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
