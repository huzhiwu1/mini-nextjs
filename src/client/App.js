import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>ssr</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
