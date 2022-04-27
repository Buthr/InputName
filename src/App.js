import logo from './logo.svg';
import './App.css';
import { Test } from "./Components/Test";
import { useState } from "react";
import Inputname from './Inputname';

function App() {
  const [ isToggled, setIsToggled] = useState(false);
  return (
    <div className='App'>
      <button onClick={() => setIsToggled(!isToggled)}>Start</button>
      { isToggled && <Inputname />}
      { isToggled ? <Test /> : <p> Welcome to Tell Your Tale! </p>}
      
    </div>
  );
}

export default App;
