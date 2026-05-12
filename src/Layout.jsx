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
      <Footer />
    </>
  );
}

export default Layout;
