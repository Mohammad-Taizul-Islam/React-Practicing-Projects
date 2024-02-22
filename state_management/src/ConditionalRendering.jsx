import React, { useState } from "react";

const ConditionalRendering = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}
    >
      <br />
      <br />
      <h2>State Management with conditional Rendering</h2>
      <br />
      <label htmlFor="">
        First Name :{" "}
        {isEditing ? (
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <br />
      <label htmlFor="">
        Last Name :{" "}
        {isEditing ? (
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <br />
      <button type="submit">{isEditing ? "Save" : "Edit"} Profile</button>

      <p>
        <i>
          Hello , {firstName} {lastName} !!
        </i>
      </p>
    </form>
  );
};

export default ConditionalRendering;
