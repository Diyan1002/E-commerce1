import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import Banner from "../Components/Banner";
import SearchIcon from "../assets/search.png";
import HeartIcon from "../assets/heart.png";
import BasketIcon from "../assets/basket.png";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom"; // ADD THIS

const CartPage = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();
  const navigate = useNavigate(); // ADD THIS

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleQuantityChange = (id, quantity) => {
    updateCartItemQuantity(id, quantity); // Assumes your context has this function
  };

  const cartSubtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

    const goToCheckout = () => {
    navigate("/checkout"); // Navigate to checkout page
  };

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
        <h2 className="text-2xl font-bold mb-4">Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {/* Cart Table */}
            <div className="overflow-x-auto">
              <table className="w-full border text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left p-2">Product</th>
                    <th className="text-left p-2">Price</th>
                    <th className="text-left p-2">Quantity</th>
                    <th className="text-left p-2">Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-2 flex items-center gap-4">
                        <img src={item.image} alt={item.title} className="w-16 h-16" />
                        <span>{item.title}</span>
                      </td>
                      <td className="p-2">${item.price}</td>
                      <td className="p-2">
                        <select
                          className="border rounded px-2 py-1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-2">${item.price * item.quantity}</td>
                      <td className="p-2">
                        <button
                          className="text-red-500"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom section: Coupon + Cart Total */}
            <div className="mt-8 flex flex-wrap justify-between items-start gap-8">
              <div>
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border px-4 py-2 mr-2"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Apply Coupon
                </button>
              </div>

              <div className="border p-6 w-full sm:w-96">
                <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>${cartSubtotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>Total:</span>
                  <span>${cartSubtotal}</span>
                </div>
                 <button
    onClick={goToCheckout}
    className="mt-4 bg-red-500 text-white w-full py-2 rounded"
  >
    Proceed to checkout
  </button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-28">
        <Footer />
      </div>
    </div>
  );
};

export default CartPage;
