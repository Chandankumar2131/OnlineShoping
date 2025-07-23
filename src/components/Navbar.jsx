import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../assets/Logo.JPg";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="h-10 w-10 object-contain" />
          <span className="text-2xl font-bold text-white">SHOP.STORE</span>
        </div>

        {/* Right: Links */}
        <div className="flex items-center gap-6 text-lg">

          {/* Home Link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold"
                : "text-white hover:text-green-300 transition"
            }
          >
            Home
          </NavLink>

          {/* Cart Link with Badge */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold relative flex items-center"
                : "text-white hover:text-green-300 relative flex items-center transition"
            }
          >
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
            <span className="ml-2">Cart</span>
          </NavLink>

        </div>
      </div>
    </nav>
  );
}
