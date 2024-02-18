import "./App.css";
import ExtendToolBars from "./components/ExtendToolBars";
import ToolBars from "./components/ToolBars";
import CleanToolBars from "./components/CleanToolBars";
import CompactToolbars from "./components/CompactToolbars";

function handleClick() {
  alert("Clicked have been handle");
}
function App() {
  return (
    <>
      <button onClick={handleClick}>submit</button>
      <ToolBars />
      <ExtendToolBars />

      <CleanToolBars />

      <CompactToolbars
        onPLayMovie={() => alert("Playing Movie")}
        onUploadImage={() => alert("Uploading Image")}
      />
    </>
  );
}

export default App;
