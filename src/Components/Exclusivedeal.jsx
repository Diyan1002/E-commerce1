import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "../assets/search.png";
import HeartIcon from "../assets/heart.png";
import BasketIcon from "../assets/basket.png";
import IPhoneImage from "../assets/iphone.png";
import Apple from "../assets/apple.png";
import { useCart } from "../contexts/CartContext";
import { useLike } from "../contexts/LikeContext";
import { Menu, X } from "lucide-react";

const Exclusivedeal = () => {
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
    <div className="font-sans bg-white text-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 px-4 md:px-6 py-3 sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-xl font-bold">Exclusive</h1>

          {/* Desktop Navigation */}
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

          {/* Search + Icons */}
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

            <div className="relative">
              <img src={HeartIcon} alt="Wishlist" className="w-5 h-5 cursor-pointer" />
              {likeCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {likeCount}
                </span>
              )}
            </div>

            <div className="relative">
              <Link to="/cart">
                <img src={BasketIcon} alt="Cart" className="w-5 h-5 cursor-pointer" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="block lg:hidden ml-2"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
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

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row mt-6 px-4 md:px-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-56 mb-6 lg:mb-0 pr-0 lg:pr-4 border-b lg:border-b-0 lg:border-r border-gray-200">
          <ul className="text-sm space-y-4 font-medium">
            {[
              "Woman's Fashion",
              "Men's Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby's & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-blue-600 flex justify-between"
              >
                <span>{item}</span>
                {(item === "Woman's Fashion" || item === "Men's Fashion") && (
                  <span>›</span>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Promo Banner */}
        <main className="flex-1">
          <div
            className="overflow-hidden relative h-80 flex items-center rounded-lg"
            style={{
              background: "linear-gradient(90deg, #000 90%, #1a1a1a 90%)",
            }}
          >
            {/* Promo Text */}
            <div className="text-white pl-6 w-1/2">
              <div className="flex items-center gap-2 mb-2">
                <img src={Apple} alt="Apple" className="w-8 h-9" />
                <span className="text-sm">iPhone 14 Series</span>
              </div>
              <h2 className="text-4xl font-bold mb-1">
                Up to 10% <br /> off Voucher
              </h2>
              <button className="mt-2 inline-flex items-center gap-2 text-white font-medium">
                Shop Now <span className="text-lg">→</span>
              </button>
            </div>

            {/* iPhone Image */}
            <img
              src={IPhoneImage}
              alt="iPhone"
              className="absolute right-0 bottom-0 h-full object-contain max-w-[50%]"
            />

            {/* Carousel Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === 3 ? "bg-red-500" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Exclusivedeal;
