import React from "react";
import Rightiupper from "./Rightiupper";
import Rightlower from "./Rightlower";

function Right() {
  return (
    <>
      <div>
        <p>this is right</p>
      </div>
      <div className="h-screen bg-red-400 flex flex-col">
        <div className="flex items-start"> 
          <Rightiupper />
        </div>
        <div className="flex items-center mt-80">
          <Rightlower />
        </div>
      </div>
    </>
  );
}

export default Right;
