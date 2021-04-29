import React from "react";
import { add, subtract, muliply, divison } from "./calculator";
// import "./index.css";

const App = () => {
  return (
    <>
      <ul>
        <li>The Sum of two Number is : {add(40, 4)}</li>
        <li>The Subtraction of two Number is : {subtract(30, 3)}</li>
        <li>The Multiplication of two Number is : {muliply(10, 3)}</li>
        <li>The Divison of two Number is : {divison(10, 3).toFixed(2)}</li>
      </ul>
    </>
  );
};

export default App;
