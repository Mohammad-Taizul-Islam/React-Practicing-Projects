import { useState } from "react";

import "./App.css";
import Toolbar from "./components/Toolbar";
import EventPropagationExample from "./components/EventPropagationExample";

function App() {
  return (
    <>
      <h1>Event Propagations</h1>
      <Toolbar />
      <EventPropagationExample />
    </>
  );
}

export default App;
