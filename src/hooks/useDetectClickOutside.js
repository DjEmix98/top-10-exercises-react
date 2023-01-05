import React, { useRef, useEffect } from "react";

function _useDetectClickOutside(ref, handleOutside) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleOutside();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, handleOutside]);
}

/**
 * @param children jsx childrens to outside
 * @callback handleOutside params to capture outside event
 */
export function useDetectClickOutside(props) {
  const wrapperRef = useRef(null);
  _useDetectClickOutside(wrapperRef, props.handleOutside);

  return <div ref={wrapperRef}>{props.children}</div>;
}
