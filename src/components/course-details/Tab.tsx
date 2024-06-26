import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const Tab = ({ index, item }: { index: number; item: { title: string; descriptions: { description: string }[] } }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="accordion" id="course__accordion">
        <div className="accordion-item mb-50 syllabus-item-container">
          <h2 className="accordion-header syllabus-title" style={{ display: "flex", justifyContent: "space-between" }} id={`week-${index}`} onClick={() => setIsOpen((prevState) => !prevState)}>
            {item.title}
            <button className={`${isOpen ? "" : "rotate"}`} style={{ background: "transparent" }} type="button">
              <FaArrowUp />
            </button>
          </h2>
          {isOpen && (
            <div id={`week-${index}-content`} className="accordion-collapse " aria-labelledby={`week-${index}`} data-bs-parent="#course__accordion">
              <DescriptionDiv className="accordion-body">
                {item.descriptions.map((description) => {
                  return (
                    <div key={`des-${uuidv4()}`} className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                      <div className="course__curriculum-info">
                        <h3>
                          <span>{description.description}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </DescriptionDiv>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const DescriptionDiv = styled.div`
  &:hover {
    cursor: auto;
  }
`;

export default Tab;
