import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1 data-testid="counter" className="card__title">
        {count}
      </h1>
      <button
        data-testid="incrementButton"
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
        }}
        className="card__action"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
