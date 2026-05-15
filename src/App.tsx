import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingContactWidget } from "./components/FloatingContactWidget";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { AccommodationPage } from "./pages/AccommodationPage";
import { ExperiencesPage } from "./pages/ExperiencesPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ReviewsPage } from "./pages/ReviewsPage";
import { BookingPage } from "./pages/BookingPage";
import { ContactPage } from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-emerald-200 selection:text-stone-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/accommodation" element={<AccommodationPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContactWidget />
      </div>
    </Router>
  );
};

export default App;
