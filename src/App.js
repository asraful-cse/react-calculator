import React, { useState } from "react";
import "./App.css";
import AllButtons from "./lib/data.json";
const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const positiveNegative = () => {
    setResult((eval(result * -1).toString()));
  };
  const percentage = () => {
    setResult( (eval(result / 100).toString()));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult( alert('An input should be a math symbol! (+, -, *, /, +/-) Please AC button click to try again?'));
    }
  };

  return (
    <>
      <div className="container">
        <from>
          <input type="text" value={result} />
        </from>
        {AllButtons.length > 0 ? (
          <div className="keypad">
            {AllButtons.map((item) => (
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
                  item.functionName === "calculate"
                    ? calculate()
                    : item.functionName === "clear"
                    ? clear()
                    : item.functionName === "percentage"
                    ? percentage()
                    : item.functionName === "positiveNegative"
                    ? positiveNegative()
                    : item.functionName === "handleClick"
                    ? handleClick(item.symbolName)
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
