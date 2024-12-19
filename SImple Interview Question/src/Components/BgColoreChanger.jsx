import { useState } from "react";

const BgColorChanger = () => {
  const [color, setColor] = useState("pink");

  const colorarr = ["red", "green", "blue", "yellow", "gray"];

  return (
    <div
      className="h-screen w-screen duration-200 flex flex-col items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap gap-4 bottom-7 p-3 bg-white border-2 rounded-2xl border-white justify-cente justify-between">
        {colorarr.map((col, index) => (
          <>
            <div key={index}>
              <button
                className="text-xl border-2 border-black ml-7 mr-28 rounded-3xl p-4 text-white"
                style={{ backgroundColor: col }}
                onClick={() => setColor(col)}
              >
                {col}
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default BgColorChanger;
