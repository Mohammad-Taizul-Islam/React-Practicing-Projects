import ArraysOperations from "./ArraysOperations";
import ObjectArrayUpdateState from "./ObjectArrayUpdateState";
import ObjectArrayUpdateWithImmer from "./ObjectArrayUpdateWithImmer";
import TransformingArray from "./TransformingArray";
function App() {
  return (
    <>
      <h2>updating Array with state</h2>
      <ArraysOperations />
      <TransformingArray />

      <h2>With use State : </h2>
      <ObjectArrayUpdateState />

      <h2>With Use Immer : </h2>
      <ObjectArrayUpdateWithImmer />
    </>
  );
}

export default App;
