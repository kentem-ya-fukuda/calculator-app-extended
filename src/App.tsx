import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [result, setResult] = useState("");
  const [memory, setMemory] = useState(0);
  const [isResultShown, setIsResultShown] = useState(false);
  const [isMemorySet, setIsMemorySet] = useState(false);

  const handleClick = (button: string) => {
    if (isResultShown && button !== "=") {
      // 計算結果が表示された後に別のボタンが押された場合、表示内容をクリア
      setResult("");
      setIsResultShown(false); // 追加
    }

    if (button === "=") {
      try {
        if (result === "") {
          return;
        }
        const evalResult = eval(result);
        setResult(String(evalResult));
        setIsResultShown(true); // 計算結果が表示されたことを追跡
      } catch (error) {
        setResult("Error");
      }
    } else if (button === "C") {
      reset();
    } else if (button === "CA") {
      reset();
      clearMemory();
    } else if (button === "M+") {
      addToMemory();
    } else if (button === "M-") {
      subtractFromMemory();
    } else if (button === "RM") {
      setResult(memory.toString());
    } else if (button === "CM") {
      clearMemory();
    } else {
      setResult((prev) => prev + button);
    }
  };

  const reset = () => {
    setResult("");
    setIsResultShown(false); // 追加
    setIsMemorySet(false); // メモリの追跡をリセット
  };

  const addToMemory = () => {
    const evalResult = eval(result);
    setResult(String(evalResult));
    const currentResult = parseFloat(evalResult);
    if (!isNaN(currentResult)) {
      setMemory((prev) => prev + currentResult);
      setIsResultShown(true); // 計算結果が表示されたことを追跡
      setIsMemorySet(true); // メモリが設定されたことを追跡
    }
  };

  const subtractFromMemory = () => {
    const evalResult = eval(result);
    setResult(String(evalResult));
    const currentResult = parseFloat(evalResult);
    if (!isNaN(currentResult)) {
      setMemory((prev) => prev - currentResult);
      setIsResultShown(true); // 計算結果が表示されたことを追跡
      setIsMemorySet(true); // メモリが設定されたことを追跡
    }
  };

  const clearMemory = () => {
    setMemory(0);
    setIsMemorySet(false); // メモリの追跡をリセット
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display-container">
          <div className="memory">{isMemorySet && "M"}</div>
          <div className="display">{result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("CM")}>CM</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("RM")}>RM</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("*")}>×</button>
          <button onClick={() => handleClick("M+")}>M+</button>
          <button onClick={() => handleClick("C")}>C</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("=")}>=</button>
          <button onClick={() => handleClick("/")}>÷</button>
          <button onClick={() => handleClick("M-")}>M-</button>
          <button onClick={() => handleClick("CA")}>CA</button>
        </div>
      </div>
    </div>
  );
};

export default App;
