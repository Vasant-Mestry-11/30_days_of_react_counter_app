import { useState } from "react";

const useCounter = (initialCount = 0, incrementCount) => {
  const [count, setCount] = useState(initialCount);

  const incrementByCount = () => {
    setCount((prevCount) => prevCount + incrementCount);
  };

  return { count, incrementByCount };
};

export default useCounter;
