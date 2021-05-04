import React, { useState } from "react";

const Baground = () => {
  const purple = "#9b59b6";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("Click Me 👍");

  const BgChange = () => {
    const red = "#ff0000";
    setBg(red);
    setName("ouch 👽");
  };

  const handleDoubleClick = () => {
    setBg("#9b59b6");
    setName("Aiyyo 😠");
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={BgChange} onDoubleClick={handleDoubleClick}>
          {name}
        </button>
      </div>
    </>
  );
};
export default Baground;
