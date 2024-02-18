import React from "react";

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
const CompactToolbars = ({ onPLayMovie, onUploadImage }) => {
  return (
    <div>
      <Button onClick={onPLayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
};

export default CompactToolbars;
