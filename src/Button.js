import { useState } from "react";
import Circle from "./Circle.js";
import React from "react";
function Button({ target }) {
  const [number, setNumber] = useState(null);
  const [finalsum, setFinalsum] = useState(0);
  const [str, setStr] = useState(null);
  const array = new Array(finalsum).fill(0);
  console.log("Array is", array);
  function Click() {
    let sum;
    var num = Math.floor(Math.random() * 5) + 1;
    setNumber(num);
    sum = finalsum + num;

    if (sum < target) {
      setFinalsum(sum);
      const array = new Array(num).fill(0);
      array.forEach(myFunc);
      function myFunc(item) {}
    }
    if (sum === target) {
      // sum = sum +
      setFinalsum(sum);
      setStr("You have won the game");
      // console.log(sum);
      //console.log("OK");
    }
  }
  //console.log(num);
  return (
    <div>
      <button onClick={Click}>Try Your Luck</button>
      <p>{number}</p>
      <p>Score is {finalsum}</p>
      <div id="grid">
        {array.map((item) => (
          <Circle />
        ))}
      </div>
      <p>{str}</p>
    </div>
  );
}
export default Button;
