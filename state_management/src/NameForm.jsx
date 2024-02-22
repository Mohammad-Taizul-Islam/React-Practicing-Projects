import React, { useState } from "react";

const NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  function handleFirstNameChngae(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChngae(e) {
    setLastName(e.target.value);
  }

  return (
    <div>
      <label htmlFor="">
        FirstName :{" "}
        <input type="text" value={firstName} onChange={handleFirstNameChngae} />
      </label>
      <br />
      <label htmlFor="">
        LastName :{" "}
        <input type="text" value={lastName} onChange={handleLastNameChngae} />
      </label>
      <p>Full Name is : {fullName}</p>
    </div>
  );
};

export default NameForm;
