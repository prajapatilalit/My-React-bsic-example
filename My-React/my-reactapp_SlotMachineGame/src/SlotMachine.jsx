import React from "react";

const SlotMachine = (props) => {
  // let x = "😄";
  // let y = "😄";
  // let z = "😄";

  let { x, y, z } = props;
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

export default SlotMachine;
