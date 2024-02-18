import React from "react";

function Button({ children, onSmash }) {
  return <button onClick={onSmash}>{children}</button>;
}

function handleButtonPlayMovie() {
  alert("Playing Movie in extra functions");
}

function handleButtonUploadImage() {
  alert("Uploading Image");
}
const CleanToolBars = () => {
  return (
    <div>
      <Button onSmash={handleButtonPlayMovie}>Play Movie</Button>
      <Button onSmash={handleButtonUploadImage}>Uploading Image</Button>
    </div>
  );
};

export default CleanToolBars;
