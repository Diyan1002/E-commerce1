import React from 'react';
import ps5Img from '../assets/ps5.png';
import womenImg from '../assets/women.png';
import speakersImg from '../assets/speakers.png';
import perfumeImg from '../assets/perfume.png';

const NewArrival = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-6 bg-red-500 rounded-sm"></div>
          <span className="text-sm text-red-500 font-semibold">Featured</span>
        </div>
        <h2 className="text-2xl font-bold">New Arrival</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left: Large PS5 card */}
        <div className="lg:col-span-2 bg-black rounded-xl overflow-hidden relative h-[500px]">
          <img src={ps5Img} alt="PlayStation 5" className="w-30 h-54 ml-20 object-cover" />
          <div className="absolute bottom-6 left-6 text-white max-w-[70%]">
            <h3 className="text-xl font-semibold">PlayStation 5</h3>
            <p className="text-xs mb-3">Black and White version of the PS5<br /> coming out on sale.</p>
            <div className="w-14 h-px bg-white mb-1"></div>
            <span className="text-sm underline-offset-2 cursor-pointer">Shop Now</span>
          </div>
        </div>

        {/* Right: 1 card on top, 2 cards below */}
        <div className="flex flex-col gap-4">
          {/* Top Right: Women's Collection */}
          <div className="bg-black rounded-xl overflow-hidden relative h-[195px]">
            <img src={womenImg} alt="Women's Collections" className="w-30 h-full ml-24 object-cover opacity-60" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Women’s Collections</h3>
              <p className="text-xs mb-2">Featured woman collections that<br /> give you another vibe.</p>
              <div className="w-14 h-px bg-white mb-1"></div>
              <span className="text-sm underline-offset-2 cursor-pointer">Shop Now</span>
            </div>
          </div>

          {/* Bottom: 2 images side-by-side */}
          <div className="grid grid-cols-2 gap-4">
            {/* Speakers */}
            <div className="bg-black rounded-xl overflow-hidden relative h-[290px]">
              <img src={speakersImg} alt="Speakers" className="w-30 h-44 ml-6 mt-8 object-cover opacity-70" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Speakers</h3>
                <p className="text-xs mb-2">Amazon wireless speakers</p>
                <div className="w-14 h-px bg-white mb-1"></div>
                <span className="text-sm underline-offset-2 cursor-pointer">Shop Now</span>
              </div>
            </div>

            {/* Perfume */}
            <div className="bg-black rounded-xl overflow-hidden relative h-[290px]">
              <img src={perfumeImg} alt="Perfume" className="w-30 h-40 ml-6 mt-12 object-cover opacity-70" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Perfume</h3>
                <p className="text-xs mb-2">GUCCI INTENSE OUD EDP</p>
                <div className="w-14 h-px bg-white mb-1"></div>
                <span className="text-sm underline-offset-2 cursor-pointer">Shop Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
