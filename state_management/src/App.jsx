import "./App.css";
import Av_Contadiction_Of_State from "./Av_Contadiction_Of_State";
import NameForm from "./NameForm";
import SharingState from "./SharingState";
import SimpleForm from "./SimpleForm";
import ConditionalRendering from "./ConditionalRendering";
import PreserveAndResetingState from "./PreserveAndResetingState";

function App() {
  const counter = <PreserveAndResetingState />;
  return (
    <>
      <SimpleForm />
      <NameForm />
      <SharingState />
      <Av_Contadiction_Of_State />
      <ConditionalRendering />

      <div>
        {counter}
        {counter}
      </div>
    </>
  );
}

export default App;
