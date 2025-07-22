import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../assets/Logo.jpg';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="bg-cyan-200 px-6 py-3 shadow-md">
      <div className="flex justify-between items-center">
        {/* ✅ Adjusted logo size */}
        <NavLink to="/">
<div>
     <img src={Logo} alt="Logo" className="h-12 w-auto object-contain" />
</div>
        </NavLink>
       

        {/* ✅ Navigation */}
        <div className="flex items-center gap-4 text-lg font-semibold">
        <NavLink to="/">
              <p className="cursor-pointer hover:text-cyan-700 transition">Home</p>
        </NavLink>
         <NavLink to='/cart'>
            <div>
                 <FaShoppingCart className="text-xl cursor-pointer" />
            </div>
         </NavLink>
        </div>
      </div>
    </div>
  );
}
