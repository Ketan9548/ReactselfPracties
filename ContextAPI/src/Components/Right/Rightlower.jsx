import React from "react";
import { useContext } from "react";
import { context } from "../../App";

const Rightlower = () => {
  const { fname, lname } = useContext(context);
  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <p>Rightlower</p>
        </div>
        <div>
          <p>fist name is: {fname}</p>
          <p>Last name is: {lname}</p>
        </div>
      </div>
    </>
  );
};

export default Rightlower;
