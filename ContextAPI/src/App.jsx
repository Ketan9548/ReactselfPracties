import { useState } from "react";
import React from "react";
import Outer from "./Components/Main/Outer";

const context = React.createContext(null);
function App() {
  const [fname, setFname] = useState("ketan");
  const [lname, setLname] = useState("Chauhan");
  return (
    <>
      <context.Provider value={{ fname, lname }}>
        <Outer />
      </context.Provider>
    </>
  );
}

export { context, App };
