import "./counter.css";
import useCounter from "../../hooks/useCounter";

const Counter = () => {
  const { count, incrementByCount } = useCounter(0, 3);

  return (
    <div className="card">
      <h1 data-testid="counter" className="card__title">
        {count}
      </h1>
      <button
        data-testid="incrementButton"
        onClick={() => {
          incrementByCount(3);
        }}
        className="card__action"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
