import React from "react";
import { Children } from "react";

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}
const ToolBars = () => {
  return (
    <div>
      <AlertButton message={"playing"}>Play Movie</AlertButton>

      <AlertButton message={"uploading"}>Upload Video</AlertButton>
    </div>
  );
};

export default ToolBars;
