import React from "react";
import { useState } from "react";

const Form = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That's OK</h1>;
  }
  return (
    <div>
      <h2>City Quiz</h2>
      <p>In Which city is there a billboard that turns air into water ?!</p>
      <form>
        <textArea />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
