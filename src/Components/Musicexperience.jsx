import React from "react";
import speakerImage from "../assets/Music.png";

const MusicBanner = () => {
  return (
    <div className="w-full bg-white flex justify-center py-10">
      <div className="bg-black text-white flex flex-col md:flex-row items-center justify-between p-6 md:p-10  max-w-6xl w-full">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <p className="text-green-500 font-semibold">Categories</p>
          <h1 className="text-3xl md:text-5xl font-bold">Enhance Your<br /> Music Experience</h1>

          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {[
              { label: "Hours", value: "23" },
              { label: "Days", value: "05" },
              { label: "Minutes", value: "59" },
              { label: "Seconds", value: "35" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white text-black rounded-full p-4 w-20 h-20 flex flex-col items-center justify-center"
              >
                <span className="font-bold text-lg">{item.value}</span>
                <span className="text-xs">{item.label}</span>
              </div>
            ))}
          </div>

          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded">
            Buy Now!
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img src={speakerImage} alt="Speaker" className="max-w-md w-full" />
        </div>
      </div>
    </div>
  );
};

export default MusicBanner;