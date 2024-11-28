import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const marvel = {
    hero1: {
      power: 1,
      name: "ironman",
    },
    hero2: {
      power: 2,
      name: "hulk",
    },
    hero3: {
      power: 3,
      name: "thor",
    },
    hero4: {
      power: 4,
      name: "spiderman",
    },
  };

  const [data, setdata] = useState([]);

  const val = Object.entries(marvel);

  useEffect(() => {
    setdata(val);
    console.log("the value is:", data);
  }, []);

  return (
    <>
      <>
        <select>
          {data.map((val1) => (
            <option key={val1[0]} value={val1[1].name}>
              {val1[1].name}
            </option>
          ))}
        </select>
      </>
    </>
  );
}

export default App;
