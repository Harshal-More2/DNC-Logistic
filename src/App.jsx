import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudy from "./pages/CaseStudy";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;