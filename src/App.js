import ValiationForm from "./tugas/Form/validation";
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
    </div>
  );
}

export default App;
