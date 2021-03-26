import { useState } from "react";
import Input from "./Input";
import Keys from "./Keys";
import logo from "./logo.svg";
import "./logo.css";

function Calculator() {
  const [result, setResult] = useState(0);
  const [display, setDisplay] = useState("0");
  const [pendingOperator, setPendingOperator] = useState("");
  const [waitingForOperand, setWaitingForOperand] = useState(true);

  const calculate = (rightOperand, pendingOperator) => {
    let newResult = result;

    switch (pendingOperator) {
      case "+":
        newResult += rightOperand;
        break;
      case "-":
        newResult -= rightOperand;
        break;
      case "x":
        newResult *= rightOperand;
        break;
      case "÷":
        if (rightOperand === 0) {
          return false;
        }
        newResult /= rightOperand;
        break;
      default:
        break;
    }

    setResult(newResult);
    setDisplay(newResult.toString().toString().slice(0, 12));

    return true;
  };

  const onDigitButtonClick = (digit) => {
    let newDisplay = display;

    if ((display === "0" && digit === 0) || display.length > 15) {
      return;
    }

    if (waitingForOperand) {
      newDisplay = "";
      setWaitingForOperand(false);
    }

    if (display !== "0") {
      newDisplay = newDisplay + digit.toString();
    } else {
      newDisplay = digit.toString();
    }

    setDisplay(newDisplay);
  };

  const onPointButtonClick = () => {
    let newDisplay = display;

    if (waitingForOperand) {
      newDisplay = "0";
    }

    if (newDisplay.indexOf(".") === -1) {
      newDisplay = newDisplay + ".";
    }

    setDisplay(newDisplay);
    setWaitingForOperand(false);
  };

  const onOperatorButtonClick = (operator) => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }
    } else {
      if (operator === "%") {
        setDisplay(operand / 100);
      } else {
        setResult(operand);
      }
    }

    setPendingOperator(operator);
    setWaitingForOperand(true);
  };

  const onChangeSignButtonClick = () => {
    const value = Number(display);

    if (value > 0) {
      setDisplay("-" + display);
    } else if (value < 0) {
      setDisplay(display.slice(1));
    }
  };

  const onEqualButtonClick = () => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }
      setPendingOperator(undefined);
    } else {
      setDisplay(operand.toString());
    }

    setResult(operand);
    setWaitingForOperand(true);
  };

  const onAllClearButtonClick = () => {
    setResult(0);
    setPendingOperator(undefined);
    setDisplay("0");
    setWaitingForOperand(true);
  };

  return (
    <div className="flex items-center justify-center h-screen px-5 py-5 bg-gray-100 w-96 dark:bg-gray-800">
      <div className="relative w-full mx-auto overflow-hidden text-gray-800 bg-gray-100 shadow-xl rounded-xl dark:bg-gray-800">
        <div className="flex justify-center">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <h1 className="mt-1 text-2xl text-center dark:text-gray-50">
          React Calculator APP
        </h1>
        <Input result={result} display={display} />
        <Keys
          onEqualButtonClick={onEqualButtonClick}
          onAllClearButtonClick={onAllClearButtonClick}
          onChangeSignButtonClick={onChangeSignButtonClick}
          onOperatorButtonClick={onOperatorButtonClick}
          onPointButtonClick={onPointButtonClick}
          onDigitButtonClick={onDigitButtonClick}
        />
      </div>
    </div>
  );
}

export default Calculator;
