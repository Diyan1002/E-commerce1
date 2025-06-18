import React, { useState } from "react";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Replace with actual order handling logic
    alert("Order placed successfully!");
  };

  return (
    <div>
      <Banner />
<Header />
      <div className="p-6 md:px-12 lg:px-24">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-gray-500">
          Account / My Account / Product / View Cart /{" "}
          <span className="text-black font-semibold">Checkout</span>
        </nav>

        {/* Checkout Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Billing Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
            <form className="space-y-8">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                className="w-2/3 bg-gray-100 px-4 py-2"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="w-2/3 bg-gray-100 px-4 py-2"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Street Address*"
                className="w-2/3 bg-gray-100 px-4 py-2"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="apartment"
                placeholder="Apartment, floor, etc. (optional)"
                className="w-2/3 bg-gray-100 px-4 py-2"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="city"
                placeholder="Town/City*"
                className="w-2/3 bg-gray-100 px-4 py-2"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number*"
                className="w-2/3 bg-gray-100 px-4 py-2"
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                className="w-2/3 bg-gray-100 px-4 py-2"
                onChange={handleInputChange}
              />
              <div className="flex items-center mt-2">
                <input type="checkbox" id="save" className="mr-2" />
                <label htmlFor="save" className="text-sm">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[400px]  p-6 space-y-4">
            {/* Order items */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src="/path/to/image1.png" alt="LCD Monitor" className="w-10 h-10" />
                <span>LCD Monitor</span>
              </div>
              <span>$650</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src="/path/to/image2.png" alt="Gamepad" className="w-10 h-10" />
                <span>H1 Gamepad</span>
              </div>
              <span>$1100</span>
            </div>

            {/* Totals */}
            <div className="pt-4">
              <div className="flex justify-between border-b">
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="pt-4 space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                />
                Bank
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash on Delivery
              </label>
              <img
                src="https://i.imgur.com/ZtLbYwT.png"
                alt="Payment Methods"
                className="w-40 mt-2"
              />
            </div>

            {/* Coupon */}
            <div className="flex mt-4 gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border flex-1 px-3 py-2"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Apply Coupon
              </button>
            </div>

            {/* Place Order */}
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-red-500 text-white py-2 rounded mt-4"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
