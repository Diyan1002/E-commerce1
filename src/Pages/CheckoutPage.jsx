import React from "react";
import { Link } from "react-router-dom"; // Add this import
import { useCart } from "../contexts/CartContext";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import SearchIcon from "../assets/search.png";
import HeartIcon from "../assets/heart.png";
import BasketIcon from "../assets/basket.png";

const CheckoutPage = () => {
  const { cart } = useCart();

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total items for cart badge
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Banner />
      <header className="border-b border-gray-200 px-6 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold ">Exclusive</h1>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <nav className="flex space-x-6 text-sm font-medium">
              <Link to="/" className="text-black border-b-2 border-black">
                Home
              </Link>
              <Link to="/contact" className="hover:text-black">
                Contact
              </Link>
              <Link to="/about" className="hover:text-black">
                About
              </Link>
              <Link to="/signup" className="hover:text-black">
                Sign Up
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4 mr-24">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="border border-gray-300 rounded-md pl-10 pr-3 py-1.5 w-64 text-sm focus:outline-none"
              />
              <img
                src={SearchIcon}
                alt="Search"
                className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
            <img src={HeartIcon} alt="Wishlist" className="w-4 h-4 cursor-pointer" />
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
          </div>
        </div>
      </header>
      <div className="p-6">
        <p className="text-xs text-gray-500 mb-4">
          Account / My Account / Product / View Cart / <strong>CheckOut</strong>
        </p>
        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
        <div className="flex flex-wrap gap-10">
          {/* Billing Form */}
          <div className="flex-1 min-w-[300px]">
            <form className="space-y-4">
              <input type="text" placeholder="First Name*" className="w-full border px-4 py-2" />
              <input type="text" placeholder="Company Name" className="w-full border px-4 py-2" />
              <input type="text" placeholder="Street Address*" className="w-full border px-4 py-2" />
              <input type="text" placeholder="Apartment, floor, etc. (optional)" className="w-full border px-4 py-2" />
              <input type="text" placeholder="Town/City*" className="w-full border px-4 py-2" />
              <input type="text" placeholder="Phone Number*" className="w-full border px-4 py-2" />
              <input type="email" placeholder="Email Address*" className="w-full border px-4 py-2" />
              <label className="flex items-center space-x-2 text-sm">
                <input type="checkbox" />
                <span>Save this information for faster check-out next time</span>
              </label>
            </form>
          </div>

          {/* Order Summary */}
          <div className="border p-6 w-full sm:w-[400px] space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.title}</span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between border-t pt-2">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>

            {/* Payment Options */}
            <div>
              <label className="block mb-2">
                <input type="radio" name="payment" className="mr-2" />
                Bank
              </label>
              <label className="block mb-2">
                <input type="radio" name="payment" className="mr-2" />
                Cash on delivery
              </label>
            </div>

            {/* Coupon + Place Order */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border px-4 py-2 flex-1"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Apply Coupon
              </button>
            </div>
            <button className="w-full bg-red-500 text-white py-2 mt-2 rounded">
              Place Order
            </button>
          </div>
        </div>

      <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;