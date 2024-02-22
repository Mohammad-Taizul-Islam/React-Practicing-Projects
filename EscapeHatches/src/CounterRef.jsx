import React from "react";
import { useRef } from "react";

const CounterRef = () => {
  let ref = useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;
    alert(" You Clicked  " + ref.current + " times");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me !</button>
    </div>
  );
};

export default CounterRef;
