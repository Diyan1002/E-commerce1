import React from "react";
import AboutImage from "../assets/abouti.PNG";
import Banner from "../Components/Banner";
import { useCart } from "../contexts/CartContext";
import StatsSection from "../Components/StatsSection";
import Team from "../Components/Team";
import FeaturesSection from "../Components/Featuressection";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const About = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Banner />
      <Header />

      <main>
        <div className="px-6 py-10 md:px-10">
          <p className="text-sm text-gray-500 mb-2">
            Home / <span className="text-black font-medium">About</span>
          </p>

          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 mt-10">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 mt-10 lg:mt-36 lg:ml-24">
              <h1 className="text-3xl font-bold mb-4 text-left">Our Story</h1>
              <p className="text-gray-900 leading-relaxed text-sm text-left mb-2">
                Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
              </p>
              <p className="text-gray-900 leading-relaxed text-sm text-left">
                Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={AboutImage}
                alt="About our company"
                className="rounded w-full max-w-md sm:max-w-lg lg:ml-10 mt-6 lg:mt-12"
              />
            </div>
          </div>
        </div>

        <StatsSection />
        <Team />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
