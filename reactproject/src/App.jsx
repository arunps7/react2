import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="App">
      <h1>React App with Hooks</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
