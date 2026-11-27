# Ex04 Simple Calculator - React Project
## Date:27-11-2026
## Name :  Karthik J 
## Reg No : 212225040176

## AIM
To  develop a Simple Calculator using React.js with clean and responsive design, ensuring a smooth user experience across different screen sizes.

## ALGORITHM
### STEP 1
Create a React App.

### STEP 2
Open a terminal and run:
  <ul><li>npx create-react-app simple-calculator</li>
  <li>cd simple-calculator</li>
  <li>npm start</li></ul>

### STEP 3
Inside the src/ folder, create a new file Calculator.js and define the basic structure.

### STEP 4
Plan the UI: Display screen, number buttons (0-9), operators (+, -, *, /), clear (C), and equal (=).

### STEP 5
Create a new file Calculator.css in src/ and add the styling.

### STEP 6
Open src/App.js and modify it.

### STEP 7
Start the development server.
  npm start

### STEP 8
Open http://localhost:3000/ in the browser.

### STEP 9
Test the calculator by entering numbers and operations.

### STEP 10
Fix styling issues and refine content placement.

### STEP 11
Deploy the website.

### STEP 12
Upload to GitHub Pages for free hosting.

## PROGRAM

## Calculator.jsx
```
import React from "react";
import { useState } from "react";
import "./calculator.css";

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
            Name : <strong>L Ganesh kanna</strong>
          </p>

          <p>
            Register No : <strong>212225230072</strong>
          </p>

        </footer>

      </div>

    </div>
  );
}

export default Calculator;
```

## cal.css
```
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:"Segoe UI",sans-serif;
}

/* Attractive Math Theme Background */

body{

  background:
  linear-gradient(
    rgba(2,6,23,0.92),
    rgba(15,23,42,0.95)
  ),

  url("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop");

  background-size:cover;
  background-position:center;
  background-attachment:fixed;

  overflow-x:hidden;
}

/* Main Container */

.calculator-container{

  min-height:100vh;

  display:flex;

  justify-content:center;

  align-items:center;

  padding:20px;

  position:relative;
}

/* Floating Math Symbols */

.math-bg span{

  position:absolute;

  color:rgba(255,255,255,0.08);

  font-size:80px;

  font-weight:bold;

  animation:float 8s infinite ease-in-out;
}

.math-bg span:nth-child(1){
  top:10%;
  left:10%;
}

.math-bg span:nth-child(2){
  top:20%;
  right:10%;
}

.math-bg span:nth-child(3){
  bottom:15%;
  left:12%;
}

.math-bg span:nth-child(4){
  bottom:10%;
  right:15%;
}

.math-bg span:nth-child(5){
  top:50%;
  left:5%;
}

.math-bg span:nth-child(6){
  top:65%;
  right:8%;
}

.math-bg span:nth-child(7){
  top:35%;
  left:22%;
}

.math-bg span:nth-child(8){
  bottom:25%;
  right:20%;
}

/* Floating Animation */

@keyframes float{

  0%{
    transform:translateY(0px);
  }

  50%{
    transform:translateY(-20px);
  }

  100%{
    transform:translateY(0px);
  }
}

/* Calculator */

.calculator{

  width:430px;

  background:rgba(17,24,39,0.95);

  backdrop-filter:blur(12px);

  border-radius:25px;

  padding:20px;

  box-shadow:
  0 10px 35px rgba(0,0,0,0.6);

  border:1px solid rgba(255,255,255,0.08);

  position:relative;

  z-index:10;
}

/* Display */

.display{

  background:#dfe7d8;

  border-radius:14px;

  padding:18px;

  margin-bottom:18px;

  min-height:120px;

  display:flex;

  flex-direction:column;

  justify-content:flex-end;

  align-items:flex-end;
}

.input-box{

  color:#444;

  font-size:24px;
}

.result-box{

  color:#111;

  font-size:48px;

  font-weight:bold;
}

/* Small Buttons */

.small-buttons{

  display:grid;

  grid-template-columns:repeat(5,1fr);

  gap:8px;

  margin-bottom:15px;
}

.mini-btn{

  height:38px;

  border:none;

  border-radius:8px;

  background:#1e293b;

  color:#facc15;

  font-size:14px;

  font-weight:bold;

  cursor:pointer;

  transition:0.2s;
}

.mini-btn:hover{

  filter:brightness(1.1);
}

.mini-btn:active{

  transform:scale(0.92);

  background:#000;
}

/* Main Buttons */

.buttons{

  display:grid;

  grid-template-columns:repeat(5,1fr);

  gap:10px;
}

/* Buttons */

button{

  height:58px;

  border:none;

  border-radius:12px;

  background:#374151;

  color:white;

  font-size:24px;

  font-weight:bold;

  cursor:pointer;

  transition:0.2s ease;
}

/* Hover */

button:hover{

  filter:brightness(1.08);
}

/* Touch Effect */

button:active{

  transform:scale(0.92);

  background:#020617;
}

/* Gray Buttons */

.gray-btn{

  background:#6b7280;
}

/* Red Buttons */

.red-btn{

  background:#ef4444;
}

.red-btn:active{

  background:#7f1d1d;
}

/* Operator Buttons */

.operator-btn{

  background:#60a5fa;

  color:#111827;
}

.operator-btn:active{

  background:#1d4ed8;

  color:white;
}

/* Equal Button */

.equal-btn{

  background:#22c55e;
}

.equal-btn:active{

  background:#166534;
}

/* Zero Button */

.zero-btn{

  grid-column:span 2;
}

/* Footer */

footer{

  margin-top:20px;

  text-align:center;

  color:#e2e8f0;

  font-size:14px;
}

footer strong{

  color:#38bdf8;
}

/* Mobile Responsive */

@media(max-width:500px){

  .calculator{
    width:100%;
  }

  button{
    height:52px;
    font-size:20px;
  }

  .mini-btn{
    font-size:12px;
  }

  .math-bg span{
    font-size:45px;
  }
}
```



## OUTPUT

![alt text](<Screenshot 2026-11-27 153726.png>)


![alt text](<Screenshot 2026-11-27 153750.png>)


## RESULT
The program for developing a simple calculator in React.js is executed successfully.
