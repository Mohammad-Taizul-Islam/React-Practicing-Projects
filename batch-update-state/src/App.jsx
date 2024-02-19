import { useState } from "react";
import "./App.css";

function App() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  async function handleClick() {
    setPending((p) => p + 1);
    await delay(3000);
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  }

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  return (
    <>
      <div>
        <h3>Pending : {pending}</h3>
        <h3>Completed : {completed}</h3>
        <button onClick={handleClick}>buy</button>
      </div>
    </>
  );
}

export default App;
