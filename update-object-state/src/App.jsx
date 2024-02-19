import { useState } from "react";
import Form from "./Form";
import "./App.css";
import Immer from "./Immer";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    // <div
    //   onPointerMove={(e) => {
    //     setPosition({
    //       x: e.clientX,
    //       y: e.clientY,
    //     });
    //   }}
    //   style={{
    //     position: "relative",
    //     width: "100vw",
    //     height: "100vh",
    //   }}
    // >
    //   <div
    //     style={{
    //       position: "absolute",
    //       backgroundColor: "blue",
    //       borderRadius: "50%",
    //       transform: `translate(${position.x}px,${position.y}px)`,
    //       left: -10,
    //       top: -10,
    //       width: 30,
    //       height: 30,
    //     }}
    //   />
    // </div>
    <>
      <Form />
      <Immer />
    </>
  );
}

export default App;
