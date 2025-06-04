import React from 'react';
import tomImg from '../assets/cruise.png';
import emmaImg from '../assets/watson.png';
import willImg from '../assets/smith.png';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Tom Cruise',
    title: 'Founder & Chairman',
    image: tomImg,
  },
  {
    name: 'Emma Watson',
    title: 'Managing Director',
    image: emmaImg,
  },
  {
    name: 'Will Smith',
    title: 'Product Designer',
    image: willImg,
  },
];

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      {/* Team Cards */}
      <div className="flex flex-wrap justify-center gap-12 mb-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-xs"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[270px] h-[400px] object-cover rounded-md bg-gray-100 mb-4"
            />
            <div className="w-full flex flex-col items-start px-2">
              <h3 className="text-lg font-semibold text-gray-900 text-left">{member.name}</h3>
              <p className="text-sm text-gray-600 text-left">{member.title}</p>
            </div>
            <div className="flex justify-center mr-40 gap-4 mt-3 text-gray-600 text-lg">
              <FaTwitter className="hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex space-x-2 mt-4">
        <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
        <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
        <span className="h-2 w-2 bg-gray-500 rounded-full"></span>
        <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
        <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
      </div>
    </div>
  );
};

export default Team;
