import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(16);

  function incress() {
    // in this case only update value in 1 time
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // Now in this situation counter is increese in 4 time
    setCount((prevwcout) => prevwcout + 1);
    setCount((prevwcout) => prevwcout + 1);
    setCount((prevwcout) => prevwcout + 1);
    setCount((prevwcout) => prevwcout + 1);
  }

  function decrees() {
    // setCount(count - 1);

    // Now in this situation counter is decressing in 4 time
    setCount((prevcount) => prevcount - 1);
    setCount((prevcount) => prevcount - 1);
    setCount((prevcount) => prevcount - 1);
    setCount((prevcount) => prevcount - 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={incress}>Increes</button>
      <p>{count}</p>
      <button onClick={decrees}>Decrees</button>
    </div>
  );
}

export default Counter;
