import React from "react";

// Import icons
import SellerIcon from "../assets/seller.png";
import MoneyIcon from "../assets/dollar.png";
import CustomerIcon from "../assets/seller.png";
import BagIcon from "../assets/bag.png";

const statsData = [
  {
    icon: SellerIcon,
    number: "10.5k",
    label: "Sellers active our site",
  },
  {
    icon: MoneyIcon,
    number: "33k",
    label: "Monthly Productuct Sale",
  },
  {
    icon: CustomerIcon,
    number: "45.5k",
    label: "Customer active in our site",
  },
  {
    icon: BagIcon,
    number: "25k",
    label: "Annual gross sale in our site",
  },
];

const StatsSection = () => {
  return (
    <div className="flex justify-center gap-16 flex-wrap py-10">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="w-56 h-48 border rounded-md flex flex-col items-center justify-center transition-all duration-300 cursor-pointer bg-white text-black hover:bg-red-500 hover:text-white"
        >
          <img src={stat.icon} alt={stat.label} className="w-10 h-10 mb-2" />
          <h2 className="text-xl font-bold">{stat.number}</h2>
          <p className="text-sm text-center px-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;