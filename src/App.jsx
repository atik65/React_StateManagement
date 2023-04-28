import { increment, decrement } from "./redux_core/actions/count_actions";
import {
  add_history,
  clear_history,
} from "./redux_core/actions/history_actions";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { count_constants } from "./redux_core/constants/count_constants";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const incrementHandler = () => {
    dispatch(increment(1));
    dispatch(
      add_history({
        type: count_constants.INCREMENT,
        message: "Count Increased by 1",
      })
    );
  };
  const decrementHandler = () => {
    dispatch(decrement(1));
    dispatch(
      add_history({
        type: count_constants.DECREMENT,
        message: "Count Decreased by 1",
      })
    );
  };

  const clearHistoryHandler = () => {
    dispatch(clear_history());
  };

  return (
    <>
      <h1>Vite + React (Redux core)</h1>
      <div className="card">
        <button onClick={() => incrementHandler()}>Increment</button>
        <p> count is {state.count.value}</p>
        <button onClick={() => decrementHandler()}>Decrement</button>
      </div>
      <h2 className="read-the-docs">History</h2>
      <button onClick={clearHistoryHandler}> Clear History </button>
      <ul>
        {state.history.map((his, i) => {
          return (
            <li key={i}>{`${his.type} - ${his.message} - ${his.time}`}</li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
