import React, { useState } from "react";

const SearchItem = () => {
  const data1 = [
    3, 2, 21, 342, 32, 21, 32, 32, 443, 21, 32, 32, 12, 6, 543, 254, 37, 543,
    6775, 33, 65, 98, 24, 665, 343, 8665, 4343, 656, 454, 232, 6454, 7676764, 4,
    64, 4, 3, 5, 3, 8, 4, 4, 54, 3, 43, 3, 4,
  ];
  const [searchdata, setSearchdata] = useState("");
  const [data, setdata] = useState("");

  const findvalue = () => {
    let val = Number(searchdata);
    if (data1.includes(val)) {
      setdata(val);
    } else {
      setdata("Not Found");
    }
  };
  return (
    <>
      <p>Search element</p>
      <input
        type="number"
        value={searchdata}
        placeholder="Search...."
        onChange={(e) => setSearchdata(e.target.value)}
      />
      <button onClick={findvalue}>Search</button>
      <div>
        <p>Value is {data?data:"?"} present in data</p>
      </div>
      {data1.map((val, index) => (
        <>
          <p key={index}>{val}</p>
        </>
      ))}
    </>
  );
};

export default SearchItem;
