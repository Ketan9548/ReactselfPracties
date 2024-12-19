import React, { useState } from "react";

const Sliderbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const dataList = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <div
        onMouseEnter={handleMouseEnter}
        style={{
          display: "inline-block",
          cursor: "pointer",
          fontSize: "18px",
          color: "#007BFF",
        }}
      >
        Hover over me
      </div>
      {isHovered && (
        <>
          <div style={{width:"auto"}}>
            <ul
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                marginTop: "10px",
                cursor: "pointer",
                listStyle: "none",
                padding: 0,
              }}
            >
              {dataList.map((item, index) => (
                <li key={index} style={{ padding: "5px 0", color: "#333" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Sliderbar;
