import React from "react";
import SlotMachine from "./SlotMachine";

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        π°Welcome To{" "}
        <span style={{ fontWeight: "bold" }}>Slot Machine Game</span> π°
      </h1>
      <div className="slotmachine">
        <SlotMachine x="π" y="π" z="π" />
        <SlotMachine x="π" y="π" z="π" />
        <SlotMachine x="πΊ" y="πΊ" z="π©βπ³" />
        <SlotMachine x="β½" y="π" z="π₯" />
      </div>
    </>
  );
};
export default App;
