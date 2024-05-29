import React from "react";

export function Operations(history) {

  let operate = history.history.split(/[*,+,/,-]/)
  let operators = history.history.split(/[1,2,3,4,5,6,7,8,9,0,.]/)
  let formatedNumbers = []
  let formatedOperators = []

  operators.forEach(element => {
    if (element !== "") {
      if (element.length > 1) {
        element = element[0]
      }
      formatedOperators.push(element)
    }
  });

  for (let i = 0; i < operate.length; i++) {
    if (operate[i] === "") {
      formatedNumbers.push(-operate[i + 1])
      i++
    } else {
      formatedNumbers.push(+operate[i])
    }
  }

  let x = 0

  if (history[0] === "-") {
    x = 1
  }

  let count = formatedNumbers[0] 

  for (let i = 1; i < formatedNumbers.length; i++) {
   
    switch (formatedOperators[x]) {
      case "+":{
          count += formatedNumbers[i]
          break}
      case "-":{
          count -= formatedNumbers[i]
          break}
      case "*":{
          count *=formatedNumbers[i]
          break}
      case "/":{
          count/=formatedNumbers[i]
          break}
      default:{
        
      }
  }
   
    x++
  }

  return (
    <div>
      {count}
    </div>
  )
}

export default Operations;
