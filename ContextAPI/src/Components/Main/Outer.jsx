import React from "react";
import Left from "../Left/Left";
import Right from "../Right/Right";

const Outer = () => {
  return (
    <>
      <div className="p-7 w-screen h-screen">
        <p>this is outer</p>
        <div className="h-full w-full flex justify-between">
          <div className="w-1/2">
            <Left />
          </div>
          <div className="w-1/2 bg-red-400">
            <Right />
          </div>
        </div>
      </div>
    </>
  );
};

export default Outer;
