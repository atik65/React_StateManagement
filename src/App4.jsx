import "./App.css";
import useCounterStore from "./zustand/stores/useCounterStore";
import useHistoryStore from "./zustand/stores/useHistoryStore";

function App4() {
  const { count, increment, decrement } = useCounterStore((state) => state);
  const { history, addHistory, clearHistory } = useHistoryStore(
    (state) => state
  );

  const incrementHandler = () => {
    increment(1);
    addHistory({
      type: "INCREMENT",
      message: "Incremented by 1",
    });
  };
  const decrementHandler = () => {
    decrement(1);
    addHistory({
      type: "DECREMENT",
      message: count > 0 ? "decremented by 1" : "Not possible",
    });
  };

  const clearHistoryHandler = () => {
    clearHistory();
  };

  return (
    <>
      <h1>Vite + React (Zustand)</h1>
      <div className="card">
        <button onClick={() => incrementHandler()}>Increment</button>
        <p> count is {count}</p>
        <button onClick={() => decrementHandler()}>Decrement</button>
      </div>
      <h2 className="read-the-docs">History</h2>
      <button onClick={clearHistoryHandler}> Clear History </button>
      <ul>
        {history.map((his, i) => {
          return (
            <li key={i}>{`${his.type} - ${his.message} - ${his.time}`}</li>
          );
        })}
      </ul>
    </>
  );
}

export default App4;
