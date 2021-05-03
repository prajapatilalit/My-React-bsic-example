import React, { useState } from "react";
// in this we use the react-hook to update state
const Counter = () => {
  const [count, setCount] = useState(0);

  const IncrementCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncrementCount}>Click Me</button>
    </>
  );
};
export default Counter;
