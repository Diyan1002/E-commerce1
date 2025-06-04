import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GamepadImage from "../assets/gamepad.png";
import KeyboardImage from "../assets/keyboard.png";
import MonitorImage from "../assets/tv.png";
import ChairImage from "../assets/chair.png";
import { useCart } from "../contexts/CartContext";
import { useLike } from "../contexts/LikeContext";

const products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    original: 160,
    discount: "-40%",
    rating: 4.5,
    reviews: 88,
    image: GamepadImage,
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    price: 960,
    original: 1160,
    discount: "-35%",
    rating: 4,
    reviews: 75,
    image: KeyboardImage,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    original: 400,
    discount: "-30%",
    rating: 5,
    reviews: 99,
    image: MonitorImage,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    price: 375,
    original: 400,
    discount: "-25%",
    rating: 4.5,
    reviews: 99,
    image: ChairImage,
  },
];

const FlashSales = () => {
  const { addToCart } = useCart();
  const { addLike } = useLike();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 mt-12 bg-white font-sans">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6">
        {/* Left */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-8">
          {/* Title and Badge */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-5 bg-red-500 rounded-sm" />
              <p className="text-sm text-red-500 font-semibold">Today's</p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Flash Sales</h2>
          </div>

          {/* Timer */}
          <div className="flex gap-2 sm:gap-3 text-center text-sm font-semibold">
            {["Days", "Hours", "Minutes", "Seconds"].map((unit, index, arr) => (
              <div key={unit} className="flex items-center gap-1">
                <div className="flex flex-col items-center">
                  <div className="text-xs text-black">{unit}</div>
                  <div className="text-black text-lg sm:text-2xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 rounded-md font-bold">
                    03
                  </div>
                </div>
                {index < arr.length - 1 && (
                  <div className="text-lg sm:text-xl font-bold text-red-500">:</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button className="p-2 border bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <FiChevronLeft />
          </button>
          <button className="p-2 border bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition-all"
          >
            {/* Discount Badge */}
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
              {product.discount}
            </span>

            {/* Wishlist Icon */}
            <div className="absolute top-2 right-2 flex flex-col items-center gap-2">
              <FaHeart
                className="text-gray-400 cursor-pointer hover:text-red-500"
                onClick={addLike}
              />
            </div>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 object-contain mb-4"
            />

            {/* Title */}
            <h3 className="text-sm font-medium">{product.title}</h3>

            {/* Price */}
            <div className="flex items-center space-x-2 text-sm mt-1">
              <span className="text-red-600 font-semibold">${product.price}</span>
              <span className="line-through text-gray-400">${product.original}</span>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-1 text-xs mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="text-gray-500 ml-1">({product.reviews})</span>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(product)}
              className="absolute bottom-4 left-4 right-4 hidden group-hover:block bg-black text-white py-2 rounded text-sm transition"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-red-500 text-white px-6 py-2 rounded-md font-medium hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
