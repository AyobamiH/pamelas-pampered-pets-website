import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="w-full bg-white py-4 mt-8 border-t  text-white ">
      <div className="container mx-auto px-4 flex justify-between items-center text-center">
        <div className="text-left flex items-center space-x-2">
            <Link to="/">

                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width="32" height="32" fill="none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32" fill="#030303" x="0" y="0" opacity="100%">
                    <path d="M256 224c-79.37 0-191.1 122.7-191.1 200.2C64.02 459.1 90.76 480 135.8 480C184.6 480 216.9 454.9 256 454.9C295.5 454.9 327.9 480 376.2 480c44.1 0 71.74-20.88 71.74-55.75C447.1 346.8 335.4 224 256 224zM108.8 211.4c-10.37-34.62-42.5-57.12-71.62-50.12S-7.104 202 3.27 236.6C13.64 271.3 45.77 293.8 74.89 286.8S119.1 246 108.8 211.4zM193.5 190.6c30.87-8.125 46.37-49.1 34.5-93.37s-46.5-71.1-77.49-63.87c-30.87 8.125-46.37 49.1-34.5 93.37C127.9 170.1 162.5 198.8 193.5 190.6zM474.9 161.3c-29.12-6.1-61.25 15.5-71.62 50.12c-10.37 34.63 4.75 68.37 33.87 75.37c29.12 6.1 61.12-15.5 71.62-50.12C519.1 202 503.1 168.3 474.9 161.3zM318.5 190.6c30.1 8.125 65.62-20.5 77.49-63.87c11.87-43.37-3.625-85.25-34.5-93.37c-30.1-8.125-65.62 20.5-77.49 63.87C272.1 140.6 287.6 182.5 318.5 190.6z"></path>
                </svg>
                <defs>
                    <filter id="filter_dshadow_0_0_0_00000014" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="bg-fix"></feFlood>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="alpha"></feColorMatrix>
                    <feOffset dx="0" dy="0"></feOffset>
                    <feGaussianBlur stdDeviation="0"></feGaussianBlur>
                    <feComposite in2="alpha" operator="out"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                    <feBlend mode="normal" in2="bg-fix" result="bg-fix-filter_dshadow_0_0_0_00000014"></feBlend>
                    <feBlend in="SourceGraphic" in2="bg-fix-filter_dshadow_0_0_0_00000014" result="shape"></feBlend>
                    </filter>
                </defs>
            </svg>
            
            </Link>
          <div>
            <p className="text-sm text-gray-700 font-light">
                Pamela's Pampered Pets <br />
                Your trusted pet care partner since 1997
            </p>
            <p className="text-sm text-gray-700 font-light">
                Developed By Ayobami John Haastrup
            </p>
          </div>
        </div>
        <div className="text-right">

          
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-sm text-gray-700 hover:text-black">Help center</a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-700 hover:text-black">FAQs</a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-700 hover:text-black">Customer support</a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-700 hover:text-black">How-to guides</a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-700 hover:text-black">Get in touch</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
