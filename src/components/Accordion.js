import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useCallback } from "react";
import "../assets/styles/Accordion.css";
export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleTitleClick = useCallback(
    (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    },
    [activeIndex]
  );

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={item.id}>
          <div
            onClick={() => handleTitleClick(index)}
            className={`d-flex justify-content-between accordion__item pt-4 pb-4 ${
              activeIndex === index && "accordion--active"
            }`}
          >
            <h5 className="ps-3">{item.title}</h5>
            <div className="accordion__icon pe-4">
              {activeIndex !== index ? (
                <FontAwesomeIcon icon={faChevronRight} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </div>
          </div>
          <div
            className={
              activeIndex !== index ? "accordion__item--hide" : "ps-3 pb-4 pt-4"
            }
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
