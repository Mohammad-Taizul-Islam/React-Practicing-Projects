import { useState } from "react";

import "./App.css";

function App() {
  function handleForm(e) {
    e.preventDefault();
    alert("submitting");
  }
  return (
    <>
      <h3>Preventing default behaviour</h3>
      <form onSubmit={handleForm}>
        <input type="text" />
        <button>send</button>
      </form>
    </>
  );
}

export default App;
