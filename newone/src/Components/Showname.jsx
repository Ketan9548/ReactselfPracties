import React, { useEffect, useState } from "react";

const Showname = () => {
  const [val, setval] = useState(0);
  const [val2, setval2] = useState(2);

  //Runs on every render
  useEffect(() => {
    console.log(`value is: ${val}`);
  });

  //Runs only on the first render
  //   useEffect(() => {
  //     console.log(`value is: ${val}`);
  //   }, []);

  //Runs on the first render
  //And any time any dependency value changes
  //   useEffect(() => {
  //     console.log(`value is: ${val}`);
  //   }, [val]);
  return (
    <>
      <div>
        <p>name is {val}</p>
        <button onClick={() => setval(val + 1)}>Click</button>
        <button onClick={() => setval2(val2 + 1)}>Click3</button>
      </div>
    </>
  );
};

export default Showname;
