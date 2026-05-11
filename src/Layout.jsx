import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
