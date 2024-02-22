import React from "react";
import { useState } from "react";

const SimpleForm = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That's right</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function handleTextAreaChanged(e) {
    setAnswer(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        In Which City the Nationalist Of Bangladeshi Is born : ?
        <br />
        <textarea
          type="text"
          value={answer}
          onChange={handleTextAreaChanged}
          disabled={status === "submitting"}
        />
      </label>
      <br />
      <button disabled={answer.length === 0 || status === "submitting"}>
        submit
      </button>
      {error !== null && <p className="Error">{error.message}</p>}
    </form>
  );
};

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "bogra";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}

export default SimpleForm;
