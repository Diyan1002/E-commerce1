import React from "react";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";

import CoatImg from "../assets/coat.png";
import GucciBagImg from "../assets/gucci.png";
import CoolerImg from "../assets/speaker.png";
import BookshelfImg from "../assets/shelf.png";

const products = [
  {
    id: 1,
    title: "The North Coat",
    image: CoatImg,
    price: 260,
    original: 360,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    title: "Gucci Duffle Bag",
    image: GucciBagImg,
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 3,
    title: "RGB Liquid CPU Cooler",
    image: CoolerImg,
    price: 160,
    original: 170,
    rating: 5,
    reviews: 65,
  },
  {
    id: 4,
    title: "Small Bookshelf",
    image: BookshelfImg,
    price: 360,
    original: null,
    rating: 5,
    reviews: 65,
  },
];

const BestSellingProducts = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 bg-white border-t border-b font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-5 bg-red-500 rounded-sm" />
            <p className="text-sm text-red-500 font-semibold">This Month</p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">Best Selling Products</h2>
        </div>
        <button className="bg-red-500 text-white px-6 py-2 rounded font-medium hover:bg-red-600 transition-colors">
          View All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-gray-100 border p-4 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
          >
            {/* Icons */}
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer transition" />
              <FaEye className="text-gray-400 hover:text-black cursor-pointer transition" />
            </div>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-4"
            />

            {/* Title */}
            <h3 className="text-base font-medium mb-1">{product.title}</h3>

            {/* Price */}
            <div className="flex items-center space-x-2 text-sm mb-1">
              <span className="text-red-600 font-semibold">${product.price}</span>
              {product.original && (
                <span className="line-through text-gray-400">${product.original}</span>
              )}
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-1 text-yellow-500 text-xs">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="text-gray-500 ml-1">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
