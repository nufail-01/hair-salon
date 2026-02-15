import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HeroSection from "./components/hero/HeroSection.jsx";
import AboutSection from "./components/about/AboutSection.jsx";
import OpeningHours from "./components/hours/OpeningHours.jsx";
import StylingShowcase from "./components/styling/StylingShowcase.jsx";
import ServiceSection from "./components/service-section/ServiceSection.jsx";
import TeamSection from "./components/team-member/TeamSection.jsx";
import PricingSection from "./components/pricing/PricingSection.jsx";
import PhotoGallery from "./components/gallery/PhotoGallery.jsx";
import ContactSection from "./components/contact/ContactSection.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <OpeningHours />
      <StylingShowcase />
      <ServiceSection />
      <TeamSection />
      <PricingSection />
      <PhotoGallery />
      <ContactSection />
      <Footer />
    </>
    // <Home />
    //   <div className="bg-red-500 text-white text-3xl p-10">
    //   Tailwind is Working 🎉
    // </div>
  );
}

export default App;
