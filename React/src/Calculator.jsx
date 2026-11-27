import React from "react";
import { useState } from "react";
import "./Calculator.css";

function Calculator() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  // Add Input
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear
  const clearScreen = () => {
    setInput("");
    setResult("0");
  };

  // Delete
  const backspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Calculate
  const calculateResult = () => {

    try {

      let finalInput = input

        .replace(/÷/g, "/")
        .replace(/×/g, "*")

        // Trigonometry
        .replace(/sin\(/g, "Math.sin(")
        .replace(/cos\(/g, "Math.cos(")
        .replace(/tan\(/g, "Math.tan(")

        // Advanced Trigonometry
        .replace(/cosec\(/g, "(1/Math.sin(")
        .replace(/sec\(/g, "(1/Math.cos(")
        .replace(/cot\(/g, "(1/Math.tan(");

      const answer = eval(finalInput);

      setResult(answer.toString());

    } catch {

      setResult("Error");

    }
  };

  return (

    <div className="calculator-container">

      {/* Floating Math Symbols */}

      <div className="math-bg">

        <span>π</span>
        <span>√</span>
        <span>∞</span>
        <span>∑</span>
        <span>θ</span>
        <span>sin</span>
        <span>cos</span>
        <span>tan</span>

      </div>

      {/* Calculator */}

      <div className="calculator">

        {/* Display */}

        <div className="display">

          <div className="input-box">
            {input || "0"}
          </div>

          <div className="result-box">
            {result}
          </div>

        </div>

        {/* Small Function Buttons */}

        <div className="small-buttons">

          <button className="mini-btn">x!</button>
          <button className="mini-btn">nCr</button>
          <button className="mini-btn">nPr</button>

          <button
            className="mini-btn"
            onClick={() => handleClick("Math.log10(")}
          >
            log
          </button>

          <button className="mini-btn">ln</button>

          <button
            className="mini-btn"
            onClick={() => handleClick("sin(")}
          >
            sin
          </button>

          <button
            className="mini-btn"
            onClick={() => handleClick("cos(")}
          >
            cos
          </button>

          <button
            className="mini-btn"
            onClick={() => handleClick("tan(")}
          >
            tan
          </button>

          <button
            className="mini-btn"
            onClick={() => handleClick("sec(")}
          >
            sec
          </button>

          <button
            className="mini-btn"
            onClick={() => handleClick("cot(")}
          >
            cot
          </button>

        </div>

        {/* Main Buttons */}

        <div className="buttons">

          {/* Row 1 */}

          <button className="gray-btn" onClick={() => handleClick("(")}>
            (
          </button>

          <button className="gray-btn" onClick={() => handleClick(")")}>
            )
          </button>

          <button className="gray-btn" onClick={() => handleClick("%")}>
            %
          </button>

          <button className="red-btn" onClick={backspace}>
            DEL
          </button>

          <button className="red-btn" onClick={clearScreen}>
            AC
          </button>

          {/* Row 2 */}

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>

          <button
            className="operator-btn"
            onClick={() => handleClick("÷")}
          >
            ÷
          </button>

          <button
            className="operator-btn"
            onClick={() => handleClick("×")}
          >
            ×
          </button>

          {/* Row 3 */}

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>

          <button
            className="operator-btn"
            onClick={() => handleClick("+")}
          >
            +
          </button>

          <button
            className="operator-btn"
            onClick={() => handleClick("-")}
          >
            −
          </button>

          {/* Row 4 */}

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>

          <button
            className="operator-btn"
            onClick={() => handleClick("Math.sqrt(")}
          >
            √
          </button>

          <button
            className="operator-btn"
            onClick={() => handleClick("Math.PI")}
          >
            π
          </button>

          {/* Last Row */}

          <button
            className="zero-btn"
            onClick={() => handleClick("0")}
          >
            0
          </button>

          <button onClick={() => handleClick(".")}>
            .
          </button>

          <button
            className="equal-btn"
            onClick={calculateResult}
          >
            =
          </button>

        </div>

        {/* Footer */}

        <footer>

          <p>
            Name : <strong>Karthik J</strong>
          </p>

          <p>
            Register No : <strong>212225040176</strong>
          </p>

        </footer>

      </div>

    </div>
  );
}

export default Calculator;