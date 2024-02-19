import React from "react";
import { useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    firstName: "Hridoy Ali",
    lastName: "Fakir",
    email: "fakir@gmail.com",
  });

  function handleObject(e) {
    setPerson({
      ...person,
      [e.target.name]: [e.target.value],
    });
  }

  return (
    <div>
      <label htmlFor="">
        First Name
        <input
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={handleObject}
        />
      </label>
      <br />
      <label htmlFor="">
        Last Name
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={handleObject}
        />
      </label>
      <br />
      <label htmlFor="">
        Email
        <input
          type="text"
          name="email"
          value={person.email}
          onChange={handleObject}
        />
      </label>
      <br />
      <p>
        First Name : {person.firstName} Last Name : {person.lastName} Email :{" "}
        {person.email}
      </p>
    </div>
  );
};

export default Form;
