import { useState, useEffect } from "react";

const FlexBox = () => {
  const [screenSize, setScreenSize] = useState("lg");

  const updateScreenSize = () => {
    if (window.innerWidth < 640) setScreenSize("sm");
    else if (window.innerWidth < 768) setScreenSize("md");
    else if (window.innerWidth < 1024) setScreenSize("lg");
    else setScreenSize("xl");
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const getText = (index) => {
    const texts = {
      sm: `Small Box ${index}`,
      md: `Medium Box ${index}`,
      lg: `Large Box ${index}`,
      xl: `Extra Large Box ${index}`,
    };
    return texts[screenSize];
  };

  return (
    <div className="flex flex-wrap justify-center bg-black p-4">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className="bg-red-400 h-20 w-72 sm:w-1/2 md:w-1/3 lg:w-1/4 m-2 flex items-center justify-center text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold"
        >
          {getText(i + 1)}
        </div>
      ))}
    </div>
  );
};

export default FlexBox;
