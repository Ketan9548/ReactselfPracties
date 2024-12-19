import React, { useState } from "react";

const ShowThe = () => {
  //   const [showkey, setshowkey] = useState();
  const [value, Setvalue] = useState();

  const val = (event) => {
    Setvalue(event.target.value);
  };
  return (
    <>
      <div>
        <p>valis : {value ? value : null}</p>
        <input type="text" onKeyDown={val} />
      </div>
    </>
  );
};

export default ShowThe;
