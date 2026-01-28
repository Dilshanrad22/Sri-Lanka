import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSummary } from "./components/AboutSummary";
import { Activities } from "./components/Activities";
import { Homestay } from "./components/Homestay";
import { LocalExperiences } from "./components/Experiences";
import { Location } from "./components/Location";
import { Impact } from "./components/Impact";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-emerald-200 selection:text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <AboutSummary />
        <Activities />
        <Homestay />
        <LocalExperiences />
        <Location />
        <Impact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
