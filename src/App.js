import React from "react";
import Navbar from "./components/Navbar";
import Tutorials from "./components/Tutorials";
import Cources from "./components/Cources";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FreeTutorials from "./components/FreeTutorials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Tutorials />
      <Cources />
      <HowItWorks />
      <Pricing />
      <FreeTutorials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
