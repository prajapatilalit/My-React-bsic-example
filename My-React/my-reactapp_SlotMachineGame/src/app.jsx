import React from "react";

const SlotM = (props) => {
  // let x = "😄";
  // let y = "😄";
  // let z = "😄";

  let x = props.x;
  let y = props.y;
  let z = props.z;

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h3>
            {x} {y} {z}
          </h3>
          <h3>This is matching</h3>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h3>
            {x} {y} {z}
          </h3>
          <h3>This is not matching</h3>
          <hr />
        </div>
      </>
    );
  }
};

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰Welcome To{" "}
        <span style={{ fontWeight: "bold" }}>Slot Machine Game</span> 🎰
      </h1>
      <div className="slotmachine">
        <SlotM x="😃" y="😃" z="😃" />
        <SlotM x="😃" y="🎅" z="😈" />
        <SlotM x="🐺" y="😺" z="👩‍🍳" />
        <SlotM x="⚽" y="🍌" z="🥀" />
      </div>
    </>
  );
};
export default App;
