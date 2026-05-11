import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import site_logo from "../images/Site_logo_final.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [offeringsOpen, setOfferingsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Navbar Container */}
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={site_logo}
              alt="ArthViva Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-[17px] font-semibold text-gray-800">
            {/* Home */}
            <li>
              <a
                href="/"
                className="hover:text-blue-900 transition duration-300"
              >
                Home
              </a>
            </li>

            {/* About */}
            <li>
              <a
                href="/about"
                className="hover:text-blue-900 transition duration-300"
              >
                About Us
              </a>
            </li>

            {/* Offerings */}
            <li className="relative group">
              <button className="flex items-center gap-2 hover:text-blue-900 transition duration-300">
                Offerings
                <FaChevronDown className="text-sm mt-1" />
              </button>

              <div className="absolute top-12 left-0 bg-white shadow-xl rounded-xl w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3">
                <a
                  href="/product-basket"
                  className="block px-6 py-3 hover:bg-gray-100 transition"
                >
                  Product Basket
                </a>

                <a
                  href="/client-service"
                  className="block px-6 py-3 hover:bg-gray-100 transition"
                >
                  Client Service
                </a>
              </div>
            </li>

            {/* Resources */}
            <li className="relative group">
              <button className="flex items-center gap-2 hover:text-blue-900 transition duration-300">
                Resources
                <FaChevronDown className="text-sm mt-1" />
              </button>

              <div className="absolute top-12 left-0 bg-white shadow-xl rounded-xl w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3">
                <a
                  href="/video-clips"
                  className="block px-6 py-3 hover:bg-gray-100 transition"
                >
                  Video Clips
                </a>

                <a
                  href="/image-gallery"
                  className="block px-6 py-3 hover:bg-gray-100 transition"
                >
                  Image Gallery
                </a>

                <a
                  href="/fund-manager-interviews"
                  className="block px-6 py-3 hover:bg-gray-100 transition"
                >
                  Fund Manager Interviews
                </a>
              </div>
            </li>

            {/* Tools */}
            <li className="relative group">
              <button className="flex items-center gap-2 hover:text-blue-900 transition duration-300">
                Tools
                <FaChevronDown className="text-sm mt-1" />
              </button>

              <div className="absolute top-12 left-0 bg-white shadow-xl rounded-xl w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3">
                {/* MF CALCULATORS - OPEN IN NEW TAB */}

                <a
                  href="https://www.njwealth.in/mfcalculator"
                  className="block px-6 py-3 hover:bg-gray-100 transition"
                >
                  {" "}
                  MF Calculators{" "}
                </a>

                <a
                  href="https://share.google/EwCYSJH9xbLpgmonv"
                  className="block px-6 py-3 hover:bg-gray-100 transition"
                >
                  {" "}
                  Tools and Calculators{" "}
                </a>
              </div>
            </li>

            {/* Login */}
            <li className="relative group">
              <button className="flex items-center gap-2 hover:text-blue-900 transition duration-300">
                Login
                <FaChevronDown className="text-sm mt-1" />
              </button>

              <div className="absolute top-12 left-0 bg-white shadow-xl rounded-xl w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3">
                {/* Nj Client Desk - OPEN IN NEW TAB */}
                <a
                  href="https://cdesk.njwealth.in/cdesk/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 hover:bg-gray-100 transition"
                >
                  Nj Client Desk
                </a>

                <a
                  href="https://ewa.njindiaonline.com/ewa/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 hover:bg-gray-100 transition"
                >
                  NJ E-Wealth
                </a>
              </div>
            </li>

            {/* Contact */}
            <li>
              <a
                href="/contact"
                className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-3 rounded-lg transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div
            className="lg:hidden text-2xl text-gray-800 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg px-6 py-6 border-t">
          <ul className="flex flex-col gap-5 font-medium text-gray-800">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/about">About Us</a>
            </li>

            {/* Offerings */}
            <li>
              <button
                onClick={() => setOfferingsOpen(!offeringsOpen)}
                className="flex items-center justify-between w-full"
              >
                Offerings
                <FaChevronDown />
              </button>

              {offeringsOpen && (
                <div className="ml-4 mt-3 flex flex-col gap-3 text-gray-600">
                  <a href="/product-basket">Product Basket</a>
                  <a href="/client-service">Client Service</a>
                </div>
              )}
            </li>

            {/* Resources */}
            <li>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center justify-between w-full"
              >
                Resources
                <FaChevronDown />
              </button>

              {resourcesOpen && (
                <div className="ml-4 mt-3 flex flex-col gap-3 text-gray-600">
                  <a href="/video-clips">Video Clips</a>
                  <a href="/image-gallery">Image Gallery</a>
                  <a href="/fund-manager-interviews">Fund Manager Interviews</a>
                </div>
              )}
            </li>

            {/* Tools */}
            <li>
              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                className="flex items-center justify-between w-full"
              >
                Tools
                <FaChevronDown />
              </button>

              {toolsOpen && (
                <div className="ml-4 mt-3 flex flex-col gap-3 text-gray-600">
                  <a href="/mf-calculators">MF Calculators</a>
                  <a href="/tools-calculators">Tools and Calculators</a>
                </div>
              )}
            </li>

            {/* Login */}
            <li>
              <button
                onClick={() => setLoginOpen(!loginOpen)}
                className="flex items-center justify-between w-full"
              >
                Login
                <FaChevronDown />
              </button>

              {loginOpen && (
                <div className="ml-4 mt-3 flex flex-col gap-3 text-gray-600">
                  <a href="/nj-client-desk">NJ Client Desk</a>
                  <a href="/nj-e-wealth">NJ E-Wealth</a>
                </div>
              )}
            </li>

            <li>
              <a
                href="/contact"
                className="bg-blue-900 text-white px-5 py-3 rounded-lg inline-block text-center"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
