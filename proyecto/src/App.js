import './App.css';
import {ComponentClass, ComponentClass2} from './componentes/componentClass';
import {ComponentFunc, ComponentFunc2} from './componentes/componentFunc'
import ComponentButton from './componentes/componentButton'

function App() {
  return (
    <div className="App">
      <ComponentClass />  
      <ComponentClass2 />
      <ComponentFunc />
      <ComponentFunc2 />
      <ComponentButton />
    </div>
  );
}

export default App;