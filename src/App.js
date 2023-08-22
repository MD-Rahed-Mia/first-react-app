import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {

  const [num, setNum] = useState(0);

  const dec = () => {
    setNum(num - 1);
  };

  const inc = () => {
    setNum(num + 1);
  };


  return (
    <div className="container" id="container">
      <h1 className="headingText">Counter app</h1>
      <h1>{num}</h1>
      <button className="btn" onClick={dec}>
        Increment
      </button>
      <button className="btn" onClick={inc}>
        Decrement
      </button>
    </div>
  );
}

export default App;
