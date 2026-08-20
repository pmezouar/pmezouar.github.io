import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Error404 from "./components/pages/error404/Error404";
import Home from "./components/pages/home/Home";
import Footer from "./components/layout/Footer";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Experiences from "./components/pages/experiences/Experiences";
import Contact from "./components/pages/contact/Contact";
import Legal from "./components/pages/legal/Legal";



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<Legal />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
