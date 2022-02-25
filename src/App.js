import ValiationForm from "./tugas/Form/validation";
import DataFetching from "./tugas/hooks/Hooks";
import Komponen from "./tugas/komponen";
import LifecycleComponent from "./tugas/LifeCycleComponent/LifeCycle";
import Styling from "./tugas/Styling";

function App() {
  return (
    <div className="App">
        <Komponen/>
        <Styling/>
        <ValiationForm/>
        <LifecycleComponent/>
        <DataFetching/>
    </div>
  );
}

export default App;
