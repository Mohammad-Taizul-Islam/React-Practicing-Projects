import "./App.css";

function Button({ onSmash, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onSmash();
      }}
    >
      {children}
    </button>
  );
}

function App() {
  function message(msg) {
    alert(msg);
  }
  return (
    <>
      <h1>Passing Handler as Props</h1>
      <div
        onClick={() => {
          alert("Clicked on toolbar");
        }}
      >
        <Button onSmash={() => message("Playing Movie")}>Playing Movie</Button>
        <Button onSmash={() => message("Uploading Image")}>
          Uploading Image
        </Button>
      </div>
    </>
  );
}

export default App;
