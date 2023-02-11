import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/ImageSlider.css";

export function ImageSlider({ sources }) {
  const [indexSelected, setIndex] = useState(0);
  console.log(sources[indexSelected]);
  return (
    <div className="image-slider__container">
      <img
        src={require(`../assets/images/${sources[indexSelected]}`)}
        alt=""
        className="image-slider__img"
      ></img>
      <ButtonChooseImages></ButtonChooseImages>
      <SelectionIndexBottom
        sources={sources}
        indexSelected={indexSelected}
      ></SelectionIndexBottom>
    </div>
  );
}

function ButtonChooseImages() {
  return (
    <div className="image-slider__buttons-content">
      <button className="image-slider__buttons">
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
      </button>
      <button className="image-slider__buttons">
        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
      </button>
    </div>
  );
}

function SelectionIndexBottom({ sources, indexSelected }) {
  return (
    <div className="image-slider__content-index">
      {sources.map((_, index) => (
        <button
          key={index}
          className={`image-slider__index-image ${
            index === indexSelected && "image-slider__index-image--selected"
          }`}
        ></button>
      ))}
    </div>
  );
}
