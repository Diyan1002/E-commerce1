import React from 'react';
import qrCode from '../assets/qrcode.png';
import googlePlay from '../assets/playstore.png';
import appStore from '../assets/appstore.png';
import sendIcon from '../assets/send.png';
import instagramIcon from '../assets/insta.png';
import linkedinIcon from '../assets/linkedin.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 lg:px-24 py-10 text-sm font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
        {/* Exclusive */}
        <div>
          <h3 className="text-base font-semibold mb-3">Exclusive</h3>
          <p className="mb-1">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-500 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 text-xs text-white placeholder:text-gray-400 flex-1 outline-none"
            />
            <button className="p-2">
              <img src={sendIcon} alt="Send" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-base font-semibold mb-3">Support</h3>
          <p className="mb-1">111 Bijoy Sarani, Dhaka,</p>
          <p className="mb-1">DH 1515, Bangladesh.</p>
          <p className="mb-1">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-base font-semibold mb-3">Account</h3>
          <ul className="space-y-1">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-base font-semibold mb-3">Quick Link</h3>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-base font-semibold mb-3">Download App</h3>
          <p className="text-xs text-gray-400 mb-3">Save $3 with App New User Only</p>
          <div className="flex gap-3 items-start mb-3">
            <img src={qrCode} alt="QR Code" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <img src={googlePlay} alt="Google Play" className="w-28" />
              <img src={appStore} alt="App Store" className="w-28" />
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <img src={instagramIcon} alt="Instagram" className="w-5 h-5 cursor-pointer" />
            <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
