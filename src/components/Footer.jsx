import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import site_logo from "../images/Final_logo.png";

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img src={site_logo} alt="ArthViva Logo" className="h-20 mb-5" />

            <p className="text-gray-300 leading-7 text-sm">
              ArthViva provides smart financial and investment solutions
              designed to help individuals and businesses achieve long-term
              financial growth and security.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="bg-white/10 hover:bg-blue-700 transition duration-300 p-3 rounded-full"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-white/10 hover:bg-pink-600 transition duration-300 p-3 rounded-full"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-white/10 hover:bg-blue-500 transition duration-300 p-3 rounded-full"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="bg-white/10 hover:bg-blue-800 transition duration-300 p-3 rounded-full"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Quick Links</h2>

            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="/" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-yellow-400 transition">
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/product-basket"
                  className="hover:text-yellow-400 transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/image-gallery"
                  className="hover:text-yellow-400 transition"
                >
                  Resources
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-yellow-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Our Services</h2>

            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-yellow-400 transition cursor-pointer">
                Mutual Funds
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Equity and ETFs
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Insurance
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                Loan against MF
              </li>

              <li className="hover:text-yellow-400 transition cursor-pointer">
                PF
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>

            <div className="space-y-5 text-gray-300">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-yellow-400" />

                <p>Kondhwa Pune, Maharashtra, India</p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-yellow-400" />

                <p>+91 8432339777</p>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-yellow-400" />

                <p>support@arthviva.com</p>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-yellow-400" />

                <p>ruju.g7@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-14 pt-6 text-center text-gray-400 text-sm">
          <p>© 2026 ArthViva. All Rights Reserved.</p>
          <p className="text-xs text-gray-500 text-center">
            Developed by Pratik Walunj
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
