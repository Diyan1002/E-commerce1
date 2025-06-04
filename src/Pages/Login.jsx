import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import sgn from "../assets/sign.png";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Login = () => {
  return (
    <div>
      <Banner />
      <Header hideIconsOnMobile={true} />

      <div className="flex flex-col lg:flex-row mt-12 min-h-screen">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 bg-[#CBE4E8] flex items-center justify-center p-6">
          <img
            src={sgn}
            alt="Login Visual"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
          <div className="flex flex-col items-start justify-center w-full max-w-md">
            <h2 className="text-2xl font-inter mb-4 w-full">Log in to Exclusive</h2>
            <p className="text-gray-600 mb-6 w-full">Enter your details below</p>

            <form className="space-y-8 w-full">
              {["Email or Phone Number", "Password"].map((placeholder, idx) => (
                <div key={idx} className="relative">
                  <input
                    type={placeholder === "Password" ? "password" : "text"}
                    placeholder={placeholder}
                    className="peer w-full border-0 border-b-2 border-gray-300 focus:border-[#DB4444] focus:outline-none py-2 placeholder-transparent text-gray-900"
                    required
                  />
                  <label
                    className="absolute left-0 top-2 text-gray-400 text-sm transition-all
                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400 peer-focus:top-[-1rem]
                    peer-focus:text-sm peer-focus:text-[#DB4444]"
                  >
                    {placeholder}
                  </label>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DB4444] transition-all duration-300 peer-focus:w-full"></span>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
                <button
                  type="submit"
                  className="bg-[#DB4444] text-white py-2 px-6 rounded w-full sm:w-auto"
                >
                  Log In
                </button>
                <Link to="/forgot-password" className="text-sm text-[#DB4444]">
                  Forgot Password?
                </Link>
              </div>
            </form>

            <p className="mt-6 text-sm text-center w-full">
              Don't have an account?{" "}
              <Link to="/signup" className="text-gray-800 underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
