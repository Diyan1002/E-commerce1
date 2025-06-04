import React from "react";
import PhoneIcon from "../assets/phone.png";
import ComputerIcon from "../assets/computer.png";
import SmartwatchIcon from "../assets/smartwatch.png";
import CameraIcon from "../assets/camera.png";
import HeadphonesIcon from "../assets/headphone.png";
import GamingIcon from "../assets/game.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const categories = [
  { id: 1, name: "Phones", icon: PhoneIcon },
  { id: 2, name: "Computers", icon: ComputerIcon },
  { id: 3, name: "SmartWatch", icon: SmartwatchIcon },
  { id: 4, name: "Camera", icon: CameraIcon, active: true },
  { id: 5, name: "HeadPhones", icon: HeadphonesIcon },
  { id: 6, name: "Gaming", icon: GamingIcon },
];

const BrowseCategory = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 bg-white border-t border-b font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-5 bg-red-500 rounded-sm" />
            <p className="text-sm text-red-500 font-semibold">Categories</p>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">Browse By Category</h2>
        </div>

        {/* Arrows (optional for desktop carousel) */}
        <div className="hidden sm:flex gap-2">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <FiChevronLeft />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Scrollable Category Cards (Mobile First) */}
      <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`flex-shrink-0 sm:flex-shrink rounded-xl border w-28 sm:w-full h-28 sm:h-32 flex flex-col justify-center items-center text-center px-4 transition-all duration-300 cursor-pointer ${
              cat.active
                ? "bg-red-500 text-white shadow-md"
                : "bg-white hover:bg-red-500 hover:text-white"
            }`}
          >
            <img
              src={cat.icon}
              alt={cat.name}
              className="w-8 h-8 sm:w-10 sm:h-10 mb-2 object-contain"
            />
            <span className="text-sm font-medium">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCategory;
