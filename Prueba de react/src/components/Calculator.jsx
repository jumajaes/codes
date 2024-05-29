import React, { useState } from "react";
import Operation from "./Operations";
import "./Calculator.css"
//import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Calculator() {

  const [count, setCount] = useState("");
  const [history, setHistory] = useState("");

  const [controlOperator, setControlOperator] = useState("");

  const isOperator = (caracter) => {

    
    let operatorsArray = ["*", "/", "+", "-"]
    return operatorsArray.includes(caracter)

  }

  const isDotOrMinus = (caracter) => {

   
    let operatorsArray = [".", "-"]
    return operatorsArray.includes(caracter)


  }

  const setNumberToHistory = (caracter) => {
    caracter === "0" && history === "" ? setHistory(history + caracter + ".") : caracter === "0" && (history[history.length - 1] === "/") ? setHistory(history) : setHistory(history + caracter);
    setCount("")
  }


  const setOperatorToHistory = (caracter) => {
    setCount("")
    caracter === "." && setControlOperator(caracter)
    if (history !== "") {

      if (isDotOrMinus(history[history.length - 1]) || isOperator(history[history.length - 1])) {
        if (caracter === "-") {
          if (history[history.length - 1] === "-") {
           
            setHistory(history);
          } else {
            if (history[history.length - 1] === ".") {
             
              setHistory(history);
            } else {
              setHistory(history + caracter);
            }
          }

        }

        if (caracter === ".") {
          if (history[history.length - 1] === "-") {
         
            setHistory(history + 0 + caracter);
          } else {
            if (history[history.length - 1] === ".") {
              
              setHistory(history);
            } else {
              if (isOperator(history[history.length - 1])) {
                setHistory(history + 0 + caracter)
              } else {
                setHistory(history + caracter)
              }

            }
          }


        }

      } else {

       
        caracter === "+" && setHistory(history + caracter);

        caracter === "*" && setHistory(history + caracter);

        caracter === "/" && setHistory(history + caracter);
        caracter === "." & (controlOperator === ".") && setHistory(history);
        caracter === "." & (controlOperator === "-" & !isOperator(history[history.length - 1])) && setHistory(history + caracter);
        caracter === "-" & (!isOperator(history[history.length - 1])) && setHistory(history + caracter);
        caracter === "." & (controlOperator !== ".") && isDotOrMinus(history[history.length - 1]) | isOperator(history[history.length - 1]) ? setHistory(setHistory(history + 0 + caracter)) : setHistory(history + caracter);
        caracter === "." & (controlOperator === ".") && setHistory(history);
      }

    } else {

      caracter === "." && setHistory(history + 0 + caracter);
      caracter === "-" && setHistory(history + caracter);


    }
    (isOperator(caracter) | isDotOrMinus(caracter)) && setControlOperator(caracter);
  }

  const deleteEntryLast = () => {
    let array = history.split("")
    history[history.length - 1] === "." && array.pop();
    array.pop()
    setHistory(array.join(""))
    setCount("")
  }

  return (

    <div className="calculator">

      <div id="operation">
        <h1 >{history}</h1>
      </div>
      <h1 id="result">{count}</h1>

      <div className="operations">

        <button onClick={() => {
          setOperatorToHistory("+")
        }}>sumar(+)</button>

        <button onClick={() => {
          setOperatorToHistory("-")
        }}>restar(-)</button>
        <button onClick={() => {
          setOperatorToHistory("*")

        }}>multiplicar(*)</button>
        <button onClick={() => {
          setOperatorToHistory("/")
        }}>dividir(/)</button>

        <button onClick={() => {
          setCount("");
          setHistory("");
          setControlOperator("")
        }}>limpiar(C)</button>

        <button onClick={() => {
          deleteEntryLast()
          setControlOperator("")
        }}>Borrar</button>

      </div>

      <div className="numbers">
        
        {[1,2,3].map((value) => <button onClick={() => {
          setNumberToHistory(`${value}`)
        }}>{value}</button>)}

        <button onClick={() => {
          setNumberToHistory("1")
        }}>1</button>
        <button onClick={() => {
          setNumberToHistory("2")
        }}>2</button>
        <button onClick={() => {
          setNumberToHistory("3")
        }} >3</button>
        <button onClick={() => {
          setNumberToHistory("4")
        }}>4</button>
        <button onClick={() => {
          setNumberToHistory("5")
        }}>5</button>
        <button onClick={() => {
          setNumberToHistory("6")
        }}>6</button>
        <button onClick={() => {
          setNumberToHistory("7")
        }}>7</button>
        <button onClick={() => {
          setNumberToHistory("8")
        }}>8</button>
        <button onClick={() => {
          setNumberToHistory("9")
        }}>9</button>

        <button onClick={() => {
          setOperatorToHistory(".")
        }}>.(decimal)</button>

        <button onClick={() => {
          setNumberToHistory("0")
        }}>0</button>

        <button onClick={() => {
          if (history !== "" && history.split(/[*,+,/,-]/).length > 1) {
            
            setCount(<Operation history={history} />)
          }
        }}>igual(=)</button>


      </div>

    </div>


  );
}

export default Calculator;
