import { useEffect, useState } from 'react'
import Change from './Components/Change'
import CustomHook from './Hooks/Costemhook.js'
import Calcy from './Components/Calcy.jsx';
import Search from './Components/Search.jsx';
import Input_output from './Components/Input_output.jsx';

function App() {
  // let [data, setData] = useState([])
  // let arr = []
  // const currencyval = CustomHook("inr");
  // const optionsval = Object.keys(currencyval);
  // useEffect(() => {
  //   setData(optionsval);
  //   console.log(optionsval)
  // }, [currencyval])

  return (
    <>
      {/* {data.map((value) => {
        return (
          arr.push(value)
        )
      })} */}
      {/* <Calcy /> */}
      {/* <Search /> */}
      <Input_output />
    </>
  )
}

export default App
