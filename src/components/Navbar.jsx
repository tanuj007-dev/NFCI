import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-5 flex justify-center sticky top-0 z-[1000]">
      <div className="w-[95%] max-w-[1200px] bg-white rounded-[20px] lg:rounded-full flex items-center justify-between px-4 py-2 shadow-lg relative">
        <div className="flex items-center gap-4 pl-5">
          <img 
            src={logo} 
            alt="NFCI Logo" 
            className="h-11 w-auto"
          />
        </div>
        
        {/* Desktop Menu */}
        <ul className="list-none flex gap-1 m-0 p-0 flex-1 justify-end hidden lg:flex">
          <li><Link to="/" className="font-libre text-[16px] text-gray-900 cursor-pointer transition-colors duration-300 px-4 py-2 rounded-full bg-gray-50 font-bold">Home</Link></li>
          <li><Link to="/about" className="font-libre text-[16px] text-gray-900 cursor-pointer transition-colors duration-300 px-4 py-2 rounded-full hover:bg-gray-50">About</Link></li>
          <li><Link to="/courses" className="font-libre text-[16px] text-gray-900 cursor-pointer transition-colors duration-300 px-4 py-2 rounded-full hover:bg-gray-50">Courses</Link></li>
          <li><Link to="/placements" className="font-libre text-[16px] text-gray-900 cursor-pointer transition-colors duration-300 px-4 py-2 rounded-full hover:bg-gray-50">Placements</Link></li>
          <li><Link to="/franchise" className="font-libre text-[16px] text-gray-900 cursor-pointer transition-colors duration-300 px-4 py-2 rounded-full hover:bg-gray-50">Franchise</Link></li>
          <li><Link to="/location" className="font-libre text-[16px] text-gray-900 cursor-pointer transition-colors duration-300 px-4 py-2 rounded-full hover:bg-gray-50">Location</Link></li>
        </ul>
        
        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden flex items-center pr-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Desktop Button */}
        <div className="pr-1.5 hidden lg:block">
          <button className="bg-nfci-red text-white border-none px-7 py-3 rounded-full font-libre font-normal text-[14px] tracking-wider cursor-pointer transition-all duration-300 hover:bg-nfci-red-hover hover:scale-105 whitespace-nowrap">
            CONTACT US
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl p-6 lg:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <ul className="list-none flex flex-col gap-4 m-0 p-0">
              <li><Link to="/" className="font-libre text-lg text-gray-900 font-bold border-b border-gray-50 pb-2 block">Home</Link></li>
              <li><Link to="/about" className="font-libre text-lg text-gray-900 border-b border-gray-50 pb-2 block">About</Link></li>
              <li><Link to="/courses" className="font-libre text-lg text-gray-900 border-b border-gray-50 pb-2 block">Courses</Link></li>
              <li><Link to="/placements" className="font-libre text-lg text-gray-900 border-b border-gray-50 pb-2 block">Placements</Link></li>
              <li><Link to="/franchise" className="font-libre text-lg text-gray-900 border-b border-gray-50 pb-2 block">Franchise</Link></li>
              <li><Link to="/location" className="font-libre text-lg text-gray-900 border-b border-gray-50 pb-2 block">Location</Link></li>
            </ul>
            <button className="w-full bg-nfci-red text-white py-4 rounded-xl font-libre font-bold text-lg">
              CONTACT US
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
