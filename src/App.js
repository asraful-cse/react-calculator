import React, { useState } from "react";
import "./App.css";
import buttons from "./lib/data.json";
const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    // setResult(result.slice(0, result.length -1));
    setResult(result.slice(0, -1));
  };

  const positiveNegative = () => {
    setResult(result * -1);
  };
  const percentage = () => {
    setResult(result / 100);
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("ERROR");
    }
  };

  return (
    <>
      <div className="container">
        <from>
          <input type="text" value={result} />
        </from>
        {buttons.length > 0 ? (
          <div className="keypad">
            {buttons.map((item) => (
              <button
                className={`${item.symbolName === "0" ? "result" : ""} ${
                  item.symbolName === "/" ||
                  item.symbolName === "*" ||
                  item.symbolName === "+" ||
                  item.symbolName === "-" ||
                  item.symbolName === "="
                    ? "highlight"
                    : ""
                }`}
                onClick={() =>
                  item.functionName === "clear"
                    ? clear()
                    : item.functionName === "positiveNegative"
                    ? positiveNegative()
                    : item.functionName === "handleClick"
                    ? handleClick(item.symbolName)
                    : item.functionName === "percentage"
                    ? percentage()
                    : item.functionName === "calculate"
                    ? calculate()
                    : null
                }
                id={item.id}
              >
                {item.symbolName}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default App;
