import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../Components/Banner";
import sgn from "../assets/sign.png";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  return (
    <div>
      <Banner />
      <Header hideIconsOnMobile={true} />

      <div className="flex flex-col lg:flex-row mt-12 min-h-screen">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 bg-[#CBE4E8] flex items-center justify-center p-6">
          <img
            src={sgn}
            alt="Signup Visual"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
          <div className="flex flex-col items-start justify-center w-full max-w-md">
            <h2 className="text-2xl font-inter mb-4 w-full">Create an account</h2>
            <p className="text-gray-600 mb-6 w-full">Enter your details below</p>

            <form className="space-y-8 w-full" onSubmit={handleSubmit}>
              {["name", "email", "phone", "password"].map((field) => (
                <div className="relative" key={field}>
                  <input
                    type={field === "password" ? "password" : field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="peer w-full border-0 border-b-2 border-gray-300 focus:border-[#DB4444] focus:outline-none py-2 placeholder-transparent text-gray-900"
                    required
                  />
                  <label
                    className="absolute left-0 top-2 text-gray-400 text-sm transition-all
                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
                    peer-placeholder-shown:text-gray-400 peer-focus:top-[-1rem]
                    peer-focus:text-sm peer-focus:text-[#DB4444]"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DB4444] transition-all duration-300 peer-focus:w-full"></span>
                </div>
              ))}

              <button
                type="submit"
                className="bg-[#DB4444] text-white py-2 px-4 w-full"
              >
                Create Account
              </button>
            </form>

            <button className="mt-4 border py-2 px-4 w-full flex items-center justify-center gap-2">
              <img
                src="/path-to-your-google-icon.png"
                alt="Google"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>

            <p className="mt-4 text-sm text-center w-full">
              Already have an account?{" "}
              <Link to="/login" className="text-gray-800 underline">
                Log in
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

export default Signup;
