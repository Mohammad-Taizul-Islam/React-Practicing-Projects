import React, { useState } from "react";

const Av_Contadiction_Of_State = () => {
  const [text, setText] = useState(" ");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }

  if (isSent) {
    return <h1>Thanks for your feedback</h1>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at the marrige of your friend ? : </p>
      <br />
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />
      <button disabled={isSending} type="submit">
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
};

function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

export default Av_Contadiction_Of_State;
