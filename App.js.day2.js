import { useState } from 'react';
import './App.css';
import Calc from './calculator';

function App() {
  // this is how we define a state in react.

  const [count, setCount] = useState(1);
  // count = value
  // setcount = function which will control count
  // useState = hook 
  // (1) = It is the default value of count, If we refresh..state goes to its default value .
  function handleClick() {
    setCount(count + 10);
  };
  function handleclick() {
    setCount(count - 1 );
  }
  function reset() {
    setCount(1);
  }
  return (
    <div className="App">
      {/*this is how we use a state*/}
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleclick}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;