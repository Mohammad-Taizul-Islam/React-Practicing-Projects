import { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That's ok</h1>;
  }
  async function handleSubmitForm(e) {
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

  function submitForm(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() != "lima";
        if (shouldError) {
          reject(new Error("Good Guess but a wrong answer . Try Again!!"));
        } else {
          resolve();
        }
      }, 1500);
    });
  }

  function handleTextAreaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div>
      <h2>City Quiz</h2>
      <p>
        In Which city is there a billboard that turns air into drinkable water ?
      </p>
      <form onSubmit={handleSubmitForm}>
        <textarea
          value={answer}
          onChange={handleTextAreaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          submit
        </button>

        {error != null && <p>{error.message}</p>}
      </form>
    </div>
  );
}

export default App;
