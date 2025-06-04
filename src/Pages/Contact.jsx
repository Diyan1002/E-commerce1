import React from "react";
import CallIcon from "../assets/call.png";
import MailIcon from "../assets/mail.png";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import { useLike } from "../contexts/LikeContext";
import Header from "../Components/Header"; 
import { useCart } from "../contexts/CartContext"; // Add this import
import Footer from "../Components/Footer"; // Import Footer component
const Contact = () => {
  const { likeCount } = useLike();
  const { cart } = useCart(); // Use the cart context
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Banner />

      <Header />
      <div className="px-10 py-8 font-sans">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <span className="text-gray-400">Home</span> / <span className="text-black">Contact</span>
        </div>

        {/* Contact Layout */}
        <div className="flex gap-10">
          {/* Contact Info (Left) */}
          <div className="w-1/3 bg-white p-6">
            {/* Call Section */}
            <div className="flex items-start gap-4 mb-6">
              <img src={CallIcon} alt="Call Icon" className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Call To Us</h3>
                <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
                <p className="text-sm text-gray-800 mt-1">Phone: +8801611112222</p>
              </div>
            </div>

            <hr className="my-4 h-1.5 bg-gray-300 border-0" />

            {/* Mail Section */}
            <div className="flex items-start gap-4">
              <img src={MailIcon} alt="Mail Icon" className="w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Write To Us</h3>
                <p className="text-sm text-gray-600">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-sm text-gray-800 mt-1">Emails: customer@exclusive.com</p>
                <p className="text-sm text-gray-800">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="flex-1 bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="border border-gray-300 bg-gray-100 rounded px-4 py-2 text-sm w-full"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="border border-gray-300 bg-gray-100 rounded px-4 py-2 text-sm w-full"
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="border border-gray-300 bg-gray-100 rounded px-4 py-2 text-sm w-full"
              />
            </div>
            <textarea
              rows="6"
              placeholder="Your Message"
              className="border border-gray-300 bg-gray-100 rounded px-4 py-2 text-sm w-full mb-4"
            />
            <div className="flex justify-end">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded text-sm">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28">
      <Footer />
      </div>
    </div>
  );
};

export default Contact;