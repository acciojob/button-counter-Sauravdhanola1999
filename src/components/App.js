
import React from "react";
import './../styles/App.css';
import React, { useState } from "react";


const App = () => {
    const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
};

  return (
    <div>
        {/* Do not remove the main div */}
     <p>Button clicked {0} times</p>
     <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App
