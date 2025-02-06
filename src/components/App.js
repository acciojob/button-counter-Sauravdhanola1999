
import React from "react";
import './../styles/App.css';
import { useState } from "react";


const App = () => {
    const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
};

  return (
    <div>
     <p>Button clicked {count} times</p>
     <button onClick={increment}>Click Me</button>
    </div>
  )
}

export default App
