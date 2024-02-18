import React, { Children } from "react";

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePLayButton() {
    alert(`Playing ${movieName}`);
  }
  return <Button onClick={handlePLayButton}>play "{movieName}"</Button>;
}

function UploadButton() {
  return <button onClick={() => alert("Uploading Image")}>Upload Image</button>;
}
const ExtendToolBars = () => {
  return (
    <div>
      <PlayButton movieName="BahuBoli" />
      <UploadButton />
    </div>
  );
};

export default ExtendToolBars;
