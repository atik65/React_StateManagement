import { useStoreActions, useStoreState } from "easy-peasy";
import "./App.css";

function App6() {
  const { count, history } = useStoreState((state) => state);
  const { count: countAction, history: historyAction } = useStoreActions(
    (actions) => actions
  );

  const incrementHandler = () => {
    countAction.increment(1);
    historyAction.addHistory({
      type: "INCREMENT",
      message: "Count incremented by 1",
    });
  };
  const decrementHandler = () => {
    countAction.decrement(1);
    historyAction.addHistory({
      type: "DECREMENT",
      message:
        count.value > 0
          ? "Count decremented by 1"
          : "Not possible, can't be negative",
    });
  };

  const clearHistoryHandler = () => {
    historyAction.clearHistory();
  };

  return (
    <>
      <div></div>
      <h1>Vite + React (Easy Peasy)</h1>
      <div className="card">
        <button onClick={() => incrementHandler()}>Increment</button>
        <p> count is {count.value}</p>
        <button onClick={() => decrementHandler()}>Decrement</button>
      </div>
      <h2 className="read-the-docs">History</h2>
      <button onClick={clearHistoryHandler}> Clear History </button>
      <ul>
        {history.items.map((his, i) => {
          return (
            <li key={i}>{`${his.type} - ${his.message} - ${his.time}`}</li>
          );
        })}
      </ul>
    </>
  );
}

export default App6;
