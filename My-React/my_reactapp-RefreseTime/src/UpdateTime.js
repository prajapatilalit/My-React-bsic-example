import React, { useState } from "react";

const UpdateTime = () => {
  let currTime = new Date().toLocaleTimeString();
  let getHour = new Date().getHours();
  const [currentTime, setCurrentTime] = useState(currTime);

  const UpdateTime = () => {
    currTime = new Date().toLocaleTimeString();
    setCurrentTime(currTime);
  };

  return (
    <>
      <h1>
        {currentTime} {getHour >= 12 ? "PM" : "AM"}
      </h1>
      <button onClick={UpdateTime}>Get Update</button>
    </>
  );
};
export default UpdateTime;
