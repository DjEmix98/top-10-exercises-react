import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, handleOutside) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleOutside();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleOutside]);
}

/**
 * Component that alerts if you click outside of it
 */
export function useDetectClickOutside(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.handleOutside);

  return <div ref={wrapperRef}>{props.children}</div>;
}
