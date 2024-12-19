import { useState } from "react";

function Navbar() {
  const [showdropdown, setdropshown] = useState(false);
  return (
    <>
      <div className="flex bg-black justify-between p-2">
        <div className="ml-5 mt-3 mb-3 text-white text-3xl">
          <p className="font-bold cursor-pointer">
            <span className="text-blue-300">Lithium</span>
            <span className="text-green-200">Battery</span>
            <span className="text-yellow-200">Cell</span>
          </p>
        </div>
        <div className="flex mr-5 mt-6 mb-3 ml-6 font-bold text-white">
          <p className="pr-5 cursor-pointer hover:text-green-700">Home</p>
          <div
            className="pl-2 cursor-pointer"
            onMouseEnter={() => setdropshown(true)}
            onMouseLeave={()=> setdropshown(false)}
          >
            <p className="hover:text-green-700">Product</p>
            {showdropdown ? (
              <div
                className="absolute ml-4 mt-4 text-black font-bold"
              >
                <ul>
                  <li className="pt-2 cursor-pointer">Product1</li>
                  <li className="pt-2 cursor-pointer">Product2</li>
                  <li className="pt-2 cursor-pointer">Product3</li>
                  <li className="pt-2 cursor-pointer">Product4</li>
                </ul>
              </div>
            ) : null}
          </div>
          <p className="pl-6 cursor-pointer hover:text-green-700">Technology</p>
          <p className="pl-6 cursor-pointer hover:text-green-700">About Us</p>
          <p className="pl-6 pr-6 cursor-pointer hover:text-green-700">
            Careers
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
