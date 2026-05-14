import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import agent from "./images/popup.jpg";

function Layout() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen">
        <Outlet />
      </main>
      {/* FLOATING IMAGE START */}
      <a
        href="https://p.njw.bz/42203"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 z-50"
      >
        <img
          src={agent}
          alt="Open Mutual Fund Account"
          className="w-40 md:w-56 lg:w-64 object-contain hover:scale-105 transition duration-300"
        />
      </a>
      {/* FLOATING IMAGE END */}
      <a
        href="https://wa.me/918432339777"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-14 h-14 md:w-16 md:h-16 hover:scale-110 transition duration-300 drop-shadow-2xl"
        />
      </a>
      <Footer />
    </>
  );
}

export default Layout;
