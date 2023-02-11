import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useCallback } from "react";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/ImageSlider.css";

export function ImageSlider({ sources }) {
  const [indexSelected, setIndex] = useState(0);
  const indexChange = useCallback(
    (index) =>
      (index >= 0 && index < sources.length && setIndex(index)) ||
      (index >= 0 && index === sources.length && setIndex(0)) ||
      (index < 0 && setIndex(sources.length -1)),
    [sources.length]
  );
  return (
    <div className="image-slider__container">
      {sources.map((source, index) => (
        <img
          key={index}
          src={`${process.env.PUBLIC_URL}/${source}`}
          alt=""
          className={`image-slider__img ${
            index === indexSelected
              ? `image-slider__img--active-anim`
              : "d-none"
          }`}
        ></img>
      ))}
      <ButtonChooseImages
        indexChange={indexChange}
        actualIndex={indexSelected}
      ></ButtonChooseImages>
      <SelectionIndexBottom
        sources={sources}
        indexSelected={indexSelected}
        indexChange={indexChange}
      ></SelectionIndexBottom>
    </div>
  );
}

function ButtonChooseImages({ indexChange, actualIndex }) {
  return (
    <div className="image-slider__buttons-content">
      <button
        className="image-slider__buttons"
        onClick={() => indexChange(actualIndex - 1)}
      >
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
      </button>
      <button
        className="image-slider__buttons"
        onClick={() => indexChange(actualIndex + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
      </button>
    </div>
  );
}

function SelectionIndexBottom({ sources, indexSelected, indexChange }) {
  return (
    <div className="image-slider__content-index">
      {sources.map((_, index) => (
        <button
          key={index}
          onClick={() => indexChange(index)}
          className={`image-slider__index-image ${
            index === indexSelected ? "image-slider__index-image--selected" : ""
          }`}
        ></button>
      ))}
    </div>
  );
}
