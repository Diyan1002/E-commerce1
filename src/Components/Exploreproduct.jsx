import React, { useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: "$100",
    image: product1,
    rating: 3,
    reviews: 35,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: "$360",
    image: product2,
    rating: 4,
    reviews: 96,
    cartButton: true,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: "$700",
    image: product3,
    rating: 5,
    reviews: 325,
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: "$500",
    image: product4,
    rating: 4,
    reviews: 145,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: "$960",
    image: product5,
    rating: 4,
    reviews: 65,
    featured: true,
    colors: ["#000000", "#f43f5e"],
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: "$1160",
    image: product6,
    rating: 3,
    reviews: 35,
    colors: ["#22c55e", "#ff0000"],
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: "$660",
    image: product7,
    rating: 5,
    reviews: 95,
    featured: true,
    colors: ["#000000", "#a855f7"],
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: "$660",
    image: product8,
    rating: 4,
    reviews: 55,
    colors: ["#15803d", "#a855f7"],
  },
];

const ProductCard = ({ product }) => {
  // Track selected color for each product card
  const [selectedColor, setSelectedColor] = useState(
    product.colors ? product.colors[0] : null
  );

  return (
    <div className="bg-white p-3 relative group">
      {/* Icons */}
      <div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
        <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
        <FaEye className="text-gray-400 hover:text-black cursor-pointer" />
      </div>

      {/* NEW Badge */}
      {product.featured && (
        <span className="absolute top-5 left-6 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
          NEW
        </span>
      )}

      {/* Image box */}
      <div className="bg-gray-100 rounded-lg flex justify-center items-center h-40 mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-36 object-contain"
        />
      </div>

      {/* Add to Cart button on hover */}
      <button className="w-full bg-black text-white text-sm py-1 rounded hover:bg-gray-800 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Add To Cart
      </button>

      {/* Product details */}
      <h3 className="text-sm font-medium text-gray-800 mb-1">
        {product.name}
      </h3>
      <p className="text-red-500 font-semibold text-sm">{product.price}</p>
      <div className="flex items-center space-x-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-yellow-400 text-sm ${
              i < product.rating ? "opacity-100" : "opacity-30"
            }`}
          >
            ★
          </span>
        ))}
        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
      </div>

      {/* Color dots */}
      {product.colors && (
        <div className="flex mt-2 gap-2">
          {product.colors.map((color, idx) => (
            <span
              key={idx}
              className={`w-4 h-4 rounded-full border border-gray-300 cursor-pointer transition
                ${selectedColor === color ? "ring-2 ring-black border-black" : ""}
              `}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <div className="flex justify-between  items-center mb-6">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <div className="w-3 h-6 bg-red-500 rounded-sm"></div>
            <p className="text-red-500 font-semibold">Our Products</p>
          </div>
          <h2 className="text-3xl font-bold mb-6">Explore Our Products</h2>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-gray-100 rounded-full">
            <FiChevronLeft />
          </button>
          <button className="p-2 bg-gray-100 rounded-full">
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;