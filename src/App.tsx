import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { RootState } from "./redux/store";

function App() {
  const despatch = useDispatch();

  const { count } = useSelector((state: RootState) => state.counter);

  const hendleIncrement = () => {
    despatch(increment());
  };
  const hendleDecrement = () => {
    despatch(decrement());
  };
  return (
    <>
      <div className="title p-6">
        <h1 className="text-3xl font-semibold capitalize ">
          demo project for frontend project
        </h1>
      </div>
      <div className=" w-fit mx-auto text-4xl cursor-pointer">
        <button onClick={hendleIncrement}>+</button>
        <div className="m-4 text-4xl font-bold">{count}</div>
        <button onClick={hendleDecrement}>-</button>
      </div>
    </>
  );
}

export default App;
