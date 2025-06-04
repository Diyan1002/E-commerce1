import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "../assets/search.png";
import HeartIcon from "../assets/heart.png";
import BasketIcon from "../assets/basket.png";
import { useCart } from "../contexts/CartContext";
import { useLike } from "../contexts/LikeContext";
import { Menu, X } from "lucide-react";

const Header = ({ hideIconsOnMobile = false }) => {
  const { cart } = useCart();
  const { likeCount } = useLike();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Contact", to: "/contact" },
    { name: "About", to: "/about" },
    { name: "Sign Up", to: "/signup" },
  ];

  return (
    <header className="border-b border-gray-200 px-4 md:px-6 py-3 sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Exclusive</h1>
        <nav className="hidden lg:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black"
                  : "hover:text-black transition"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md pl-10 pr-3 py-1.5 w-40 md:w-60 text-sm focus:outline-none"
            />
            <img
              src={SearchIcon}
              alt="Search"
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2"
            />
          </div>
          {/* Hide icons on mobile if prop is true */}
          <div className={`${hideIconsOnMobile ? "hidden md:block" : ""} relative`}>
            <img src={HeartIcon} alt="Wishlist" className="w-5 h-5 cursor-pointer" />
            {likeCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {likeCount}
              </span>
            )}
          </div>
          <div className={`${hideIconsOnMobile ? "hidden md:block" : ""} relative`}>
            <Link to="/cart">
              <img src={BasketIcon} alt="Cart" className="w-5 h-5 cursor-pointer" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block lg:hidden ml-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="mt-2 lg:hidden flex flex-col space-y-2 px-1 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="py-1 px-2 hover:bg-gray-100 rounded"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;