import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const handleIncreaseCount = () => setCount(count + 1);
  const handleDecreaseCount = () => setCount(count - 1);
  return (
    <>
      <h2 className="text-center">N 9 Simple counter exercise</h2>
      <div className="d-flex justify-content-center mt-3">
        <button onClick={handleIncreaseCount}>+</button>
        <span className="ms-2 me-2">{count}</span>
        <button onClick={handleDecreaseCount}>-</button>
      </div>
    </>
  );
}
