import React from "react";

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}
const Toolbar = () => {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!!");
      }}
    >
      <Button
        onClick={() => {
          alert("Playing Movie");
        }}
      >
        Play Movie
      </Button>
      <Button
        onClick={() => {
          alert("Uploading Image");
        }}
      >
        Uploading Image
      </Button>
    </div>
  );
};

export default Toolbar;
