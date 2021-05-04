import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phoneNumber: "",
  });

  const InputChange = (e) => {
    // const value = e.target.value;
    // const name = e.target.name;

    //here we use object destructuring
    const { value, name } = e.target;

    setFullName((prevValue) => {
      //2 line code of using ... spread operator
      return {
        ...prevValue,
        [name]: value,
      };
      //without using spread operator
      //   console.log(prevValue);
      //   if (name === "fName") {
      //     return {
      //       fName: value,
      //       lName: prevValue.lName,
      //       email: prevValue.email,
      //       phoneNumber: prevValue.phoneNumber,
      //     };
      //   } else if (name === "lName") {
      //     return {
      //       fName: prevValue.fName,
      //       lName: value,
      //       email: prevValue.email,
      //       phoneNumber: prevValue.phoneNumber,
      //     };
      //   } else if (name === "email") {
      //     return {
      //       fName: prevValue.fName,
      //       lName: prevValue.lName,
      //       email: value,
      //       phoneNumber: prevValue.phoneNumber,
      //     };
      //   } else if (name === "phoneNumber") {
      //     return {
      //       fName: prevValue.fName,
      //       lName: prevValue.lName,
      //       email: prevValue.email,
      //       phoneNumber: value,
      //     };
      //   }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully");
  };

  return (
    <>
      <div className="main-div">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>
              Hello {fullName.fName} {fullName.lName}
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.phoneNumber}</p>
            <input
              type="text"
              placeholder="Enter Your First Name"
              onChange={InputChange}
              name="fName"
              value={fullName.fName}
            />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              onChange={InputChange}
              name="lName"
              value={fullName.lName}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={InputChange}
              name="email"
              value={fullName.email}
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              onChange={InputChange}
              name="phoneNumber"
              value={fullName.phoneNumber}
            />
            <button>Submit Me 👍</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
