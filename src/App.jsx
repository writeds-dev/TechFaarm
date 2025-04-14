import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reel from "./components/Reel";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import FollowUs from "./components/FollowUs";
import SocialMediaLinks from "./components/SocialMediaLinks";
import ContactDetails from "./components/ContactDetails";
import GetStarted from "./components/Getstarted";


const App = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  return (
    <Router>
      <div className="w-full">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Reel />
                <Services />
                <Projects />
                <Philosophy />
                <FollowUs />
                <SocialMediaLinks />
                <ContactDetails />
              </>
            }
          />
          <Route path="/about" element={<SocialMediaLinks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactDetails />} />
          <Route path="/get-started" element={<GetStarted />}  />      
            </Routes>
      </div>
    </Router>
  );
};

export default App;
