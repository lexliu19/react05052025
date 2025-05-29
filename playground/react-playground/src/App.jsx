import './App.css';
import DebounceDemo from './custom-hooks/DebounceDemo';
import LocalStorageDemo from './custom-hooks/LocalStorageDemo';
import WindowWidth from './custom-hooks/WindowWidth';
import Games from './games/Games';
import GreetingWithLogger from './hoc/GreetingWithLogger';
import Timer from './timer/Timer';

function App() {
  return (
    <div>
      <DebounceDemo />
    </div>
  );
}

export default App;
