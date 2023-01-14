import { useState } from "react";
import "../assets/styles/Counter.css";
export function Counter() {
  const [count, setCount] = useState(0);
  const handleIncreaseCount = () => setCount(count + 1);
  const handleDecreaseCount = () => setCount(count - 1);
  return (
    <>
      <h2 className="text-center">N 9 Simple counter exercise</h2>
      <h3
        className={`ms-2 me-2 counter__text  text-center ${getStyleCount(
          count
        )}`}
      >
        {count}
      </h3>
      <div className="d-flex justify-content-center mt-3">
        <button className="counter__button" onClick={handleIncreaseCount}>
          +
        </button>
        <button className="ms-3 counter__button" onClick={handleDecreaseCount}>
          -
        </button>
      </div>
    </>
  );
}

function getStyleCount(count) {
  let style = null;
  if (count > 0) {
    style = "counter--positive";
  } else if (count < 0) {
    style = "counter--negative";
  } else {
    style = "counter--zero";
  }
  return style;
}
