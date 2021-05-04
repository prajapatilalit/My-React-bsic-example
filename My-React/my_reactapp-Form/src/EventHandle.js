import React, { useState } from "react";

const EventHandle = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    setFullName(name);
  };

  return (
    <>
      <h1>Hello {fullName}</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={handleChange}
        value={name}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
export default EventHandle;
