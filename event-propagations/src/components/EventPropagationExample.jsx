import React from "react";

function Message(mess) {
  alert(mess);
}

//can't work properly....
const EventPropagationExample = () => {
  return (
    <div
      onClickCapture={() => {
        alert("Event propagations parent div");
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick(e, "play Movie");
        }}
      />

      <button
        onClick={(e) => {
          Message("Uploading Image");
          e.stopPropagation();
        }}
      />
    </div>
  );
};

export default EventPropagationExample;
