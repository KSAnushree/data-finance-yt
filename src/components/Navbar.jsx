import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav = !nav;
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-green-600">REACT.</h1>
      <ul className="flex hidden">
        <li className="p-5">Home</li>
        <li className="p-5">Company</li>
        <li className="p-5">Resource</li>
        <li className="p-5">About</li>
        <li className="p-5">Contact</li>
      </ul>
      <div>
        <AiOutlineMenu size={20} />
      </div>
      <div className="fixed left-0 top-0 w-[15%] h-full border-r border-r-gray-900 bg-black">
        <h1 className="w-full text-3xl font-bold text-green-600 m-4">REACT.</h1>
        <ul className="uppercase p-4">
          <li className="p-5 border-b border-gray-600">Home</li>
          <li className="p-5 border-b border-gray-600">Company</li>
          <li className="p-5 border-b border-gray-600">Resource</li>
          <li className="p-5 border-b border-gray-600">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
