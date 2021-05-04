import React, { useState } from "react";

const EventHandle = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameNew, setFirstNameNew] = useState();
  const [lastNameNew, setLastNameNew] = useState();

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onSubmit = () => {
    setFirstNameNew(firstName);
    setLastNameNew(lastName);
  };

  return (
    <>
      <div>
        <h1>
          Hello {firstNameNew} {lastNameNew}
        </h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={handleChangeFirstName}
          value={firstName}
        />

        <input
          type="text"
          placeholder="Enter Your Last Name"
          onChange={handleChangeLastName}
          value={lastName}
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </>
  );
};
export default EventHandle;
