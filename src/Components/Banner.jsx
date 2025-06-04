import React from 'react';
import { ChevronDown } from 'lucide-react';

const Banner = () => {
  return (
    <div className="bg-black text-white text-sm px-4 py-3 flex justify-between items-center w-full font-sans">
      <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }} className="text-center w-full">
        <span className="tracking-wide">
          Summer Sale For All Swim Suits And Free Express Delivery – <span className="font-semibold">OFF 50%</span>!{' '}
        </span>
        <span className="underline font-semibold ml-2 cursor-pointer">ShopNow</span>
      </div>
      <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }} className="absolute right-40 flex items-center gap-1 text-sm">
        English <ChevronDown size={14} />
      </div>
    </div>
  );
};

export default Banner;
