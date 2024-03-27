import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Pages......................
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";

// Import Components......................
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
