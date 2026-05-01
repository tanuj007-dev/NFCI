import React from 'react';
import logo from '../assets/logo.png';
const Navbar = () => {
  return (
    <nav className="w-full py-5 flex justify-center sticky top-0 z-[1000]">
      <div className="w-[95%] max-w-[1200px] bg-white rounded-full flex items-center justify-between px-4 py-2 shadow-lg">
        <div className="flex items-center gap-4 pl-5">
          <img 
            src={logo} 
            alt="NFCI Logo" 
            className="h-11 w-auto"
          />
          
        </div>
        
        <ul className="list-none flex gap-4 m-0 p-0 flex-1 justify-end hidden lg:flex">
          <li className="font-libre text-[16px] text-gray-900 cursor-pointer transition-colors duration-300 px-4 py-2 rounded-full bg-gray-50 font-bold">Home</li>
          <li className="font-libre text-[16px] text-gray-900 cursor-pointer transition-colors duration-300 px-4 py-2 rounded-full hover:bg-gray-50">Courses</li>
          <li className="font-libre text-[16px] text-gray-900 cursor-pointer transition-colors duration-300 px-4 py-2 rounded-full hover:bg-gray-50">Placements</li>
          <li className="font-libre text-[16px] text-gray-900 cursor-pointer transition-colors duration-300 px-4 py-2 rounded-full hover:bg-gray-50">Franchise</li>
          <li className="font-libre text-[16px] text-gray-900 cursor-pointer transition-colors duration-300 px-4 py-2 rounded-full hover:bg-gray-50">Location</li>
        </ul>
        
        <div className="pr-1.5">
          <button className="bg-nfci-red text-white border-none px-7 py-3 rounded-full font-libre font-normal text-[14px] tracking-wider cursor-pointer transition-all duration-300 hover:bg-nfci-red-hover hover:scale-105 whitespace-nowrap">
            CONTACT US
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
