import { Routes, Route } from "react-router-dom";

import { Header } from "./components/site/Header";
import { Footer } from "./components/site/Footer";

import Home from "./pages/Home";
import About from "./pages/about";
import Academics from "./pages/academics";
import Achievements from "./pages/achievements";
import Admissions from "./pages/admissions";
import Campus from "./pages/campus";
import Contact from "./pages/contact";
import Faculty from "./pages/faculty";
import FAQs from "./pages/faqs";
import Gallery from "./pages/gallery";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </>
  );
}