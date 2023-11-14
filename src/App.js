import React, { useState } from "react";

import "./styles.css";

export default function App() {

  const [count , setCount ] = useState(0);



  return (
    <div className="App">
      <h1>The count is : {count}</h1>
      <button onClick={() => setCount(count -1)}>Decrement by 1</button>
      <button onClick={() => setCount(count + 1)}>Increment by 1</button>
      <button onClick={() => setCount(count + 33)}>Increment by 33</button>
      <button onClick={() => setCount(count - 33)}>Decrement by 33</button>
    </div>
  );
}
