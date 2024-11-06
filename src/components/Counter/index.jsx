import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1 data-testid="counter">Count: {count}</h1>
      <button data-testid="incrementButton" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
