import React from "react";
import SlotMachine from "./SlotMachine";

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰Welcome To{" "}
        <span style={{ fontWeight: "bold" }}>Slot Machine Game</span> 🎰
      </h1>
      <div className="slotmachine">
        <SlotMachine x="😃" y="😃" z="😃" />
        <SlotMachine x="😃" y="🎅" z="😈" />
        <SlotMachine x="🐺" y="😺" z="👩‍🍳" />
        <SlotMachine x="⚽" y="🍌" z="🥀" />
      </div>
    </>
  );
};
export default App;
