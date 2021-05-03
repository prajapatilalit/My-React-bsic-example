import React, { useState } from "react";

const DigitalClock = () => {
  let currTime = new Date().toLocaleTimeString();
  let getHour = new Date().getHours();
  const [currentTime, setCurrentTime] = useState(currTime);

  const UpdateTime = () => {
    currTime = new Date().toLocaleTimeString();
    setCurrentTime(currTime);
  };

  setInterval(UpdateTime, 1);

  return (
    <>
      <h1>
        {currentTime} {getHour >= 12 ? "PM" : "AM"}
      </h1>
    </>
  );
};
export default DigitalClock;
