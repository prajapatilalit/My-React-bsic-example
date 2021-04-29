import React from "react";
import "./index.css";

const App = () => {
  const name = "Lalit Prajapati";
  const CurrentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  return (
    <>
      <h1 className="heading">Hello, My Name is {name} </h1>
      <p>Current Date is : {CurrentDate}</p>
      <p>Current Time is : {currentTime}</p>
    </>
  );
};

export default App;
