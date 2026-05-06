import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const AboutNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white sticky top-0 z-[1000] border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-15 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="NFCI Logo" 
              className="h-12 md:h-14 w-auto"
            />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          <ul className="list-none flex gap-1 m-0 p-0 mr-4">
            <li>
              <Link to="/" className="font-libre text-[16px] text-gray-900 cursor-pointer transition-all duration-300 px-6 py-2.5 rounded-full bg-gray-50 font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="font-libre text-[16px] text-gray-900 cursor-pointer transition-all duration-300 px-6 py-2.5 rounded-full hover:bg-gray-50 font-medium">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/placements" className="font-libre text-[16px] text-gray-900 cursor-pointer transition-all duration-300 px-6 py-2.5 rounded-full hover:bg-gray-50 font-medium">
                Placements
              </Link>
            </li>
            <li>
              <Link to="/franchise" className="font-libre text-[16px] text-gray-900 cursor-pointer transition-all duration-300 px-6 py-2.5 rounded-full hover:bg-gray-50 font-medium">
                Franchise
              </Link>
            </li>
            <li>
              <Link to="/location" className="font-libre text-[16px] text-gray-900 cursor-pointer transition-all duration-300 px-6 py-2.5 rounded-full hover:bg-gray-50 font-medium">
                Location
              </Link>
            </li>
          </ul>
          
          <button className="bg-[#A3231D] text-white border-none px-8 py-3 rounded-full font-libre font-bold text-[14px] tracking-wide cursor-pointer transition-all duration-300 hover:bg-[#8B1E19] whitespace-nowrap">
            CONTACT US
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 lg:hidden flex flex-col gap-4 border-t border-gray-50">
            <ul className="list-none flex flex-col gap-2 m-0 p-0">
              <li><Link to="/" className="block font-libre text-lg text-gray-900 px-4 py-3 rounded-xl bg-gray-50 font-bold">Home</Link></li>
              <li><Link to="/courses" className="block font-libre text-lg text-gray-900 px-4 py-3 rounded-xl hover:bg-gray-50">Courses</Link></li>
              <li><Link to="/placements" className="block font-libre text-lg text-gray-900 px-4 py-3 rounded-xl hover:bg-gray-50">Placements</Link></li>
              <li><Link to="/franchise" className="block font-libre text-lg text-gray-900 px-4 py-3 rounded-xl hover:bg-gray-50">Franchise</Link></li>
              <li><Link to="/location" className="block font-libre text-lg text-gray-900 px-4 py-3 rounded-xl hover:bg-gray-50">Location</Link></li>
            </ul>
            <button className="w-full bg-[#A3231D] text-white py-4 rounded-xl font-libre font-bold text-lg">
              CONTACT US
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AboutNavbar;
