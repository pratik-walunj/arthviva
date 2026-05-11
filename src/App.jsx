import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductBasket from "./pages/ProductBasket";
import ClientService from "./pages/ClientService";
import VideoClips from "./pages/VideoClips";
import ImageGallery from "./pages/ImageGallery";
import FundManagerInterviews from "./pages/FundManagerInterviews";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product-basket" element={<ProductBasket />} />
          <Route path="client-service" element={<ClientService />} />
          <Route path="video-clips" element={<VideoClips />} />
          <Route path="image-gallery" element={<ImageGallery />} />
          <Route
            path="fund-manager-interviews"
            element={<FundManagerInterviews />}
          />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
