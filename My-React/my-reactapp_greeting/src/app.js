import React from "react";
import "./index.css";

let time = new Date().getHours();
let greeting = "";
let cssStyle = {};

if (time >= 1 && time < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (time >= 12 && time < 16) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else if (time >= 16 && time < 21) {
  greeting = "Good Evening";
  cssStyle.color = "#f21170";
} else {
  greeting = "Good Night";
  cssStyle.color = "#1b1a17";
}

const App = () => {
  return (
    <>
      <div>
        <h1>
          Hello sir, <span style={cssStyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
};

export default App;
