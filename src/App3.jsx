import "./App.css";
import { decrement, increment } from "./redux_toolkit/slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { addHistory, clearHistory } from "./redux_toolkit/slices/historySlice";

function App3() {
  const { value } = useSelector((state) => state.counter);
  const { items } = useSelector((state) => state.history);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment(1));
    dispatch(addHistory({ type: "INCREMENT", message: "Incremented by 1" }));
  };
  const decrementHandler = () => {
    dispatch(decrement(1));
    dispatch(
      addHistory({
        type: "DECREMENT",
        message: value > 0 ? "Decremented by 1" : "Not Possible",
      })
    );
  };

  const clearHistoryHandler = () => {
    dispatch(clearHistory());
  };

  return (
    <>
      <h1>Vite + React (Redux toolkit)</h1>
      <div className="card">
        <button onClick={() => incrementHandler()}>Increment</button>
        <p> count is {value}</p>
        <button onClick={() => decrementHandler()}>Decrement</button>
      </div>
      <h2 className="read-the-docs">History</h2>
      <button onClick={clearHistoryHandler}> Clear History </button>
      <ul>
        {items.map((his, i) => {
          return (
            <li key={i}>{`${his.type} - ${his.message} - ${his.time}`}</li>
          );
        })}
      </ul>
    </>
  );
}

export default App3;
