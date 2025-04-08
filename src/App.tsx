import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="title p-6">
        <h1 className="text-3xl font-semibold capitalize ">
          demo project for frontend project
        </h1>
      </div>
      <div className=" bg-amber-300 w-fit mx-auto ">
        <Button>add me</Button>
      </div>
    </>
  );
}

export default App;
